const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  type: {
    type: String,
    enum: ["digital", "traditional"],
    required: true,
  },
  medium: {
    type: String,
    required: true,
    enum: [
      // Digital Art Options
      "digital photography",
      "digital installations",
      "algorithmic art",
      "datamoshing",
      "dynamic painting",
      "2D computer graphics",
      "3D computer graphics",
      "pixel art",
      "photo painting",
      "digital collage",
      "digital painting",
      "manual vector drawing",
      "raster painting",
      // Traditional Art Options
      "oil",
      "watercolor",
      "acrylic",
      "pencil",
      "sculpture",
      "photography",
      "other",
    ],
  },
  images: [{ type: String }], // Array of image URLs or paths
  price: { type: Number }, // Optional price for the artwork
  isCommissioned: { type: Boolean, default: false }, // Indicates whether the artwork is currently being commissioned
  artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" }, // Reference to the artist who created the artwork
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" }, // Reference to the customer who commissioned the artwork (optional)
});

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;
