import { Request, Response } from "express";
import { RequestHandler } from "express";
import { getRepository } from "typeorm";
import { Registro } from "../../entity/Registro";

//OBTIENE ALL REGISTRO
//********************************/
export const getRegistros: RequestHandler = async (req, res) => {
  try {
    const registro = await getRepository(Registro).find({});
    return res.json(registro);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};



//CREATE ONE REGISTRO
//********************************/
export const createRegistro = async (req: Request, res: Response) => {
  try {
    const registro = new Registro();
    registro.user = req.body.user;
    registro.password = req.body.password;

    await getRepository(Registro).save(registro);
    return res.json({ msn: "Registro created success 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};



//DELETED ONE REGISTRO
//********************************/
export const deleteRegistro = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const registro = await getRepository(Registro).delete(req.params.id);
    return res.json({ msn: "Registro deleted success  ✔️", registro });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};
