/*
MASTER BRANCH
DEVELOP BRANCH
MAX'S BRANCH
*/

require("dotenv").config();
const Express = require("express");
const app = Express();
const db = require("./db"); // connects to database
const cors = require('cors');
app.use(require('./middleware/headers'));
app.use(cors());
const controllers = require("./controllers");

// middleware function. Allows req.body. Must go above all other routes. 
app.use(Express.json()); 

app.use("/user", controllers.userController);

// app.use(require("./middleware/validate-jwt"));
app.use("/log", controllers.logController);

db.authenticate()
  .then(() => db.sync()) // => {force: true} // used to generate new table when adding columns.
  //.then(() => db.sync({ force: true})) 
  .then(() => {
    app.listen(3000, () => {
      console.log(`[Server]: App is listening on Port 3000.`);
  });
  })
  .catch((err) => {
    console.log(`[Server]: Server Crashed. Error = ${err}`);
  });