const redis = require('../redis.js');

module.exports = {
    getSomething: function(req, res) {
        //req.params.id
        redis.redisClient.get(req.query.key, (err, reply) => {
<<<<<<< 27c9afe7101e90627132ec135a2525727f3c8915
            if (err) {
                return console.log(err);
            }

            if (reply !== null) {
                res.send(reply);
            } else {
                //query postgres to add to cache
                //then set it to expire
=======
            if (reply !== null) {
                res.send(reply);
            } else {
                console.log(err)
                res.status(404).send()
>>>>>>> redis timer# Please enter the commit message for your changes. Lines starting
            }
        })
    },
    
    getLatestCache: function(req, res) {
        let now = Date.now();
<<<<<<< 27c9afe7101e90627132ec135a2525727f3c8915
        let minuteAgo = now - 60000; 
=======
        let minuteAgo = now - 60000;
        
>>>>>>> redis timer# Please enter the commit message for your changes. Lines starting
    },

    postSomething: function(req, res) {
        redis.redisClient.set(req.body.key, req.body.value)
        
        //wipe cache info from redis after 10 minutes
        redis.redisClient.expire(req.body.key, 600)
        res.status(200)
        res.end()
    }
}