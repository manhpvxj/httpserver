import express from 'express';
import { getStudentInfo } from '../controllers/StudentController.js';

const router = express.Router();

export const initWebRoute = (app) => {
    router.head("/", (_, res) => {
        res.status(200).send('<p>Welcome to HTTP Server<p>');
    })
    router.post("/:studentId", getStudentInfo);

    return app.use("/api", router);
}