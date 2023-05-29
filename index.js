const repl = require("repl");
const eval = require("./evaluator");

repl.start({
  prompt: "ItsADB $ ",
  eval: eval,
});
