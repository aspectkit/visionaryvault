const db = require("../config/connection");
const { Artist } = require("../models/artist");
const { Artwork } = require("../models/Artwork");
const { Customer } = require("../models/Customer");

const artistSeeds = require("./seeders/artistSeeds.json");
const artworkSeeds = require("./seeders/artworkSeeds.json");
const customerSeeds = require("./seeders/customerSeeds.json");

const databaseUrl = "mongodb://127.0.0.1:27017/visonaryVault";

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
  } catch (error) {
    console.error("Error seeding data:", error);
  }
});

mongoose
  .connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");

    // Insert artists
    Artist.insertMany(artistSeeds)
      .then((artists) => console.log("Artists inserted:", artists))
      .catch((error) => console.error("Error inserting artists:", error));

    // Insert artwork
    Artwork.insertMany(artworkSeeds)
      .then((artworks) => console.log("Artwork inserted:", artworks))
      .catch((error) => console.error("Error inserting artwork:", error));

    // Insert customers
    Customer.insertMany(customerSeeds)
      .then((customers) => console.log("Customers inserted:", customers))
      .catch((error) => console.error("Error inserting customers:", error));
  })
  .catch((error) => console.error("Error connecting to the database:", error));
