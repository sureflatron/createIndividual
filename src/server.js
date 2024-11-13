const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { schema, root } = require("./adapters/controllers/graphqlController");
const connectMongoDB = require("./adapters/database/mongoConnection");
//import connectMongoDB from "./adapters/database/mongoConnection";
require("dotenv").config();

connectMongoDB();

const app = express();
app.use(process.env.PATCH, createHandler({ schema, rootValue: root }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor GraphQL en http://localhost:${PORT}/graphql`));
