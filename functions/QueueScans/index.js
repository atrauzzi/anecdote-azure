const anecdote = require("anecdote-engine");


module.exports = function (context, input) {

    const anecdoteService = anecdote.build({
        queues: [
            anecdote.AzureServiceBusQueue
        ],
        "MONGODB_CONNECTION_STRING": process.env["MONGODB_CONNECTION_STRING"],
        "SERVICE_BUS_CONNECTION_STRING": process.env["SERVICE_BUS_CONNECTION_STRING"]
    });

    context.log("Anecdote booted!");

    anecdoteService
        .scanSources()
        .then(function () { anecdoteService.close()})
        .then(function () { context.log("End of line")})
        .then(function () { context.done()})
        .catch(function (error) { context.done(error)})
    ;
};
