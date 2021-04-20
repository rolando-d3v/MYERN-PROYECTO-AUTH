import {RequestHandler} from 'express'
import {getRepository} from 'typeorm'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const loginAuth : RequestHandler = async (req, res) => {
return res.json({msn:'hello world'})
}