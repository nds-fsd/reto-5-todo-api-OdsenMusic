const express = require("express");
const app = express();
const todoRouter = require("./routers/todo");
const groupsRouter = require("./routers/groups");
const cors = require("cors");

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "PATCH"],
  })
);

app.use(express.json());

app.use(todoRouter);
app.use(groupsRouter);

app.listen(3000, () => {
  console.log("Server is up and running in port 3000");
});
