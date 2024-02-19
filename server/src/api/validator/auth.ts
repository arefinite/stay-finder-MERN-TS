import { check } from 'express-validator'

export const registerUserValidator = [
  check('name', 'Name is required').isString(),
  check('email', 'Email is required').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({
    min: 6,
  }),
]

export const loginUserValidator = [
  check('email', 'Email is required').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({
    min: 6,
  }),
]
