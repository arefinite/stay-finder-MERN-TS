import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt'
import { generateToken } from '../service/auth'
import { User } from '../model/user'

// * @@ Description: register new user
// * @@ Url: /api/v1/auth/register
// * @@ Method: Post
// * @@ Access: Public
export const registerUser = async (req: Request, res: Response) => {
  //validation checks
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({ success: false, message: errors.array() })

  const { name, email, password } = req.body
  try {
    //check if user already exists
    const foundUser = await User.findOne({ email })
    if (foundUser)
      return res
        .status(400)
        .json({ success: false, message: 'User already exists' })
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10)
    //create the new user
    const user = await User.create({ name, email, password: hashedPassword })
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: 'Registration failed' })
    //generate token and store token in cookie
    generateToken(res, String(user._id))
    //sending success response
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      userId: user._id,
    })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Something went wrong!' })
  }
}

// * @@ Description: login user
// * @@ Url: /api/v1/auth/login
// * @@ Method: Post
// * @@ Access: Public
export const loginUser = async (req: Request, res: Response) => {
  //validation checks
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({ success: false, message: errors.array() })
  const { email, password } = req.body
  try {
    //check if user exits
    const user = await User.findOne({ email })
    if (!user)
      return res.status(400).json({ success: false, message: 'User not found' })
    //verify the password
    const verifiedPassword = await bcrypt.compare(password, user.password)
    if (!verifiedPassword)
      return res
        .status(400)
        .json({ success: false, message: 'Wrong credentials' })
    //generate token and store token in cookie
    generateToken(res, String(user._id))

    //sending success response
    res.status(200).json({
      success: true,
      message: 'Login successful',
      userId: user._id,
    })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Something went wrong!' })
  }
}

// * @@ Description: logout user
// * @@ Url: /api/v1/auth/logout
// * @@ Method: Post
// * @@ Access: Private
export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie('access_token')
  res.send()
}

// * @@ Description: validate user
// * @@ Url: /api/v1/auth/validate-user
// * @@ Method: get
// * @@ Access: Private
export const validateUser = (req: Request, res: Response) => {
  res.status(200).json({ success: true, userId: req.userId })
}
