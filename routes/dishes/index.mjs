import express from 'express'
import fs from 'fs';
import authenticateToken from '../../middleware/authentification.mjs';
const dishRouter = express.Router();
//whole list of dishes
dishRouter.get('/',authenticateToken, (req, res) => {
    // Read dishes data from the dishes.json file
    fs.readFile('data/dishes.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading dishes data from dishes.json', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        const dishes = JSON.parse(data);
        res.json(dishes);
      }
    });
  });

  export default dishRouter;
// Route for each dish
//exp : http://localhost:3000/dish/Spaghetti%20Bolognese


