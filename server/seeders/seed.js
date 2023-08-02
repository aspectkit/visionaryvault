const db = require("../config/config");
const mongoose = require("mongoose");
const { Artist } = require("../models");
const { Artwork } = require("../models");
const { Customer } = require("../models");

const artistSeeds = require("./artistSeeds.json");
const artworkSeeds = require("./artworkSeeds.json");
const customerSeeds = require("./customerSeeds.json");

const databaseUrl = "mongodb://127.0.0.1:27017/visonaryVault";

db.once("open", async () => {
  try {
    // clear the database before seeding
    await Artist.deleteMany({});
    await Artwork.deleteMany({});
    await Customer.deleteMany({});

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
