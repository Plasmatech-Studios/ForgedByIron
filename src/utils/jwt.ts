import  jwt from 'jsonwebtoken';
import createError from 'http-errors';


require('dotenv').config()

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

export async function signAccessToken(payload: string | Buffer | object){
    if (!accessTokenSecret) throw createError.InternalServerError();

    const token = await new Promise((resolve, reject) => {
        jwt.sign({payload}, accessTokenSecret, {}, (err, token) => {
            if (err) reject(createError.InternalServerError());
            else resolve(token);
        })
    })

    return token;
}

export async function verifyAccessToken(token: string){
    if (!accessTokenSecret) throw createError.InternalServerError();

    return await new Promise((resolve, reject) => {
        jwt.verify(
            token,
            accessTokenSecret,
            function(err, payload){
                if(err) {
                    const message = err.message === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
                    return reject(createError.Unauthorized(message));
            }
            resolve(payload);
        }
        )
    })
}

export default  {
    verifyAccessToken,
    signAccessToken,
}
