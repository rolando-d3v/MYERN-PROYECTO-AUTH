import {Router } from 'express'
import * as CtrlRegistro from './registro.controller'

const router = Router()

router.get('/', CtrlRegistro.getRegistros)

export default router