const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/server-config");
const apiRoutes = require("./routes");
const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

prepareAndStartServer();
