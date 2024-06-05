import { Response, Request } from "express";
import { registerUser } from "../services/user.services";

export async function handleRegisterRoute(req: Request, res: Response) {
  const {
    name,
    username,
    email,
    password,
  }: {
    name: string;
    username: string;
    email: string;
    password: string;
  } = req.body;

  if (
    !username ||
    username == null ||
    !email ||
    email == null ||
    !password ||
    password == null ||
    !name ||
    name == null
  ) {
    return res.status(400).json({ message: "Not enougth data" });
  }

  const userToken = await registerUser(name, username, email, password);

  if (userToken instanceof Error) {
    return res.status(400).json({ message: userToken.message });
  }
  return res
    .status(200)
    .json({ message: "User registered", userToken: userToken});
}
