const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/server-config");
const apiRoutes = require("./routes");
const app = express();
const db = require("./models");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

prepareAndStartServer();
