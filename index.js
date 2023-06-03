const express = require("express");
const dotenv = require("dotenv").config()
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const cors = require("cors");
const connectDB = require("./conf/db")
const colors = require("colors")

const app = express();

connectDB();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server is running on port", PORT))