import { connect } from 'mongoose'

export const db = async () => {
  try {
    await connect(process.env.DB_URI as string)
    console.log('Database connection established')
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}
