// server.js
const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
require("dotenv").config();
server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
// Enable CORS headers
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(router);
server.listen(process.env.PORT, () => {
  console.log(`JSON Server is running on ${process.env.PORT}`);
});
