const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    // ipaddress:kafka_running_port
    brokers:['192.168.107.173:9092']
})

module.exports = {kafka}