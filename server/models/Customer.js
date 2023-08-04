const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
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
  favoriteArtists: [{ type: Schema.Types.ObjectId, ref: "Artist" }], // Many-to-many relationship with artists
  commissionedArtworks: [{ type: Schema.Types.ObjectId, ref: "Artwork" }], // Artworks commissioned by the customer
});

const Customer = model("Customer", customerSchema);

module.exports = Customer;
