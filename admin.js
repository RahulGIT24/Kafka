const {kafka} = require('./client')

async function init(){
    // connecting admin
    const admin = kafka.admin();
    console.log("Admin connecting.....")
    await admin.connect();
    console.log("Admin connected")

    // creating topics
    console.log("Creating topics [rider-updates]")
    await admin.createTopics({
        topics:[
            {
                topic:'rider-updates',
                numPartitions:2
            }
        ]
    })
    console.log("Topics created")

    console.log("Disconnecting Admin")
    await admin.disconnect();
    console.log("Admin Disconnected")
}

init();