import "reflect-metadata";
import express, { Application } from "express";
import indexRoute from "./shared/infrastruture/routes/index";
import { container } from "./container";

export class Server {
  private app: Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = "5000";
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use("/api", indexRoute);
  }

  getServer() {
    return this.app;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server running in the port 🔥 ", this.port);
    });
  }
}
