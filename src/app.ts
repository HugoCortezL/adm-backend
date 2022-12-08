import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import "./database/connection"
import { apiRouter } from "./routes/api";

export const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/v1", apiRouter)

const server = app.listen(8080, () => {
    console.log(`Server ir running at http://localhost:8080/`)
})

server.timeout = 1000;