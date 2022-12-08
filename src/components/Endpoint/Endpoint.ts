import { BodyRequest } from "../BodyRequest/BodyRequest"
import { Parameter } from "../Parameter/Parameter"
import {Response} from '../Response/Response'

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS",
    HEAD = "HEAD",
    TRACE = "TRACE",
    CONNECT = "CONNECT"
}

export type Endpoint = {
    id: string,
    path: string,
    httpMethod: HttpMethod,
    description: string,
    bodyRequest: BodyRequest,
    response: [Response],
    parameter: [Parameter]
}