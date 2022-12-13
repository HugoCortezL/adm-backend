export enum From {
    Query = "Query",
    Path = "Path",
    Body = "Body",
    Header = "Header",
}

export type Parameter = {
    id: string,
    name: string,
    description: string,
    required: boolean,
    from: From
}