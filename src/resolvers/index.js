const events = require("./events");

const resolvers = {
  Query: {
    events,
  },
};

module.exports = resolvers;
