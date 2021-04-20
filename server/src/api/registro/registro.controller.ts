import {Request, Response} from 'express'
// import { RequestHandler } from "express";

export const getRegistros = async (req: Request, res: Response) => {
  res.json({ msn: "hola mundo" });
};



export const createRegistro = async (req: Request, res: Response) => {
  res.json({ msn: "hola mundo created" });
};