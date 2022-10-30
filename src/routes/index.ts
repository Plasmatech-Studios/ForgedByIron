import express from 'express';
// import auth from './auth';

const router = express.Router();

export function setUpRouter() {

    const createError = require('http-errors')
    
    router.get('/', (_req, res) => {
        res.send('Hello World!');
    });
    
    router.use(async (_req, _res, next) => {

        next(createError.NotFound('Route not Found'))
    })
    // router.use('/auth', auth);
    
    
    // @ts-expect-error TODO need to redo typing / test still works
    router.use((err, req, res, next) => {
        res.status(err.status || 500).json({
            status: false,
            message: err.message
        })
    })

    return router
}

