import express from "express";
import indexRoute from "./shared/infrastruture/routes/index";

export const startApp = () => {
  const app = express();

  //Connection to database

  //app.use(cors())

  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/api", indexRoute);

  // Public directory

  return app;
};
