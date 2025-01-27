const express = require("express");
require("dotenv").config();

const connectToMongo = require("./db/connection");
const router = require("./routes");

const app = express();
// const port = process.env.NODE_LOCAL_PORT;
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/service-requests", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

module.exports = app;
