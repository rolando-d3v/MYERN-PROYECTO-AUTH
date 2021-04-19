module.exports = {
   "type": "mysql",
   "host": "sql448.main-hosting.eu",
   "port": "3306",
   "username": "u688548826_bank",
   "password": "Nadely123",
   "database": "u688548826_bank",
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