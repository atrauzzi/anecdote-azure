const anecdote = require("anecdote-engine");
const Chance = require("chance");


module.exports = function (context, input) {

    const anecdoteService = anecdote.build({
        queues: [
            anecdote.AzureServiceBusQueue
        ],
        "MONGODB_CONNECTION_STRING": process.env["MONGODB_CONNECTION_STRING"],
        "AZURE_SERVICEBUS_CONNECTION_STRING": process.env["AZURE_SERVICEBUS_CONNECTION_STRING"]
    });

    context.log("Anecdote booted!");

    const author = {
        id: Chance().guid(),
        firstName: "Alexander",
        lastName: "Trauzzi",
        sources: [
            {
                nativeId: 115199,
                username: "atrauzzi",
                token: null
            }
        ]
    };

    anecdoteService
        .addAuthor(author)
        .then(function () { anecdoteService.close()})
        .then(function () { context.log("End of line")})
        .then(function () { context.done()})
        .catch(function (error) { context.done(error)})
    ;
};
