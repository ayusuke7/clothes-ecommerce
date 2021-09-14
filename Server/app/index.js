"use strict";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const expressMiddleware = require("aws-serverless-express/middleware");
const authMiddleware = require("./middlewares/auth");

require("./database");

/* Configure env */
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

/* Routes */
const auth = require("./routes/auth");
const user = require("./routes/users");
const products = require("./routes/products");
const categorys = require("./routes/categorys");
const resources = require("./routes/resources");
const payments = require("./routes/payments");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(expressMiddleware.eventContext());

/* Routes nothing middleware */
app.use(auth);

const middlewareJwt = authMiddleware();
app.use("/users", middlewareJwt, user);

/* Routes Unless Middleware for GET  */
const middlewareGet = authMiddleware(["GET"]);
app.use("/products", middlewareGet, products);
app.use("/categorys", middlewareGet, categorys);
app.use("/resources", middlewareGet, resources);
app.use("/payments", middlewareGet, payments);

module.exports = app;
