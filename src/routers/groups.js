const express = require("express");
const { groups } = require("../data/groups");
const {
  getAllGroups,
  createGroup,
  getGroup,
  updateGroup,
  deleteGroup,
} = require("../controller/groups");

const groupsRouter = express.Router();

groupsRouter.get("/groups", getAllGroups);
groupsRouter.post("/groups", createGroup);
groupsRouter.get("/groups/:id", getGroup);
groupsRouter.patch("/groups/:id", updateGroup);
groupsRouter.delete("/groups/:id", deleteGroup);

module.exports = groupsRouter;
