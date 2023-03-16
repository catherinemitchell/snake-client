const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Name: CLM");
    console.log("Successfully connected to game server");

    // conn.write("Move: up");
  });
  return conn;

};

module.exports = {
  connect,
  
};