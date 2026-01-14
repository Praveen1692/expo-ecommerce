import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.DR_URL) {
    throw new Error("Please provide DR_URL in the environment variables");
}


const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.DR_URL);


        console.log("✅  Mongoose connection success", connection.connection.host);
        process.exit(0);
    } catch (error) {
        console.log("❌ Mongoose connection error", error);
        process.exit(1);

    }
}

export default connectToDb;
