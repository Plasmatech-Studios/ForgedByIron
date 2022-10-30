import express from 'express';
import '@prisma/client';
import dotEnv from 'dotenv'
import bodyParser from 'body-parser';
import multer from 'multer';

dotEnv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// redirect to routes/index.js
// const route = require('./routes');
// app.use('/', route);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);

    setInterval(() => {
        console.log('its still here')
    }, 30000)
});


