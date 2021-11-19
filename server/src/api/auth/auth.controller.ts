import e, { RequestHandler } from "express";
import { getRepository } from "typeorm";
import config from '../../config/config'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";

export const loginAuth: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validar si el campo esta vacio
    if (!(email && password)) {
      return res.status(400).json({ msn: "required user y password 😕 ❗️ " });
    }

    //busca a user y selecciona el password en typeorm
    const userExiste = await getRepository(User).findOne({
      where: { email: email },
      select: ["id", "email", "password"],
    });

    //validar si el user existe en la db
    if (!userExiste) return res.status(400).json({ msn: "user not found ❗️" });

    //validar si el pass es correcto db
    const userPass = await bcrypt.compare(password, userExiste.password);
    if (userPass === false)
      return res.status(400).json({ msn: "pass incorrect" });

    //crea el jsonwebtoken
    const token = jwt.sign(
      { id: userExiste.id, email: userExiste.email },
      config.jwtSecret,
      { expiresIn: "2h" }
    );
    return res.json({ msn: "login correct", token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msn: "Errorin server" });
  }
};
