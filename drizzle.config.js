 module.exports = {
    schema: './src/db/schema.js',    // шлях до схеми
    out: './drizzle',          // вихідна папка для міграцій
    dialect: 'postgresql',
    dbCredentials: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'nodejs_course_database',
      ssl: false,
    },
};