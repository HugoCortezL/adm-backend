import { Api } from "./Api";
import apiModel from './api.schema'
import { ApiResponse } from '../../util/ApiResponse';

export class ApiDal {

    async #getOne(filters: object, projection: object): Promise<Api> {
        const apiPromise = Promise.resolve(apiModel.findOne(filters, projection))
        const api = await apiPromise
        return (api as unknown as Api)
    }

    async #getMany(filters: object, projection: object): Promise<Api[]> {
        const apiPromise = Promise.resolve(apiModel.find(filters, projection))
        const api = await apiPromise
        return (api as unknown as Api[])
    }

    async getAll(): Promise<ApiResponse> {
        const apis = await this.#getMany({}, { resource: 0, schema: 0, enum: 0, __v: 0 })
        return {
            success: true,
            data: apis
        }
    }

    async getById(id: string): Promise<ApiResponse> {
        try{
            const api = await this.#getOne({ _id: id }, {})
            return {
                success: true,
                data: api
            }
        }
        catch{
            return {
                success: false,
                error: {
                    "statusCode": 404,
                    "message": "Invalid id"
                }
            }
        }
    }

    async create(api: Api): Promise<ApiResponse> {
        const oldApi = await this.#getOne({ title: api.title, version: api.version }, {})
        if (!oldApi) {
            const data = await apiModel.create(api)
            return {
                success: true,
                data
            }
        }
        else {
            return {
                success: false,
                error: {
                    statusCode: 409,
                    message: "Already exist an api with this title and version"
                }
            }
        }
    }

    async update(id: string, api: Api): Promise<ApiResponse> {
        try {
            await this.#getOne({ _id: id }, {})
        }
        catch {
            return {
                success: false,
                error: {
                    "statusCode": 404,
                    "message": "Invalid id"
                }
            }
        }
        const success = await apiModel.updateOne({ _id: id }, {
            $set: {
                title: api.title,
                version: api.version,
                baseUrl: api.baseUrl,
                description: api.description
            }
        })
        return {
            success: success.acknowledged,
            data: {
                "id": id,
                "title": api.title,
                "version": api.version,
                "baseUrl": api.baseUrl,
                "description": api.description
            }
        }
    }

    async delete(id: string): Promise<ApiResponse> {
        try{
            const success = await apiModel.deleteOne({ _id: id })
            return {
                success: success.acknowledged
            }
        }
        catch{
            return {
                success: false,
                error: {
                    "statusCode": 404,
                    "message": "Invalid id"
                }
            }
        }
    }
}