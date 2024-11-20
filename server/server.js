import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/test", (req, res) => {
  res.send("Api is working");
});

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
