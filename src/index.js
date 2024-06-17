import express from "express";
import { PORT } from "./config/server.config";
import connectDb from "./config/db";

const app = express();

app.get("/ping", (req, res) => {
  console.log("Ping");
  res.send("Ping");
});

app.listen(PORT, (req, res) => {
  console.log(`Server started ${PORT}`);
  connectDb();
  console.log("Mongodb connected");
});
