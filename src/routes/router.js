import express from 'express';
import { getStudentInfo } from '../controllers/StudentController.js';
import { recvFile } from '../controllers/FileController.js';
import multer from 'multer';

const upload = multer({dest: 'uploads/'});
const router = express.Router();

export const initWebRoute = (app) => {
    router.head("/", (_, res) => {
        res.status(200).send('<p>Welcome to HTTP Server<p>');
    })
    router.post("/:studentId", getStudentInfo);
    router.put("/file", upload.single('file'), recvFile);
    return app.use("/api", router);
}