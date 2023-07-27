import  jwt  from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();

const generateAccessToken =(user) => {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn : '15s'} );
}