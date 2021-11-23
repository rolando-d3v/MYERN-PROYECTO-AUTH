import { Request, Response } from "express";
import { RequestHandler } from "express";
import { validate } from "class-validator";
import { getRepository } from "typeorm";
import { Product } from "../../entity/Product";

//OBTIENE ALL PRODUCT
//********************************/
export const getProducts: RequestHandler = async (req, res) => {
  try {
    const pro = await getRepository(Product).find({
      relations: ["user"],
    });
    return res.json(pro);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};

//CREATE ONE PRODUCT
//********************************/
export const createProduct = async (req: Request, res: Response) => {
  const { title, description, precio, stock, estado, userId } = req.body;

  try {
    const pro = new Product();
    pro.title = title;
    pro.description = description;
    pro.precio = precio;
    pro.stock = stock;
    pro.estado = estado;
    pro.user = userId;

    //validate class-validate
    const errors = await validate(pro);
    if (errors.length > 0) return res.status(400).json(errors);

    //save registro
    await getRepository(Product).save(pro);
    return res.json({ msn: "Product created success 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

//DELETED ONE REGISTRO
//********************************/
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    //si existe el id del registro
    const pro = await getRepository(Product).findOne(req.params.id);
    if (!pro) {
      return res.status(400).json({ msg: "Registro not found ❗️" });
    }

    // deleted un registro
    const product = await getRepository(Product).delete(req.params.id);
    return res.json({ msn: "Product deleted success  ✔️", product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};
