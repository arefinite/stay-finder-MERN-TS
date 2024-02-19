import { verifyToken } from './../middleware/auth'
import { registerUserValidator, loginUserValidator } from './../validator/auth'
import { Router } from 'express'
import {
  loginUser,
  logoutUser,
  registerUser,
  validateUser,
} from '../controller/auth'

export const authRouter = Router()

authRouter.post('/register', registerUserValidator, registerUser)
authRouter.post('/login', loginUserValidator, loginUser)
authRouter.post('/logout', logoutUser)
authRouter.get('/validate-user', verifyToken, validateUser)
