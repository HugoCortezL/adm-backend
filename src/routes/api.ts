import express from 'express'
import { ApiController } from '../controllers/api.controller'

export const apiRouter = express.Router()
const apiController = new ApiController()

apiRouter.get("/apis",
    /*
        #swagger.tags = ['Api'];
        #swagger.summary = 'Get all apis';
        #swagger.responses[200] = {
            description: 'Get all users.',
            schema: {
                success: true,
                data: [
                    { 
                        id: "string",
                        title: "string",
                        version: "string",
                        baseUrl: "string",
                        description: "string",
                        isArchived: false
                    }
                ]
            }
        }
    */
    apiController.getAll
)

apiRouter.get("/api/:id",
    /*
        #swagger.tags = ['Api'];
        #swagger.summary = 'Get appi by id';
        #swagger.responses[200] = {
            description: 'Get Api',
            schema: {
                success: true,
                data: {$ref: '#/definitions/Api'}
            }
        }
        #swagger.responses[404] = {
            description: 'Invalid id',
            schema: {
                success: false,
                error: {
                    "statusCode": 404,
                    "message": "Invalid id"
                }
            }
        }
    */
    apiController.getById
)

apiRouter.post("/apis",

    /*
        #swagger.tags = ['Api'];
        #swagger.summary = 'Create api';
        #swagger.parameters['user'] = {
            in: 'body',
            description: 'The api to be created',
            required: true,
            type: 'Api',
            schema: {
                title: "Api Teste",
                version: "20.0.0",
                baseUrl: "http://hugocortez.com"
            }
        }
        #swagger.responses[201] = {
            description: 'Api created',
            schema: {
                success: true,
                data: { 
                    id: "string",
                    title: "string",
                    version: "string",
                    baseUrl: "string",
                    description: "string",
                    isArchived: false
                }
            }
        }
    */
    apiController.insert
)

apiRouter.put("/api/:id",
    /*
        #swagger.tags = ['Api'];
        #swagger.summary = 'Edit api';
    */
    apiController.update
)

apiRouter.delete("/api/:id",
    /*
        #swagger.tags = ['Api'];
        #swagger.summary = 'Delete api';
        #swagger.responses[200] = {
            description: 'Api deleted',
            schema: {
                success: true
            }
        }
        #swagger.responses[404] = {
            description: 'Invalid id',
            schema: {
                success: false,
                error: {
                    "statusCode": 404,
                    "message": "Invalid id"
                }
            }
        }
    */
    apiController.delete
)
