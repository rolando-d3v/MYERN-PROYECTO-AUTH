import { Router } from "express";

//controllers
import * as CtrlRegistro from "./registro.controller";

//middlewares
import {authToken} from "../../middleware/authToken";


const router = Router();
router.get("/", CtrlRegistro.getRegistros);
router.post("/", CtrlRegistro.createRegistro);
router.delete("/:id", CtrlRegistro.deleteRegistro);

export default router;
