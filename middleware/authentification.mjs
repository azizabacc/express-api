import  jwt  from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();
const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers["authorization"] 
    console.log(req.headers["authorization"])
    const token = authHeader
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,token)=>{
      if(err) return res.sendStatus(403)
      req.token = token
      next();
    })

  }

export default authenticateToken;