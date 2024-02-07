import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const port = 4000;
const db = dotenv.config();

app.get("/", (req, res) => {
  res.send("hello");
});

await mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port);
