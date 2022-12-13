import { Resource, Schema, Enum } from "./"

export type Api = {
    _id: string,
    title: string,
    version: string,
    baseUrl: string,
    description?: string,
    isArchived: boolean,
    resource: [Resource],
    schema: [Schema],
    enum: [Enum]
}