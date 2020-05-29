import * as http from "http";
import { Usecase } from "./Usecase";
import { Service } from "./Service";
import { Repository } from "./Repository";
import { ShouldHandleError } from "./ShouldHandleError";
import { ERRORS } from "./Error";

const server = http.createServer();

server.on("request", (req, res) => {
  const usecase = new Usecase(new Service(new Repository()));
  try {
    const user = usecase.getUserData(req);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } catch (e) {
    if (e instanceof ShouldHandleError) {
      res.writeHead(e.toJSON().statusCode, {
        "Content-Type": "application/json",
      });
      res.end(e.toJSON().message);
      return;
    }
    res.writeHead(ERRORS.UNEXPECTED_ERROR.statusCode, {
      "Content-Type": "application/json",
    });
    res.end(ERRORS.UNEXPECTED_ERROR.message);
  }
});

server.listen(3000);
