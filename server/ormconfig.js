let ruta = "dist";

module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  // synchronize: false,
  logging: false,
  entities: [ruta + "/entity/**/*{.ts,.js}"],
  migrationsTableName: "custom_migration_table",
  migrations: [ruta + "/migration/**/*{.ts,.js}"],
  subscribers: [ruta + "/subscriber/**/*{.ts,.js}"],
  cli: {
    entitiesDir: ruta + "/entity",
    migrationsDir: ruta + "/migration",
    subscribersDir: ruta + "/subscriber",
  },
};
