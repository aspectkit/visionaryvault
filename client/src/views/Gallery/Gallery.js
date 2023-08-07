import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Picture1 from '../assets/hero.jpg'

const seedData = [
  {
    id: 1,
    imageURL: "https://via.placeholder.com/300",
    artistName: "John Doe",
    title: "Abstract Art",
    description: "This is an abstract art piece with vibrant colors.",
  },
  {
    id: 2,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Jane Smith",
    title: "Nature's Beauty",
    description: "A serene landscape capturing the beauty of nature.",
  },
  {
    id: 3,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Michael Johnson",
    title: "Portraits",
    description: "Collection of expressive portrait paintings.",
  },
  {
    id: 4,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Michael Johnson",
    title: "Portraits",
    description: "Collection of expressive portrait paintings.",
  },
  {
    id: 5,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Michael Johnson",
    title: "Portraits",
    description: "Collection of expressive portrait paintings.",
  },
  {
    id: 6,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Michael Johnson",
    title: "Portraits",
    description: "Collection of expressive portrait paintings.",
  },
  {
    id: 7,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Michael Johnson",
    title: "Portraits",
    description: "Collection of expressive portrait paintings.",
  },
  {
    id: 8,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Michael Johnson",
    title: "Portraits",
    description: "Collection of expressive portrait paintings.",
  },
  {
    id: 9,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Michael Johnson",
    title: "Portraits",
    description: "Collection of expressive portrait paintings.",
  },
  {
    id: 10,
    imageURL: "https://via.placeholder.com/300",
    artistName: "Michael Johnson",
    title: "Portraits",
    description: "Collection of expressive portrait paintings.",
  },
];

function Gallery() {
  // const [artPieces, setArtPieces] = useState([]);
  const [artPieces, setArtPieces] = useState(seedData);

  // useEffect(() => {
  //   fetchRandomArt();
  // }, []);

  // const fetchRandomArt = async () => {
  //   try {
  //     // replace db with ours
  //     const response = await fetch('db');
  //     const data = await response.json();
  //     setArtPieces(data);
  //   } catch (error) {
  //     console.error('Error fetching random art:', error);
  //   }
  // };

  return (
    <div className="galleryContainer">
      {artPieces.map((artPiece, index) => (
        <div key={index} className="artPieceContainer">
          <img className="artImage" src={artPiece.imageURL} alt={`Art ${index + 1}`} />
          <div className="overlay">
            <div className="overlayContent">
              <h3 className="artPieceTitle">{artPiece.title}</h3>
              <p className="artPieceArtist">{artPiece.artist}</p>
              <p className="artPieceDescription">{artPiece.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;