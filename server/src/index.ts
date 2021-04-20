import express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import morgan from "morgan";
import cors from "cors";
import config from './config/config'


//import routes
import registroRoutes from "./api/registro/registro.routes";
import authRoutes from "./api/auth/auth.routes";



createConnection()
  .then(async () => {
    //app server
    const app = express();
    const port = config.port;
    app.listen(port, () => {
      console.log(`🔥  🚀  server port ➡️ ${port} 😃  ✔️`);
    });

    //MIDDLEWARE
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));


    
    //routes
    app.use("/registro", registroRoutes);
    app.use("/auth", authRoutes);
  })
  .catch((error) => {
    console.log({ message: "Error: Connectionn", error });
  });
