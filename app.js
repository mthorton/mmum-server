require("dotenv").config();
const Express = require("express"); // api framework
const cors=require('cors');
const app = Express();

const db = require("./db"); // connects to database

const controllers = require("./controllers");

// middleware function. Allows req.body. Must go above all other routes. 
app.use(Express.json()); 

app.use(require('./middleware/headers'));

app.use("/user", controllers.userController);
app.use(cors());

//app.use(require("./middleware/validate-jwt"));

app.use("/log", controllers.logController);

dbConnection.authenticate()
  .then(() => dbConnection.sync()) 
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server]: App is listening on ${process.env.PORT}`));
  })
  .catch((err) => {
    console.log(`[Server] has crashed: ${err}`);
  });