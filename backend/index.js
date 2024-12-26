import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/user.route.js";
import cookieParser from 'cookie-parser';
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true, 
}));

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to MongoDB Successfully!");
})
.catch((err) => {
    console.log(err);
});


app.listen(9000, () => {
    console.log("Server is running on Port 9000!");
});

app.use("/api/auth", authRouter);