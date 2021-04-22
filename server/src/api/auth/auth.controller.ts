import { RequestHandler } from "express";
import { getRepository } from "typeorm";
import config from '../../config/config'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Registro } from "../../entity/Registro";

export const loginAuth: RequestHandler = async (req, res) => {
  try {
    const { user, password } = req.body;

    //validar si el campo esta vacio
    if (!(user && password)) {
      return res.status(400).json({ msn: "required user y password 😕 ❗️ " });
    }

    //busca a user y selecciona el password en typeorm
    const userExiste = await getRepository(Registro).findOne({
      where: { user: user },
      select: ["id", "user", "password"],
    });

    //validar si el user existe en la db
    if (!userExiste) return res.status(400).json({ msn: "user not found ❗️" });

    //validar si el pass es correcto db
    const userPass = await bcrypt.compare(password, userExiste.password);
    if (userPass === false)
      return res.status(400).json({ msn: "pass incorrect" });

    //crea el jsonwebtoken
    const token = jwt.sign(
      { id: userExiste.id, user: userExiste.user },
      config.jwtSecret,
      { expiresIn: "2h" }
    );
    return res.json({ msn: "login correct", token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msn: "Errorin server" });
  }
};
