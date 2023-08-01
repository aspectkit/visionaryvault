const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  contactInformation: {
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
  },
  favoriteArtists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }], // Many-to-many relationship with artists
  commissionedArtworks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artwork" }], // Artworks commissioned by the customer
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
