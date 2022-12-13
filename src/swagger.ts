const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const outputFile = "./swagger.json";
const endpointsFiles = ["src/routes/api.ts"];
const doc = {
    info: {
        title: 'Api Design Master - API',
        description: 'This is for my project of ADM',
        versiom: '1.0.0'
    },
    host: 'http://localhost:8080',
    basePath: '/api/v1',
    schemes: ['http'],
    definitions: {
        Api: {
            title: "Api Design",
            version: "1.0.1",
            baseUrl: "http://localhost:8080",
            description: "This is my first api design",
            isArchived: false,
            resource: [{ $ref: '#/definitions/Resource' }],
            schema: [{ $ref: '#/definitions/Schema' }],
            enum: [{ $ref: '#/definitions/Enum' }]
        },
        BodyRequest: {
            description: "string",
            schemaId: { $ref: '#/definitions/Schema' }
        },
        Endpoint: {
            path: "/users",
            httpMethod: {
                '@enum': [
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE",
                    "PATCH",
                    "OPTIONS",
                    "HEAD",
                    "TRACE",
                    "CONNECT"
                ]
            },
            description: "string",
            bodyRequest: { $ref: '#/definitions/BodyRequest' },
            response: [{ $ref: '#/definitions/Response' }],
            parameter: [{ $ref: '#/definitions/Parameter' }]
        },
        Enum: {
            name: "string",
            options: ["string"]
        },
        Field: {
            name: "string",
            type: {
                '@enum': [
                    "String",
                    "Number",
                    "Boolean",
                    "Enum",
                    "Schema"
                ]
            },
            enum: { $ref: '#/definitions/Enum' },
            schema: { $ref: '#/definitions/Schema' },
            nullable: false,
            required: true
        },
        Parameter: {
            name: "string",
            description: "string",
            required: true,
            from: {
                '@enum': [
                    "Query",
                    "Path",
                    "Body",
                    "Header",
                ]
            }
        },
        Resource: {
            title: "string",
            description: "string",
            endpointId: [{ $ref: '#/definitions/Endpoint' }]
        },
        Response: {
            description: "string",
            statusCode: "string",
            schemaId: { $ref: '#/definitions/Schema' }
        },
        Schema: {
            name: "string",
            fields: [{ $ref: '#/definitions/Field' }]
        }
    }
};;

swaggerAutogen(outputFile, endpointsFiles, doc);