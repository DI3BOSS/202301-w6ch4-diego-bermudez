import "./loadEnvironment.js";
import express from "express";

const port = process.env.PORT;

const app = express();

app.get("/things", (req, res) => {
  res.status(200).json({ id: 1, thing: "crear una response con status 200" });
});

app.listen(port);
