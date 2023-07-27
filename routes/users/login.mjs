import express from 'express'
const loginRouter = express.Router();

loginRouter.post("/login", async (req, res) => {
    const user = users.find((user) => user.name === req.body.name);
    if (user == null) {
      return res.status(400).send("cannot find user");
    }
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.send("Success");
      } else {
        res.send("not allowed");
      }
    } catch (error) {
      res.status(500).send();
    }
  });
  export default loginRouter; 