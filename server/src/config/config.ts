import dotenv from 'dotenv'
dotenv.config()

export default {
  jwtSecret: process.env.SECRET || "top_secret",
  port: process.env.PORT || '4100' ,
  database: "mongodb://localhost/heroes",
};
