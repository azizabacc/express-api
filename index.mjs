import { app } from "./app.mjs";
import {setupRouter} from "./routes/index.mjs";


//  info page
app.get("/info", (req, res) => {
    const info =
      "Welcome to the Food Dishes API!\n\n" +
      "Use the /dishes route to get the whole list of food dishes.\n\n" +
      "To get the details of a specific dish, make a request to the corresponding route.\n\n";
    res.send(info);
  });
// set up routers
setupRouter(app);

// do before exp eport PORT = 5000 in the terminal
const port = process.env.PORT || 3000 ;
app.listen(port, () => console.log(`listening to port ${port}`));