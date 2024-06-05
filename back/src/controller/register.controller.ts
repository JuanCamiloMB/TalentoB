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

  const user = await registerUser(name, username, email, password);

  if (user instanceof Error) {
    return res.status(400).json({ message: user.message });
  }
  return res
    .setHeader("Set-Cookie", `token=${username}`)
    .status(200)
    .json({ message: "User registered", userData: user});
}
