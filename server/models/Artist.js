const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");


const artistSchema = new Schema({
  artistName: {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
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
        required: false,
      },
    ],
    artistProfile: { type: String, required: false },
  },
  contactInformation: {
    email: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    country: { type: String, required: false },
    address: { type: String, required: false },
  },
  artworks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artwork",
    },
  ],
  commissionPriceRange: {
    minPrice: { type: Number, required: false },
    maxPrice: { type: Number, required: false },
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
