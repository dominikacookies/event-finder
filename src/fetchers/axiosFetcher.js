const axios = require("axios");

const axiosFetcher = async (url) => {
  try {
    const response = await axios.get(url);

    return response.data._embedded.events;
  } catch (err) {
    console.error(err.message);
    throw new Error("Oops");
  }
};

module.exports = axiosFetcher;
