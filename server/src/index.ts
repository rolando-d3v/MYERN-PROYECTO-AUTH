import express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import morgan from "morgan";
import cors from "cors";

//import routes
import registroRoutes from "./api/registro/registro.routes";



createConnection()
  .then(async () => {
    //app server
    const app = express();
    const port = 4000;
    app.listen(port, () => {
      console.log(`🔥  🚀  server port ➡️ ${port} 😃  ✔️`);
    });

    //MIDDLEWARE
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));


    
    //routes
    app.use("/user", registroRoutes);
  })
  .catch((error) => {
    console.log({ message: "Error: Connectionn", error });
  });
