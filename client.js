const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  conn.on("connect", () => {
    conn.write("Name: CLM")
    console.log("Successfully connected to game server");

    
  });
  return conn;

};
// const sayHello = () => console.log("hello"); ----> this is just to show extra exampes for the object
// const myKey = [1,2,3]  ---> this is just to show extra examples for the object
module.exports = {
  connect,
  // sayHello,
  // myKey,
}