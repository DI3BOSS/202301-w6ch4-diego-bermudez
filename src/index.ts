import "./loadEnvironment.js";
import express from "express";
import knownThings from "./data/KnownThings.js";

const port = process.env.PORT;

const app = express();

app.get("/things", (req, res) => {
  res.status(200).json([...knownThings]);
});

app.listen(port);
