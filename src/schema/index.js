const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    url: String!
  }
  type Event {
    name: String!
    url: String!
    images: [Image]
  }
  type Query {
    events(city: String!, page: Int!, classificationName: String): [Event]
  }
`;

module.exports = typeDefs;
