const { tasks } = require("../data");

function findTask(req) {
  let id = req.params.id;
  id = parseFloat(id);
  let task = tasks.find((task) => task.id === id);
  return task;
}

function findTaskIndex(req) {
  let id = req.params.id;
  id = parseFloat(id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  return taskIndex;
}

function getAllTasks(req, res) {
  res.status(200).json(tasks);
}

function createTask(req, res) {
  const { color, group } = req.body;

  const taskColor = color || "white";
  const taskGroup = group || "none";

  const newTask = {
    id: Date.now(),
    text: "",
    date: new Date(),
    done: false,
    group: taskGroup,
    color: taskColor,
    deleted: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
}

function getTask(req, res) {
  let task = findTask(req);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send();
  }
}

function updateTask(req, res) {
  let task = findTask(req);
  if (task) {
    Object.assign(task, req.body);
    res.status(200).json(task);
  } else {
    res.status(404).send();
  }
}

function deleteTask(req, res) {
  let taskIndex = findTaskIndex(req);
  if (taskIndex === -1) {
    res.status(404).send();
  } else {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
