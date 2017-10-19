const Like = require('../db/index').likes;

module.exports = {
    addLike: (req, res) => {
        Like.create({
            user_id: req.body.userId,
            post_id: req.body.postId
        })
        .then((data) => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },

    getLike: (req, res) => {
        Like.findAll({
            where: {user_id: req.params.id}
        })
        .then((data) => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err);
        })
    },

    deleteLike: (req, res) => {
        Like.destroy({
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