import express from "express";
import { signin, signOut, signup } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get('/signout', signOut);


export default router;