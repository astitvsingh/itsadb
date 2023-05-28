const repl = require("repl");
const eval = require("./parser");

repl.start({
  prompt: "ItsADB $ ",
  eval: eval,
});
