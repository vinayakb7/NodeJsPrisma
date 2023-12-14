import "dotenv/config"
import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=> { return res.send("get call") })

import routes from "./Routes/index.js"
app.use(routes)

app.listen(PORT, () => console.log(`App is running on ${PORT}`))