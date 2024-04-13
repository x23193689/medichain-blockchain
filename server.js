const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname + "/cart.html"));
});

app.get("/wallet", (req, res) => {
  res.sendFile(path.join(__dirname + "/wallet.html"));
});

const server = app.listen(process.env.PORT||3000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
