const amqp = require('amqplib')

connect()
async function connect(){

    try{
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel()
        const result = await channel.assertQueue('jobs')

        channel.consume("jobs",message => {
            const data = JSON.parse(message.content.toString())
            console.log(data.number)

            if(data.number == 22){
                channel.ack(message)
            }
        })
        console.log("waitng for message....")
    }catch(err){

    }
}