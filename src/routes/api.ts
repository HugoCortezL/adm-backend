import express from 'express'
import { ApiController } from '../components/Api/api.controller'

export const apiRouter = express.Router()
const apiController = new ApiController()

apiRouter.post("/api", apiController.create)
