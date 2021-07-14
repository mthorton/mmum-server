require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db"); // connects to database
const cors = require('cors');
app.use(require('./middleware/headers'));
app.use(cors());
const controllers = require("./controllers");

app.use('/test', (req, res) => {
  res.send('This is a message from the test endpoint on the server!')
});

// middleware function. Allows req.body. Must go above all other routes. 
app.use(Express.json());

app.use("/user", controllers.userController);

// app.use(require("./middleware/validate-jwt"));
app.use("/log", controllers.logController);

dbConnection.authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(3000, () => {
      console.log(`[Server]: App is listening on Port 3000.`);
    });
  })
  .catch((err) => {
    console.log(`[Server]: Server Crashed. Error = ${err}`);
  });