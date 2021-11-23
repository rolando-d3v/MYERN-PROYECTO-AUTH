import express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import morgan from "morgan";
import cors from "cors";
import config from "./config/config";

//import routes
import userRoutes from "./api/user/user.routes";
import productRoutes from "./api/product/product.routes";
import authRoutes from "./api/auth/auth.routes";

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
app.use("/user", userRoutes);
app.use("/product",productRoutes);
app.use("/auth", authRoutes);

//createconnection es para conectarse al mysql de typeorm
(async () => {
  try {
    const db = await createConnection();
    // await db.runMigrations()
    return console.log("server db Connected " + db.options.database);
  } catch (err) {
    return console.log({ msg: "Error: Connectionn", err });
  }
})();




//createconnection es para conectarse al mysql de typeorm
// createConnection()
//   .then(() => {
//     console.log("server Mysql Connected");
//   })
//   .catch((error) => {
//     console.log({ msg: "Error: Connectionn", error });
//   });