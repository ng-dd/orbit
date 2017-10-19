const redis = require('../redis.js');

module.exports = {
    getSomething: function(req, res) {
        //req.params.id
        redis.redisClient.get(req.query.key, (err, reply) => {
           if (reply !== null) {
               res.send(reply);
           } else {
               
           }
        })
    },

    postSomething: function(req, res) {
        redis.redisClient.set(req.body.key, req.body.value)
        res.status(200)
        res.end()
    }
}