const { Artist, Artwork, Customer } = require("../models");

const resolvers = {
  Query: {
    artworks: async () => {
      return await Artwork.find({}).populate("artist customer");
    },
    artists: async () => {
      return await Artist.find({}).populate("artworks");
    },

    customers: async () => {
      return await Customer.find({}).populate("artworks favoriteArtists"); // Populate favoriteArtists
    },
  },
  Artist: {
    artworks: async (parent) => {
      return await Artwork.find({ artist: parent._id }).populate("customer");
    },
  },
  Artwork: {
    artist: async (parent) => {
      return await Artist.findById(parent.artist);
    },
    customer: async (parent) => {
      if (parent.customer) {
        return await Customer.findById(parent.customer);
      }
      return null;
    },
  },
  Customer: {
    artworks: async (parent) => {
      return await Artwork.find({ customer: parent._id }).populate("artist");
    },
    favoriteArtists: async (parent) => {
      return await Artist.find({ _id: { $in: parent.favoriteArtists } });
    },
  },
};

module.exports = resolvers;
