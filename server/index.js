import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//dotenv config
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
  console.log(`Server running on port ${PORT}`);
});
