const { Artist, Customer, Artwork } = require("../models");

const resolvers = {
  Query: {
    artists: async () => {
      return await Artist.find({});
    },
    customers: async () => {
      return await Customer.find({});
    },
    artworks: async () => {
      return await Artwork.find({});
    },
  },
};

module.exports = resolvers;
