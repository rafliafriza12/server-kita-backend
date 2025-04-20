import express from "express";
import {
  login,
  register,
  logout,
  editProfile,
  changePassword,
  getUserProfile,
  changeProfilePhoto,
  getAllUsers,
  deleteUserById,
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/logout", logout);
authRouter.put("/editProfile/:userId", editProfile);
authRouter.put("/editProfile", editProfile);
authRouter.put("/changePassword", changePassword);
authRouter.get("/getUserProfile", getUserProfile);
authRouter.get("/getAllUsers", getAllUsers);
authRouter.put("/changeProfilePhoto", changeProfilePhoto);
authRouter.delete("/deleteUserById/:userId", deleteUserById);

export default authRouter;
