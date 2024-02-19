import { app } from './api/app'
import 'dotenv/config'
import { db } from './config/db'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
  db()
})
