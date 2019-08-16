const { buildSchema } = require('koa-graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

module.exports = schema;