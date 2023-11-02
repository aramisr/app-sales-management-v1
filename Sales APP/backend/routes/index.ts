import express from 'express'
import authRoutes from './auth'

const router = express.Router()

//Importar rutas de /auth.ts
router.use("/auth", authRoutes)

export default router



