const models = require('../server');
const {Owner, Car, OwnedCars} = require('../models/associations');

const getOwners = async function(req, res) {
    let data = await Owner.count({ logging: false });

    if (data === 0) {
        res.status(400);
        return res.send("No users found");
    } else {
        let data = await Owner.findAll({ logging: false });
        console.log("Found some queries")
        return res.send(data);
    }
};

const getCars = async function(req, res) {
    let data = await OwnedCars.count({ logging: false });
    let id = req.params.id;

    if (data === 0) {
        res.status(400);
        return res.send("No cars found");
    } else {
        let data = await OwnedCars.findAll({logging: false, where: {ownerId: id}});
        console.log("Found some queries")
        return res.send(data);
    }
};

const getUser = async function(req, res) {
    let id = req.params.id;
    for (let user of users) {
        if (user.id == id) {
          res.status(200);
          console.log(users);
          return res.send(user);
        }
    }
    res.status(404);
    res.send("User not found");
};

const posUser = async function (req, res) {
    let username = req.params.username;
    let email = req.params.email;
    let name = req.params.name;

    for (let user of users) {
        if (user.username === username || user.email === email || user.name === name) {
            res.status(400);
            return res.send("User already exists");
        }
    }

    let index = users[users.length - 1].id + 1;
    const newUser = {
        id: index,
        username: username,
        email: email,
        password: req.params.password,
        name: name
    };

    console.log(users);
    users.push(newUser);
    res.json(users);
};  

const putUser = async function(req, res) {
    let name = req.params.name;
    let userUpdated = false;
  
    users.forEach((user, index) => {
        if (user.name === name) {
            users[index] = { ...user, ...req.body };
            userUpdated = true;
        }
    });
  
    if (userUpdated) {
        console.log(users);
        return res.json(users);
    } else {
        return res.status(400).send("No User found");
    }
};  

const delUser = async function (req, res) {
    let id = parseInt(req.params.id);
    let userUpdated = false;
    let userIndex = -1;

  
    users.forEach((user, index) => {
        if (user.id === id) {
            userUpdated = true;
            userIndex = index;
        }
    });
  
    if (userUpdated && userIndex !== -1) {
        users.splice(userIndex, 1);
        console.log(users);
        if (users.length === 0) {
            res.status(400);
            return res.send("No users found");
        }
        return res.json(users);
    } else {
        return res.status(400).send("No User found");
    }
};

const deleteDB = async function(req, res) {
    await models.sequelize.sync({ force: true });
    res.send("Database deleted");
};

module.exports = {
    getOwners,
    getCars,
    getUser,
    posUser,
    putUser,
    delUser,
    deleteDB
};