const http = require("http");
const express = require("express");
const app = express();
const path = require("path");


const server = http.createServer(app);

let wss;
try {
  wss = require("./Websocket")(server);
} catch {
  console.log("Error thrown: Cannot get function from (./Websocket), make sure it is exported correctly!");
}
// Serve Home.html when user visits '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Home.html'));
});
app.get('/driver', (req, res) => {
    res.sendFile(path.join(__dirname, 'driver.html'));
});
app.get('/driverUI', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
// Serve static files like CSS, JS, images
app.use(express.static(__dirname));



process.on("SIGINT", () => {
  if (wss) {
    wss.clients.forEach((client) => client.close());
  }

  console.log("SIGINT signal received! Closing server...");
  let seconds = 3;
  const countdown = setInterval(() => {
    console.log(`Closing server in...${seconds}`);
    seconds--;

    if (seconds === 0) {
      clearInterval(countdown);
      server.close();
    }
  }, 1000);
});

server.on("close", () => {
  console.log("Server Closed!");
  process.exit(0);
});


server.listen(3000, () => {
  console.log("Server running on port:3000.......");
});
server.on("error", (err) => {
  console.error("Failed to start Server on port 3000:", err.message);
});
