require("dotenv").config();
const express = require("express"); // api framework
const cors=require('cors');
const app = express();
const bodyParser = require('body-parser')
const db = require("./db"); // connects to database

<<<<<<< HEAD

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json()) // for parsing application/json

// middleware function. Allows req.body. Must go above all other routes. 
app.use(express.json()); 

const controllers = require("./controllers");

=======
const db = require("./db"); // connects to database

const controllers = require("./controllers");

app.use(Express.json());

>>>>>>> a1ddfba2c45c1ed50c16330df2a773727aeddb19
app.use(require('./middleware/headers'));

app.use("/user", controllers.userController);
app.use(cors());

//app.use(require("./middleware/validate-jwt"));

app.use("/log", controllers.logController);

db.authenticate()
<<<<<<< HEAD
  .then(() => db.sync())
  //.then(() => db.sync({ force: true})) 
=======
  .then(() => db.sync()) 
>>>>>>> a1ddfba2c45c1ed50c16330df2a773727aeddb19
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server]: App is listening on ${process.env.PORT}`));
  })
  .catch((err) => {
    console.log(`[Server] has crashed: ${err}`);
  });