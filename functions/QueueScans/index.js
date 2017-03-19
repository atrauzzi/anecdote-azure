const anecdote = require("../");


module.exports = function (context, input) {

    anecdote.service
        .scanSources()
        .then(function () { anecdote.service.close()})
        .then(function () { context.log("End of line")})
        .then(function () { context.done()})
        .catch(function (error) {

            anecdote.service.close();
            context.done(error);
        })
    ;
};
