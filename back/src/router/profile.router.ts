import { Router } from "express";
import { handleGetUser, handleUpdateProfile } from "../controller/profile.controller";
import verifyToken from "../middleware/middleware";

const profileRouter = Router()

profileRouter.post('/update_profile',verifyToken, handleUpdateProfile)
profileRouter.post('/getUser',verifyToken, handleGetUser)

export default profileRouter;