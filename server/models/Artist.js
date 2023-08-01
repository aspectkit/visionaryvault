const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  artistName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nickname: { type: String },
  },
  description: {
    styleOfArt: { type: String, required: true },
    artistProfile: { type: String, required: true },
  },
  contactInformation: {
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
  },
  artwork: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artwork" }],
  commissionPriceRange: {
    minPrice: { type: Number, required: true },
    maxPrice: { type: Number, required: true },
  },

  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
