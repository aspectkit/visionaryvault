import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { useQuery } from "@apollo/client";
import { QUERY_ARTISTS } from "../../utils/queries";

function Gallery() {
  const { loading, error, data } = useQuery(QUERY_ARTISTS);

  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    // Update artPieces state when data is fetched
    if (data && data.artists) {
      const allArtPieces = data.artists.flatMap((artist) => artist.artworks);
      setArtPieces(allArtPieces);
    }
  }, [data]); // Run this effect whenever data changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="galleryContainer">
      {artPieces.map((artPiece, index) => (
        <div key={index} className="artPieceContainer">
          <img
            className="artImage"
            src={artPiece.images[0]}
            alt={`Art ${index + 1}`}
          />
          <div className="overlay">
            <div className="overlayContent">
              <h3 className="artPieceTitle">{artPiece.title}</h3>
              <p className="artPieceDescription">{artPiece.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
