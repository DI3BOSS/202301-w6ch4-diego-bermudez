import "./loadEnvironment.js";
import express from "express";
import knownThingsRouter from "./routers/knownThingsRouter.js";

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/", knownThingsRouter);

app.listen(port);
