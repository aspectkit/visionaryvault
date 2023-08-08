import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrushIcon from "@mui/icons-material/Brush";
import "./ArtistPortfolio.css";
import { useQuery } from "@apollo/client";
import { QUERY_ARTISTS } from "../../../utils/queries";

function ArtistPortfolio() {
  const { loading, error, data } = useQuery(QUERY_ARTISTS);

  const [currentIndex, setCurrentIndex] = useState(0); // Moved useState to the top

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const artists = data.artists;

  const handleNextArtist = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
  };

  const handlePrevArtist = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? artists.length - 1 : prevIndex - 1
    );
  };

  const artist = artists[currentIndex];

  return (
    <div className="artist-container">
      <h1>Artist Profile</h1>
      <div className="profile">
        <img
          src={artist.artistPicture}
          alt={`${artist.artistName.firstName}'s profile`}
        />
        <h2>{`${artist.artistName.firstName} ${artist.artistName.lastName}`}</h2>
        <h2>'{artist.artistName.nickname}'</h2>
      </div>
      <p className="bio">{artist.artistDescription.artistProfile}</p>
      <div className="arrow-buttons">
        <button onClick={handlePrevArtist}>← Previous</button>
        <button onClick={handleNextArtist}>Next →</button>
      </div>
      <div className="commissionButtonContainer">
        <Link to="/commission" className="commissionButton">
          <span className="icon">
            <BrushIcon />
          </span>

          <span className="title">Purchase Artwork</span>
        </Link>
      </div>
      <h3>{`Commission Price Range: $${artist.commissionPriceRange.minPrice}-$${artist.commissionPriceRange.maxPrice}`}</h3>

      <h3>Contact Information</h3>
      <p>{artist.contactInformation.email}</p>
      <p>{artist.contactInformation.phoneNumber}</p>
      <p>{artist.contactInformation.country}</p>
      <p>{artist.contactInformation.address}</p>
      <hr className="page-break" />
      <div className="image-grid">
        {artist.artworks.map((artwork) => (
          <div key={artwork._id} className="image-item">
            <img src={artwork.images[0]} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <p>{artwork.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistPortfolio;
