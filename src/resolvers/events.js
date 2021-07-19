const axiosFetcher = require("../fetchers/axiosFetcher");

const events = async (_, { city, page, classificationName }) => {
  const data = await axiosFetcher(
    `https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=GB&apikey=RTmsu653zlIq0O4v4JzO14tOOeKbVAMK&size=20&sort=date,name,asc`,
    { city, page, classificationName }
  );

  console.log(data);

  return data;
};

module.exports = events;
