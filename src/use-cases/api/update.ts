import { ApiDal } from "../../data-access"
import { Api } from "../../models"
import { ApiResponse } from "../../util/ApiResponse"
import { validateApi } from '../../validations/api.validation'

export const updateApi = async (id: string, api: Api): Promise<ApiResponse> => {
    const [isValid, message] = validateApi(api)
    if (isValid) {
        const apiDal = new ApiDal()
        try {
            await apiDal.getOne({ _id: id }, {})
        }
        catch {
            return {
                success: false,
                statusCode: 404,
                error: {
                    message: "Do not exist an api with this id."
                }
            }
        }
        const data = await apiDal.update(id, api)
        return {
            success: true,
            statusCode: 200,
            data
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