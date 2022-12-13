import express from 'express';
import bodyParser from "body-parser";
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import cors from "cors";
import "./database"
import { apiRouter } from "./routes/api";

export const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const swaggerOptions = {
    explorer: true,
};

app.use("/api/v1", apiRouter)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));

const server = app.listen(8080, () => {
    console.log(`Server ir running at http://localhost:8080/`)
})

server.timeout = 1000;