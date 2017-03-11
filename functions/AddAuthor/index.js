const buildAnecdote = require("anecdote-engine").build;


module.exports = function (context, input) {

    const anecdote = buildAnecdote();

    context.log("Anecdote booted!");
    context.log(anecdote);
    context.log(context);
    context.log(input);

    context.done();
};
