import { Request, Response } from "express";
import { getUser, updateProfile } from "../services/user.services";

export async function handleUpdateProfile(req:Request, res:Response) {
    const {
        id_user,
        name,
        username,
        email,
      }: {
        id_user: number,
        name: string;
        username: string;
        email: string;
      } = req.body.userData;
      

    const user = await updateProfile(id_user, name, username, email)

    return res
        .status(201)
        .json({ message: "User updated", userData: user});
}

export async function handleGetUser(req:Request, res:Response) {
  const {userId} = req.body
  const user = await getUser(userId)
  return res.status(200).json(user)
}