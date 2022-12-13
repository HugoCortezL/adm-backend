import { ApiDal } from "../../data-access"
import { ApiResponse } from "../../util/ApiResponse"

export const deleteApi = async (id: string): Promise<ApiResponse> => {
    const apiDal = new ApiDal()
    try {
        const success = await apiDal.delete(id)
        return {
            success,
            statusCode: 200
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