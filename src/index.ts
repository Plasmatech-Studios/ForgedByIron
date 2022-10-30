import express from 'express';
import '@prisma/client';
import dotEnv from 'dotenv'
import bodyParser from 'body-parser';
import multer from 'multer';
import {setUpRouter} from './routes';

dotEnv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const routes = setUpRouter();

// redirect to routes/index.js
app.use('/', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);

});


