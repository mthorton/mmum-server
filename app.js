require("dotenv").config();
const express = require("express"); // api framework
const cors=require('cors');
const app = express();
const bodyParser = require('body-parser')
const db = require("./db"); // connects to database


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json()) // for parsing application/json

// middleware function. Allows req.body. Must go above all other routes. 
app.use(express.json()); 

const controllers = require("./controllers");

app.use(require('./middleware/headers'));

app.use("/user", controllers.userController);
app.use(cors());

//app.use(require("./middleware/validate-jwt"));

app.use("/log", controllers.logController);


db.authenticate()
  .then(() => db.sync())
  //.then(() => db.sync({ force: true})) 
  .then(() => {
    app.listen(3000, () =>
      console.log(`[Server: ] App is listening on Port ${3000}`)
    );
  })
  .catch((err) => {
    console.log("[Server: ] Server Crashed");
    console.error(err);
  });