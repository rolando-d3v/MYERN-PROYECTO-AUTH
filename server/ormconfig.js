module.exports = {
   "type": process.env.DB_DIALECT,
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USERNAME,
   "password": process.env.DB_PASSWORD,
   "database":process.env.DB_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "build/entity/**/*{.ts,.js}"
   ],
   "migrations": [
      "build/migration/**/*{.ts,.js}"
   ],
   "subscribers": [
      "build/subscriber/**/*{.ts,.js}"
   ],
   "cli": {
      "entitiesDir": "build/entity",
      "migrationsDir": "build/migration",
      "subscribersDir": "build/subscriber"
   }
}