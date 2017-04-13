const anecdote = require("../");
const Chance = require("chance");


module.exports = function (context, input) {

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

    anecdote.service
        .addAuthor(author)
        .then(function () { anecdote.service.close()})
        .then(function () { context.log("End of line")})
        .then(function () { context.done()})
        .catch(function (error) { context.done(error)})
    ;
};
