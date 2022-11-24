const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
require("./db");
// routes
const indexRoute = require("./routes/index");
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", indexRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
