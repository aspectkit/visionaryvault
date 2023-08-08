import { gql } from "@apollo/client";

export const QUERY_ARTISTS = gql`
  query GetArtists {
    artists {
      _id
      artistName {
        firstName
        lastName
        nickname
      }
      artistPicture
      artistDescription {
        styleOfArt
        artistProfile
      }
      contactInformation {
        email
        phoneNumber
        country
        address
      }
      artworks {
        _id
        title
        description
        medium
        images
        yearCreated
        isCommissioned
      }
      commissionPriceRange {
        minPrice
        maxPrice
      }
      username
      password
    }
  }
`;

export const QUERY_ARTWORKS = gql`
  query GetArtworks {
    artworks {
      _id
      title
      description
      medium
      year
      type
      images
      price
      isCommissioned
      artist {
        _id
        artistName {
          firstName
          lastName
          nickname
        }
      }
      customer {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_CUSTOMERS = gql`
  query GetCustomers {
    customers {
      _id
      firstName
      lastName
      username
      password
      contactInformation {
        email
        phoneNumber
        country
        address
      }
      artworks {
        _id
        title
        description
        medium
        year
        type
        images
        price
        isCommissioned
        artist {
          _id
          artistName {
            firstName
            lastName
            nickname
          }
        }
      }
      favoriteArtists {
        _id
        artistName {
          firstName
          lastName
          nickname
        }
      }
    }
  }
`;
