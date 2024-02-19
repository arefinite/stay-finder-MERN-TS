import jwt, { JwtPayload } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

declare global {
  namespace Express {
    interface Request {
      userId: string
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies['access_token']
  if (!token)
    return res
      .status(400)
      .json({ success: false, message: 'Unauthorized access' })
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string)
      req.userId = (decoded as JwtPayload).userId
      next()
  } catch (err) {
    res.status(403).json({ success: false, message: 'Unauthorized access' })
  }
}
