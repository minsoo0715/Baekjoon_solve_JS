const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {

    return line;
  rl.close();
}).on("close", function() {
  process.exit();
});