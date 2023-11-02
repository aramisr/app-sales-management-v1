import "dotenv/config"
import express from "express"
import routes from './routes'
import connectDB from "./db/connect"

const app = express()

//Conectarnos a la DB
connectDB()

//Inicializo todas las rutas llamando un solo archivo
app.use("/api", routes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("APP escuchando en puerto:", PORT)
})