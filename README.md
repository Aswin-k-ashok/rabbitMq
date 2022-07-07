# rabbitMq 
### RabbitMQ is a message-queueing software also known as a message broker or queue manager. Simply said; it is software where queues are defined, to which applications connect in order to transfer a message or messages.


just a repository to get know the working of rabbit mq message broker

if docker is installed in the system, rabbit mq docker container is available 

run 
> docker run --name rabbitmq -p 5672:5672 rabbitmq

using this method dont need to install rabbitmq on the device

run 
> npm run publisher 

and enter a number / string to push that message in to the job queue

run 
> npm run consumer

to consume that message from the queue

to know more about rabbit mq visit https://www.rabbitmq.com/
