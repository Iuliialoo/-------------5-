import express from 'express'
import path from 'path'
import router from './routers/router.js'
import middleware from './middlewares/middleware.js'

const __dirname = path.resolve();

const app = express()
app.use(express.json())

const hostname = '127.0.0.1'
const port = 5500

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/\nStart: ${new Date()}`)
})

app.use(router)

app.use(middleware.badRequest)