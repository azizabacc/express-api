import { configDotenv } from 'dotenv';
import express from 'express'
const router = express.Router();
import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken';

configDotenv();
const users = [];

router.get("/", (req, res) => {
    // Return a list of users without the password and dishes data
    const usersWithoutSensitiveData = users.map((user) => ({
      name: user.name,
    }));
    res.json(usersWithoutSensitiveData);
    console.log(users);
  });
  
  router.post("/", async (req, res) => {

    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      console.log(salt);
      console.log(hashedPassword);
      const user = { name: req.body.name, password: hashedPassword, dishes: [] };
      users.push(user);
      res.status(201).send();
    } catch (error) {
      console.log(error)
      res.status(500).send();
    }
  });
  router.post("/login", async (req, res) => {
    const user = users.find((user) => user.name === req.body.name);
    if (user == null) {
      return res.status(400).send("cannot find user");
    }
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        
        const token= jwt.sign(user,process.env.ACCESS_TOKEN_SECRET );
        console.log(token);
        res.json({msg: "success", accessToken : token });
      } else {
        res.send("not allowed");
      }
    } catch (error) {
      res.status(500).send();
    }
  });


export default router;
