import express from "express";
import cors from "cors";
import authRouter from "./router/auth.router";
import profileRouter from "./router/profile.router";

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(profileRouter);

export default app;
