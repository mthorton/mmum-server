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

app.use(Express.json());

app.use("/user", controllers.userController);

app.use("/log", controllers.logController);

dbConnection.authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server]: App is listening on ${process.env.PORT}`));
  })
  .catch((err) => {
    console.log(`[Server]: Server Crashed. ${err}`);
  });