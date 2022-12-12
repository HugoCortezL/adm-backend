import { Request, Response } from 'express';
import { ApiService } from './api.service';

export class ApiController {

    async getAll(_: Request, res: Response) {
        const service = new ApiService()
        const result = await service.getAll()
        res.status(200).send(result)
    }

    async getById(req: Request, res: Response) {
        const service = new ApiService()
        const id = req.params.id || ""
        const result = await service.getById(id)
        if (result.hasOwnProperty("error") && result.error?.statusCode) {
            res.status(result.error.statusCode).send(result)
        } else {
            res.status(200).send(result)
        }
    }

    async create(req: Request, res: Response) {
        const service = new ApiService()
        const api = req.body
        const result = await service.create(api)
        if (result.hasOwnProperty("error") && result.error?.statusCode) {
            res.status(result.error.statusCode).send(result)
        } else {
            res.status(201).send(result)
        }
    }

    async update(req: Request, res: Response) {
        const service = new ApiService()
        const api = req.body
        const id = req.params.id || ""
        const result = await service.update(id, api)
        if (result.hasOwnProperty("error") && result.error?.statusCode) {
            res.status(result.error.statusCode).send(result)
        } else {
            res.status(200).send(result)
        }
    }

    async delete(req: Request, res: Response) {
        const service = new ApiService()
        const id = req.params.id || ""
        const result = await service.delete(id)
        if (result.hasOwnProperty("error") && result.error?.statusCode) {
            res.status(result.error.statusCode).send(result)
        } else {
            res.status(200).send(result)
        }
    }
}