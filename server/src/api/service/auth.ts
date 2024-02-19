import { Response } from 'express';
import  jwt  from 'jsonwebtoken';


export const generateToken = (res:Response, id:string) => {
        //generate the token
        const token = jwt.sign(
            { userId: id },
            process.env.SECRET_KEY as string,
            {
              expiresIn: '1d',
            }
          )
          //store token in cookie
          res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'PRODUCTION',
          })
  return token
}