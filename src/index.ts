import * as http from "http";
import app from "./app";

const port = process.env.PORT || 9876;

const server: http.Server = http.createServer(app);

process.env.NODE_ENV !== "production" &&
  server.on("listening", () =>
    console.log(`Listening on port http://localhost:${port}`)
  );

server.listen(port);