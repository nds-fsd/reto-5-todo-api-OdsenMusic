const express = require("express");
const app = express();
const todoRouter = require("./routers/todo");

app.use(express.json());

app.use(todoRouter);

app.listen(3000, () => {
  console.log("Server is up and running in port 3000");
});
