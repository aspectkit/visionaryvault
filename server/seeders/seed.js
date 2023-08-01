const db = require("../config/connection");
const { Artist } = require("../models/artist");
const { Artwork } = require("../models/Artwork");
const { Customer } = require("../models/Customer");

const artistSeeds = require("./seeders/artistSeeds.json");
const artworkSeeds = require("./seeders/artworkSeeds.json");
const customerSeeds = require("./seeders/customerSeeds.json");

const databaseUrl = "mongodb://127.0.0.1:27017/visonaryVault";

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.once("open", async () => {
  try {
    console.log("Connected to the database");

    // Insert artists
    const insertedArtists = await Artist.insertMany(artistSeeds);
    console.log("Artists inserted:", insertedArtists);

    // Insert artwork
    const insertedArtwork = await Artwork.insertMany(artworkSeeds);
    console.log("Artwork inserted:", insertedArtwork);

    // Insert customers
    const insertedCustomers = await Customer.insertMany(customerSeeds);
    console.log("Customers inserted:", insertedCustomers);

    // Close the database connection after seeding data
    mongoose.connection.close();

    console.log("all done!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
});
