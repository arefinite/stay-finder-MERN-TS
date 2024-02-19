import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import { authRouter } from './route/auth'
import path from 'path'

export const app = express()

//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
)
app.use(express.static(path.join(__dirname, '../../../client/dist')))

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'))
}

//routes
app.use('/api/v1/auth', authRouter)
