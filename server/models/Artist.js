const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");


const artistSchema = new Schema({
  artistName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nickname: { type: String },
  },
  artistPicture: { type: String }, // Array of image URLs or paths
  artistDescription: {
    styleOfArt: [
      {
        type: String,
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
        required: true,
      },
    ],
    artistProfile: { type: String, required: true },
  },
  contactInformation: {
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
  },
  artworks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artwork",
    },
  ],
  commissionPriceRange: {
    minPrice: { type: Number, required: true },
    maxPrice: { type: Number, required: true },
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
},

{
  toJSON: {
    virtuals: true,
  },
}
);

artistSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds)
  }
  next();
});

artistSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}; 


const Artist = model("Artist", artistSchema);

module.exports = Artist;
