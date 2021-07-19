const { gql } = require("apollo-server");

const typeDefs = gql`
  type Event {
    name: String!
  }
  type Query {
    events(city: String!, page: Int!, genre: String): [Event]
  }
`;

module.exports = typeDefs;
