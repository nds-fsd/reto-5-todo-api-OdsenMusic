const { groups } = require("../data/groups");

function findGroup(req) {
  let id = req.params.id;
  id = parseFloat(id);
  let group = groups.find((group) => group.id === id);
  return group;
}

function findGroupIndex(req) {
  let id = req.params.id;
  id = parseFloat(id);
  let groupIndex = groups.findIndex((group) => group.id === id);
  return groupIndex;
}

function getAllGroups(req, res) {
  res.status(200).json(groups);
}

function createGroup(req, res) {
  const body = req.body;
  const newGroup = {
    id: groups.length + 1,
    text: "",
    date: new Date(),
    done: false,
    group: "none",
    color: "white",
  };
  groups.push(newGroup);
  res.status(201).json(newGroup);
}

function getGroup(req, res) {
  let group = findGroup(req);

  if (group) {
    res.status(200).json(group);
  } else {
    res.status(404).send();
  }
}

function updateGroup(req, res) {
  let group = findGroup(req);
  if (group) {
    group.color = req.body.color;
    res.status(200).json(group);
  } else {
    res.status(404).send();
  }
}

function deleteGroup(req, res) {
  let groupIndex = findGroupIndex(req);
  if (groupIndex === -1) {
    res.status(404).send();
  } else {
    groups.splice(groupIndex, 1);
    res.status(204).send();
  }
}

module.exports = {
  getAllGroups,
  createGroup,
  getGroup,
  updateGroup,
  deleteGroup,
};
