export type ApiResponse = {
    success: boolean,
    data?: any,
    error?: {
        statusCode: number,
        message: string
    }
}