const redis = require('../redis.js');

module.exports = {
    getSomething: function(req, res) {
        //req.params.id
        redis.redisClient.get(req.params.key, (err, reply) => {
            if (err) {
                return console.log(err);
            }

            if (reply !== null) {
                res.send(reply);
            } else {
                //query postgres to add to cache
                //then set it to expire
            }
        })
    },
    
    getLatestCache: function(req, res) {
        let now = Date.now();
        let minuteAgo = now - 60000; 
    },

    postSomething: function(req, res) {
        redis.redisClient.set(req.body.key, req.body.value)
        
        //wipe cache info from redis after 10 minutes
        redis.redisClient.expire(req.body.key, 600)
        res.status(200)
        res.end()
    }
}