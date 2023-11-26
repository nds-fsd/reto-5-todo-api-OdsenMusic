const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/todo");

const todoRouter = express.Router();

todoRouter.get("/todo", getAllTasks);
todoRouter.post("/todo", createTask);
todoRouter.get("/todo/:id", getTask);
todoRouter.patch("/todo/:id", updateTask);
todoRouter.delete("/todo/:id", deleteTask);

module.exports = todoRouter;
