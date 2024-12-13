import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute/index.js";
import employeeRouter from "./routes/employeeRoute/index.js"
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/user", userRouter);
app.use("/api/employee", employeeRouter)
app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
