export type ApiResopnse = {
    success: boolean,
    data?: any,
    error?: {
        statusCode: number,
        message: string
    }
}