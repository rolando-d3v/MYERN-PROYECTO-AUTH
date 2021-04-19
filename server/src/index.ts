import express from "express";
import morgan from 'morgan';
import cors from 'cors'
import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(async () => {

    const app = express();
    const port = 4000;
    app.listen(port, () => {
      console.log(`🔥  🚀  server port ➡️ ${port} 😃  ✔️`);
    });

    //MIDDLEWARE
    app.use(cors())
    app.use(morgan('dev'))
  })
  .catch((error) => {
    console.log({ message: "Error: Connection", error });
  });
