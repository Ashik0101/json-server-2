const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
server.use(cors());
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

server.listen(process.env.PORT, () => {
  console.log(`JSON Server is running on http://localhost:${process.env.PORT}`);
});
