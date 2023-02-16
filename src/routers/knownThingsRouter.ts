import { Router } from "express";
import {
  getKnownThing,
  getKnownThings
} from "../controllers/knownThingsController.js";

const knownThingsRouter = Router();

knownThingsRouter.get("/things", getKnownThings);
knownThingsRouter.get("/things/:idThing", getKnownThing);

export default knownThingsRouter;
