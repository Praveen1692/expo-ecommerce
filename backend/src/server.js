import express from "express";
import path from "path";
import connectToDb from "../config/db.js";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
dotenv.config();

const app = express();
app.use(clerkMiddleware());


connectToDb();


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("api/health", (req, res) => {
    res.status(200).json({ message: "ok", status: 200, data: {} });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
