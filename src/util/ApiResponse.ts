export type ApiResponse = {
    success: boolean,
    statusCode: number,
    data?: any,
    error?: {
        message: string
    }
}