import { Api } from './Api';
import { ApiDal } from './apiDAL';
import { ApiValidator } from './api.validation';
import { ApiResopnse } from '../../util/ApiResopnse';

export class ApiService {
    apiDal: ApiDal
    apiValidator: ApiValidator
    constructor() {
        this.apiDal = new ApiDal()
        this.apiValidator = new ApiValidator()
    }

    async create(api: Api): Promise<ApiResopnse> {
        const [isValid, message] = this.apiValidator.validate(api)
        if(isValid){
            const result = await this.apiDal.create(api)
            return result
        }else{
            return {
                success: false,
                error: {
                    statusCode: 406,
                    message
                }
            }
        }
    }
}