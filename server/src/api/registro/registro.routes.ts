import { Router } from "express";
import * as CtrlRegistro from "./registro.controller";

const router = Router();

router.get("/", CtrlRegistro.getRegistros);
router.post("/", CtrlRegistro.createRegistro);
router.delete("/:id", CtrlRegistro.deleteRegistro);

export default router;
