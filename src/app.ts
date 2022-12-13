import express from 'express';
import "./database"
import { apiRouter } from "./routes/api";

const app = express();

app.use("/api/v1", apiRouter)

export default app