import { Api } from "./Api";
import apiModel from './api.schema'
import { ApiResopnse } from '../../util/ApiResopnse';

export class ApiDal {
    
    async #getByNameAndVersion(title: string, version: string): Promise<Api>{
        const apiPromise = Promise.resolve(apiModel.findOne({title, version}))
        const api = await apiPromise
        return (api as unknown as Api)
    }

    async create(api: Api): Promise<ApiResopnse>{
        const oldApi = await this.#getByNameAndVersion(api.title, api.version)
        if(!oldApi){
            const data = await apiModel.create(api)
            return {
                success: true,
                data
            }
        }
        else{
            return {
                success: false,
                error: {
                    statusCode: 409,
                    message: "Already exist an api with this title and version"
                }
            }
        }
    }
}