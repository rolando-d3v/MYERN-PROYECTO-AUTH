import { Request, Response } from "express";
import { RequestHandler } from "express";
import { validate } from "class-validator";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import bcrypt from "bcryptjs";

//OBTIENE ALL REGISTRO
//********************************/
export const getUsers: RequestHandler = async (req, res) => {
  try {
    const user = await getRepository(User).find({
      select: ["email", "codigo", "estado"],
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};

//CREATE ONE REGISTRO
//********************************/
export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, country, city, phone, codigo, estado } =
    req.body;

  try {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = await bcrypt.hash(password, 10);
    user.country = country;
    user.city = city;
    user.phone = phone;
    user.codigo = codigo;
    user.estado = estado;

    //validate class-validate
    const errors = await validate(user);
    if (errors.length > 0) return res.status(400).json(errors);

    //save registro
    await getRepository(User).save(user);
    return res.json({ msn: "Registro created success 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

//DELETED ONE REGISTRO
//********************************/
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    //si existe el id del registro
    const userId = await getRepository(User).findOne(req.params.id);
    if (!userId) {
      return res.status(400).json({ msn: "Registro not found ❗️" });
    }

    // deleted un registro
    const user = await getRepository(User).delete(req.params.id);
    return res.json({ msn: "Registro deleted success  ✔️", user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};
