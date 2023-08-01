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
      "other",
    ],
  },
  images: [{ type: String }], // Array of image URLs or paths
});


const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;
