import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/hr-portal");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
};

export default connectDB;
