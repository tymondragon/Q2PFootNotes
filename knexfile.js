module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/footnotes-dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};