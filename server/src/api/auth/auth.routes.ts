import { Router } from "express";
import * as CtrlAuth from "./auth.controller";

const router = Router();

router.post("/login", CtrlAuth.loginAuth);

export default router;
