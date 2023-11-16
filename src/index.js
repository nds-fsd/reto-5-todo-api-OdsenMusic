const express = require("express");
const app = express();
const todoRouter = require("./routers/todo");
const cors = require("cors");

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "PATCH"],
  })
);

app.use(express.json());

app.use(todoRouter);

app.listen(3000, () => {
  console.log("Server is up and running in port 3000");
});
