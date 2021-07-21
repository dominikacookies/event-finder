const axiosFetcher = require("../fetchers/axiosFetcher");

const events = async (_, { city, page, classificationName }) => {
  const data = await axiosFetcher(
    `https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=GB&apikey=RTmsu653zlIq0O4v4JzO14tOOeKbVAMK&size=20&sort=date,name,asc`,
    { city, page, classificationName }
  );

  const events = data.map((event) => {
    return {
      name: event.name,
      date: event.dates.start.localDate,
      time: event.dates.start.localTime,
      venue: event._embedded.venues[0].name,
      url: event.url,
      images: event.images,
    };
  });

  return events;
};

module.exports = events;
