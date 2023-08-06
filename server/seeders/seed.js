const db = require("../config/config");
const mongoose = require("mongoose");
const { Artist } = require("../models");
const { Artwork } = require("../models");
const { Customer } = require("../models");

const artistSeeds = require("./artistSeeds.json");
const artworkSeeds = require("./artworkSeeds.json");
const customerSeeds = require("./customerSeeds.json");

const databaseUrl = "mongodb://127.0.0.1:27017/visonaryVault";

function getRandomItems(arr, numItems) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

db.once("open", async () => {
  try {
    // clear the database before seeding
    await Artist.deleteMany({});
    await Artwork.deleteMany({});
    await Customer.deleteMany({});

    console.log("Connected to the database");

    // Insert artists
    let artists = await Artist.insertMany(artistSeeds);
    console.log("Artists inserted:", artists);

    // Insert artwork
    const artworks = await Artwork.insertMany(artworkSeeds);
    console.log("Artwork inserted:", artworks);

    // Insert customers
    let customers = await Customer.insertMany(customerSeeds);
    console.log("Customers inserted:", customers);

    // Randomly add each artwork to an artist
    for (const artwork of artworks) {
      const tempArtist = artists[Math.floor(Math.random() * artists.length)];

      artwork.artist = tempArtist._id;
      await artwork.save();

      // Randomly assign a customer to the artwork (if applicable)
      if (artwork.isCommissioned) {
        const tempCustomer =
          customers[Math.floor(Math.random() * customers.length)];
        artwork.customer = tempCustomer._id;
        await artwork.save();

        // Reference the artwork on the customer model
        tempCustomer.artworks.push(artwork._id);
        await tempCustomer.save();

        tempArtist.artworks.push(artwork._id);
        await tempArtist.save();
      }
    }

    // Randomly assign favorite artists to each customer
    for (const customer of customers) {
      const numFavoriteArtists = Math.floor(Math.random() * artists.length) + 1;
      const favoriteArtists = getRandomItems(artists, numFavoriteArtists);
      customer.favoriteArtists = favoriteArtists.map((artist) => artist._id);
      await customer.save();
    }

    artists = await Artist.find().populate("artworks");
    console.log("Artists with artworks inserted:", artists);

    // Fetch customers with associated artworks
    customers = await Customer.find().populate("artworks");
    console.log("Customers with artworks inserted:", customers);

    // Close the database connection after seeding data
    mongoose.connection.close();
    console.log("all done!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
});
