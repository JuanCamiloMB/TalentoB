import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, "qwerty");
    if (decoded) next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
