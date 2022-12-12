import { Api } from './Api';
import { ApiDal } from './apiDAL';
import { ApiValidator } from './api.validation';
import { ApiResponse } from '../../util/ApiResponse';

export class ApiService {
    apiDal: ApiDal
    apiValidator: ApiValidator
    constructor() {
        this.apiDal = new ApiDal()
        this.apiValidator = new ApiValidator()
    }

    async getAll(): Promise<ApiResponse> {
        const result = await this.apiDal.getAll()
        return result
    }

    async getById(id: string): Promise<ApiResponse> {
        const result = await this.apiDal.getById(id)
        return result
    }

    async create(api: Api): Promise<ApiResponse> {
        const [isValid, message] = this.apiValidator.validate(api)
        if (isValid) {
            const result = await this.apiDal.create(api)
            return result
        } else {
            return {
                success: false,
                error: {
                    statusCode: 406,
                    message
                }
            }
        }
    }

    async update(id: string, api: Api): Promise<ApiResponse> {
        const [isValid, message] = this.apiValidator.validate(api)
        if (isValid) {
            const result = await this.apiDal.update(id, api)
            return result
        } else {
            return {
                success: false,
                error: {
                    statusCode: 406,
                    message
                }
            }
        }
    }

    async delete(id: string): Promise<ApiResponse> {
        const result = await this.apiDal.delete(id)
        return result
    }
}