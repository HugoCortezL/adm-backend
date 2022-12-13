import { Api } from "../models";
import apiModel from '../schemas/api.schema'

export class ApiDal {
    async getMany(filters: object, projection: object): Promise<Api[]> {
        const apiPromise = Promise.resolve(apiModel.find(filters, projection))
        const api = await apiPromise
        return (api as unknown as Api[])
    }

    async getOne(filters: object, projection: object): Promise<Api> {
        const apiPromise = Promise.resolve(apiModel.findOne(filters, projection))
        const api = await apiPromise
        return (api as unknown as Api)
    }

    async insert(api: Api): Promise<Api> {
        const data = await apiModel.create(api)
        return (data as unknown as Api)
    }

    async update(id: string, api: Api): Promise<Api> {
        const data = await apiModel.findOneAndUpdate({ _id: id }, api)
        return (data as unknown as Api)
    }

    async delete(id: string): Promise<boolean> {
        const success = await apiModel.deleteOne({ _id: id })
        return success.acknowledged
    }
}