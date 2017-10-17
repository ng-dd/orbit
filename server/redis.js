const redis = require('redis');

const redis_host = '127.0.0.1';
const redis_port = 6379;
let redisClient = redis.createClient(redis_port, redis_host);

redisClient.on('error', (err) => {
    console.log('error', err)
})

// redisClient.set('haha', 'hehehe')
// redisClient.get('haha', (err, reply) => {
//     if (reply) {
//         console.log(reply)
//     }
// })

module.exports = {redisClient}