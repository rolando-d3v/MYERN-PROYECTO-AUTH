// import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express";
// import jwt from 'jsonwebtoken'



// ACCESS TOKEN VALIDO
//******************************/
export const authToken: RequestHandler = async (req, res, next) => {
  try {
    //verifica si el token existe
    const token = req.header("Authorization");
    if (!token) return res.json({ msn: "token not found ❗️❗️" });

    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msn: "Error server", err });
  }
};
