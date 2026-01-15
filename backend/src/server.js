import express from "express";
import path from "path";
import { connectToDb } from "../config/db.js";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { functions, inngest } from "../config/inngest.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(clerkMiddleware());  // add clerk middleware object under the req => req.auth


app.use("/api/inngest", serve({ client: inngest, functions }))


connectToDb();


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("api/health", (req, res) => {
    res.status(200).json({ message: "ok", status: 200, data: {} });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
