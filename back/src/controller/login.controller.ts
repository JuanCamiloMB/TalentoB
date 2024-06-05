import { Request, Response } from "express";
import { logInUser } from "../services/user.services";

export async function handleLogInRoute(req: Request, res: Response) {
  const { username, password }: { username: string; password: string } =
    req.body;

  if (!username || username == null || !password || password == null) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const userToken = await logInUser(username, password);

  if (userToken instanceof Error) {
    return res.status(400).json({ message: userToken.message });
  }

  return res
    .status(200)
    .json({ message: "User logedIn", userToken: userToken });
}
