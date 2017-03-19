const anecdote = require("anecdote-engine");


module.exports = function (context, input) {

    const anecdoteService = anecdote.build({
        queues: [
            anecdote.AzureServiceBusQueue
        ],
        "MONGODB_CONNECTION_STRING": process.env["MONGODB_CONNECTION_STRING"],
        "AZURE_SERVICEBUS_CONNECTION_STRING": process.env["AZURE_SERVICEBUS_CONNECTION_STRING"]
    });

    context.log("Anecdote booted!");

    anecdoteService
        .scanSources()
        .then(function () { anecdoteService.close()})
        .then(function () { context.log("End of line")})
        .then(function () { context.done()})
        .catch(function (error) {

            anecdoteService.close();
            context.done(error);
        })
    ;
};
