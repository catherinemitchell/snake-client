//sayHello and myKey are just to show extra exampes for comprehension from the exports file
const {connect /*sayHello, myKey*/ } = require('./client');

console.log("Connecting ...");
connect();

// stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

const handleUserInput = function (key) {

  // your code here
  if ( key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();

