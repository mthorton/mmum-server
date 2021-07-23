require("dotenv").config();
const Express = require("express"); // api framework
const cors=require('cors');
const app = Express();



const db = require("./db"); // connects to database

const controllers = require("./controllers");

app.use(Express.json());

app.use(require('./middleware/headers'));

app.use("/user", controllers.userController);
app.use(cors());

//app.use(require("./middleware/validate-jwt"));

app.use("/log", controllers.logController);


db.authenticate()
  .then(() => db.sync()) // => {force: true} // used to generate new table when adding columns.
  //.then(() => db.sync({ force: true})) 
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server]: App is listening on ${process.env.PORT}`));
  })
  .catch((err) => {
    console.log(`[Server]: Server Crashed. ${err}`);
  });