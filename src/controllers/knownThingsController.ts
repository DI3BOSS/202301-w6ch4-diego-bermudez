import type { Request, Response } from "express";
import knownThings from "../data/knownThings.js";

export const getKnownThings = (req: Request, res: Response) => {
  res.status(200).json([...knownThings]);
};

export const getKnownThing = (req: Request, res: Response) => {
  const { idThing }  = req.params;

  const knownThing = knownThings.find((knownThing) => knownThing.idThing === + idThing);
  res.status(200).json({ knownThing });
};



