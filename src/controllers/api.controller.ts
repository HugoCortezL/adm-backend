import { Request, Response } from 'express';
import { getAllApis, getApiById, insertApi, updateApi, deleteApi } from '../use-cases/api'

export class ApiController {

    async getAll(_: Request, res: Response) {
        const result = await getAllApis()
        res.status(result.statusCode).send(result)
    }

    async getById(req: Request, res: Response) {
        const id = req.params.id || ""
        const result = await getApiById(id)
        res.status(result.statusCode).send(result)
    }

    async insert(req: Request, res: Response) {
        const api = req.body
        const result = await insertApi(api)
        res.status(result.statusCode).send(result)
    }

    async update(req: Request, res: Response) {
        const api = req.body
        const id = req.params.id || ""
        const result = await updateApi(id, api)
        res.status(result.statusCode).send(result)
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id || ""
        const result = await deleteApi(id)
        res.status(result.statusCode).send(result)
    }
}