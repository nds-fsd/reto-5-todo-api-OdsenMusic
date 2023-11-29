const { groups } = require("../data/groups");
const { tasks } = require("../data/index");

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
  let name = "";

  if (groups.filter((e) => e.name.includes("Grupo")).length !== 0) {
    name =
      "Grupo (" + groups.filter((e) => e.name.includes("Grupo")).length + ")";
  } else {
    name = "Grupo";
  }
  const newGroup = {
    id: Date.now(),
    name: name,
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
    //Si se cambia el nombre a un grupo. Automaticamente se cambia el nombre del grupo a las tareas.
    tasks.forEach((task) => {
      if (task.group === group.name && req.body.name) {
        task.group = req.body.name;
      }
    });
    Object.assign(group, req.body);

    res.status(200).json(group);
  } else {
    res.status(404).send();
  }
}

function deleteGroup(req, res) {
  let groupIndex = findGroupIndex(req);
  let group = findGroup(req);
  if (groupIndex === -1) {
    res.status(404).send();
  } else {
    tasks.forEach((task) => {
      //si un grupo es eliminado, se cambia el nombre del grupo de todas las que estaban en el grupo.
      if (task.group === group.name) {
        task.group = "none";
      }
    });
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
