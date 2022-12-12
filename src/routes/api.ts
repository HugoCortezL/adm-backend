import express from 'express'
import { ApiController } from '../components/Api/api.controller'

export const apiRouter = express.Router()
const apiController = new ApiController()

apiRouter.get("/apis", apiController.getAll)
apiRouter.get("/api/:id", apiController.getById)
apiRouter.post("/apis", apiController.create)
apiRouter.put("/api/:id", apiController.update)
apiRouter.delete("/api/:id", apiController.delete)
