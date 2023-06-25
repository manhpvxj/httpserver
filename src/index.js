import express from 'express';
import cors from 'cors';
import mongooseConnect from './config/db.js';
import dotenv from 'dotenv';
import { initWebRoute } from './routes/router.js';



dotenv.config();
const port = 3000;

const app = express();

mongooseConnect();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit:'50mb', extended: false }));

initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
