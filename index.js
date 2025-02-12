const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs");

app.use(express.json());

app.use('/', routes);

const specs = swaggerJsdoc({ definition: swaggerDocument, apis: ["./routes/*.js"] });
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));