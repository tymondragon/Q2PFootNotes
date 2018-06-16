module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/footnotes-dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};