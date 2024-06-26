import { SALT } from "../config";
import { User } from "../db.mysql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(
  name: string,
  username: string,
  email: string,
  password: string,
): Promise<Error | any> {
  password = await bcrypt.hash(password, +SALT);
  try {
    const createdUser = await User.create({
      username: username,
      name: name,
      email: email,
      password: password,
    });
    const token = jwt.sign({id_user: createdUser.toJSON().id_user, username: createdUser.toJSON().username},'qwerty')
    return token;
  } catch (err) {
    return err as Error;
  }
}

export async function logInUser(
  username: string,
  password: string
): Promise<Error | any> {
  try {
    const user = await User.findOne({
      where: { username },
    });
    
    if (!user) throw new Error("User not found");
    const isValidPassword = await bcrypt.compare(
      password,
      user.dataValues.password
    );

    if (!isValidPassword) throw new Error("Invalid password");
    const token = jwt.sign({id_user: user.toJSON().id_user, username: user.toJSON().username},'qwerty')
    return token;
  } catch (err) {
    return err as Error;
  }
}

export async function updateProfile(
  id_user: number,
  name: string,
  username: string,
  email: string,
) {
  try {
    const user = await User.findOne({
      where: { id_user },
    });

    user?.set({
      name: name,
      username: username,
      email: email,
    });
    const savedUser = await user?.save();
    return savedUser;
  } catch (err) {
    console.error(err);
    return new Error(`${err}`);
  }
}

export async function getUser(userId: number) {
  try {
    const user = await User.findOne({
      where: { id_user: userId },
    });
    return user;
  } catch (err) {
    console.error(err);
    return;
  }
}