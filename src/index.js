const http = require("http");
const app = require("./app.js");

const port = process.env.PORT || 9876;

const server = http.createServer(app);

process.env.NODE_ENV !== "production" &&
  server.on("listening", () =>
    console.log(`Listening on port http://localhost:${port}`)
  );

server.listen(port);
