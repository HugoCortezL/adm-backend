import { Request, Response } from 'express';
import { ApiService } from './api.service';

export class ApiController {

    async create(req: Request, res:Response) {
        const service = new ApiService()
        const user = req.body
        const result = await service.create(user)
        res.status(201).send(result)
    }
}