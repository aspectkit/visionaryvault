// typedefs.js
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Artist {
    _id: ID
    artistName: ArtistName
    artistPicture: String
    artistDescription: ArtistDescription
    contactInformation: ContactInformation
    artwork: [Artwork]
    commissionPriceRange: PriceRange
    username: String
    password: String
  }

  type ArtistName {
    firstName: String
    lastName: String
    nickname: String
  }

  type ArtistDescription {
    styleOfArt: [String!]!
    artistProfile: String
  }

  type ContactInformation {
    email: String!
    phoneNumber: String!
    country: String!
    address: String!
  }

  type Artwork {
    _id: ID
    title: String!
    description: String
    medium: String!
    yearCreated: Int
    isCommissioned: Boolean
    artist: Artist
    customer: Customer
  }

  type PriceRange {
    minPrice: Float!
    maxPrice: Float!
  }

  type Customer {
    _id: ID
    firstName: String!
    lastName: String!
    contactInformation: ContactInformation
    commissionedArtworks: [Artwork]
  }

  type Query {
    artists: [Artist]
    artworks: [Artwork]
    customers: [Customer]
  }
`;

module.exports = typeDefs;
