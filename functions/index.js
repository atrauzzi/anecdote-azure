const anecdote = require("anecdote-engine");


const anecdoteService = anecdote.build({
    repository: anecdote.AzureTableStorageRepository,
    queues: [
        anecdote.AzureServiceBusQueue
    ],
    "MONGODB_CONNECTION_STRING": process.env["MONGODB_CONNECTION_STRING"],
    "AZURE_SERVICEBUS_CONNECTION_STRING": process.env["AZURE_SERVICEBUS_CONNECTION_STRING"]
});

context.log("Anecdote booted!");

exports.service = anecdoteService;