let ruta = "src";

module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [ruta + "/entity/**/*{.ts,.js}"],
  migrations: [ruta + "/migration/**/*{.ts,.js}"],
  subscribers: [ruta + "/subscriber/**/*{.ts,.js}"],
  cli: {
    entitiesDir: ruta + "/entity",
    migrationsDir: ruta + "/migration",
    subscribersDir: ruta + "/subscriber",
  },
};
