import { ApiDal } from "../../data-access"
import { ApiResponse } from "../../util/ApiResponse"

export const getApiById = async (id: string): Promise<ApiResponse> => {
    const apiDal = new ApiDal()
    try {
        const api = await apiDal.getOne({ _id: id }, {})
        return {
            success: true,
            statusCode: 200,
            data: api
        }
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
}