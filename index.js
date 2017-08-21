var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', (err, conn) => {
    console.log(err, conn);
    conn.close();
});