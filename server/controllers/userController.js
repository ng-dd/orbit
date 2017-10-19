const User = require('../db/index').user;
const redis = require('../redis.js');

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
        redis.redisClient.get(req.params.id)
        .then((data) => {
            if (data === 'null') {
                User.findAll({where: {id: req.params.id}})
                .then((data) => {
                    redis.redisClient.set(`userData${req.params.id}`, data)
                })
                .catch((err) => {
                    res.statis(500).send(err);
                })
            } else {
                res.send(JSON.parse(data))
            }
        })
    },

    deleteUser: (req, res) => {
        User.destroy({
            where: {id: req.params.id}
        })
        .then(() => {
            res.send('deleted user')
        })
        .catch(err => {
            res.status(500).send(err);
        })
    }
}
