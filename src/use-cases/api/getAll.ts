import { ApiDal } from "../../data-access"
import { ApiResponse } from "../../util/ApiResponse"

export const getAllApis = async (): Promise<ApiResponse> => {
    const apiDal = new ApiDal()
    const apis = await apiDal.getMany({}, { resource: 0, schema: 0, enum: 0, __v: 0 })
    return {
        success: true,
        statusCode: 200,
        data: apis
    }
}