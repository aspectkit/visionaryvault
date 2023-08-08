const { Artist, Artwork, Customer } = require("../models");
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');

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
  Mutation: {
    addArtist: async (parent, {username, password}) => {
      const artist = await Artist.create({username, password});
      const token = signToken(artist);

      return {token, artist};
    },
    login: async (parent, {username, password}) => {
      const artist = await Artist.findOne({username});

      if (!artist){
        throw new AuthenticationError('No artist with this email found!');
      }

      const correctPw = await artist.isCorrectPassword(password);

      if (!correctPw){
        throw new AuthenticationError("incorrect password!");
      }

      const token = signToken(artist);
      return {token, artist}
    }
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
