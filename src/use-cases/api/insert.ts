import { ApiDal } from "../../data-access"
import { Api } from "../../models"
import { ApiResponse } from "../../util/ApiResponse"
import { validateApi } from '../../validations/api.validation'

export const insertApi = async (api: Api): Promise<ApiResponse> => {
    const [isValid, message] = validateApi(api)
    if (isValid) {
        const apiDal = new ApiDal()
        const oldApi = await apiDal.getOne({ title: api.title, version: api.version }, {})
        if (!oldApi) {
            const data = await apiDal.insert(api)
            return {
                success: true,
                statusCode: 201,
                data
            }
        }
        else {
            return {
                success: false,
                statusCode: 409,
                error: {
                    message: "Already exist an api with this title and version"
                }
            }
        }
    }
    else {
        return {
            success: false,
            statusCode: 406,
            error: {
                message
            }
        }
    }
}