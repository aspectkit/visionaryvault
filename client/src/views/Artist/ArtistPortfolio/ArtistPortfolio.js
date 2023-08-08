import React from "react";
import { Link } from 'react-router-dom';
import "./ArtistPortfolio.css";

const loggedInUser = {
  id: 1,
  name: "John Doe",
  profilePicture: "https://via.placeholder.com/150",
  bio: "I'm a passionate artist with a love for colors and nature.",
  photos: [
    {
      id: 101,
      imageUrl: "https://via.placeholder.com/400",
      title: "Sunset",
      description: "A beautiful sunset over the mountains.",
    },
    {
      id: 102,
      imageUrl: "https://via.placeholder.com/400",
      title: "Flower Garden",
      description: "Vibrant flowers in a colorful garden.",
    },
    {
      id: 103,
      imageUrl: "https://via.placeholder.com/400",
      title: "Flower Garden",
      description: "Vibrant flowers in a colorful garden.",
    },
    {
      id: 104,
      imageUrl: "https://via.placeholder.com/400",
      title: "Flower Garden",
      description: "Vibrant flowers in a colorful garden.",
    },
    {
      id: 105,
      imageUrl: "https://via.placeholder.com/400",
      title: "Flower Garden",
      description: "Vibrant flowers in a colorful garden.",
    },
    {
      id: 106,
      imageUrl: "https://via.placeholder.com/400",
      title: "Flower Garden",
      description: "Vibrant flowers in a colorful garden.",
    },
    {
      id: 107,
      imageUrl: "https://via.placeholder.com/400",
      title: "Flower Garden",
      description: "Vibrant flowers in a colorful garden.",
    },
  ],
};

function ArtistPortfolio() {
  return (
    <div className="artist-container">
      <div className="profile">
        <img
          src={loggedInUser.profilePicture}
          alt={`${loggedInUser.name}'s profile`}
          />
          <h2>{loggedInUser.name}</h2>
      </div>
      <p className="bio">{loggedInUser.bio}</p>
      <div className="commission-button-container">
        <Link to="/commission" className="commission-button">
          Commission Artwork
        </Link>
      </div>
      <hr className="page-break" />
      <div className="image-grid">
        {loggedInUser.photos.map((photo) => (
          <div key={photo.id} className="image-item">
            <img src={photo.imageUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistPortfolio;