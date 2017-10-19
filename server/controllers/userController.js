const User = require('../db/index').user;

module.exports = {
    addUser: (req, res) => {
        User.create({
            username: req.body.username,
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            admin_status: req.body.adminstatus,
            age: req.body.age,
            gender: req.body.gender,
            street_address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zipcode,
            email: req.body.email,
            phone: req.body.phone
        })
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },

    getUser: (req, res) => {
        User.findAll({
            where: {username: req.params.name}
        })
        .then((data) => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },

    deleteUser: (req, res) => {
        User.destroy({
            where: {id: req.params.userId}
        })
        .then(() => {
            res.send('deleted user')
        })
        .catch(err => {
            res.status(500).send(err);
        })
    }
}
