const axiosFetcher = require("../fetchers/axiosFetcher");

const followers = async (_, args) => {
  const data = await axiosFetcher(
    `https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=GB&city=manchester&classificationName=music&apikey=RTmsu653zlIq0O4v4JzO14tOOeKbVAMK&size=20&page=1&sort=date,name,asc`
  );

  console.log(data);

  return data;
};

module.exports = followers;
