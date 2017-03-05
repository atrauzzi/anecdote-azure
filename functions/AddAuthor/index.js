const buildAnecdote = require("anecdote-engine").build;


module.exports = function (context, input) {

    const anecdote = buildAnecdote();

    console.log("Anecdote booted!");
    console.log(anecdote);
    console.log(context);
    console.log(input);

    context.done();
};
