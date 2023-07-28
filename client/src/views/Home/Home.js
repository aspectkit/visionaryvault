import React from 'react';
import './Home.css';

const HomePage = () => {

  return (
    <div className="homePageContainer">
      <nav className="navbar">
        {/* Add your navbar/header content here */}
      </nav>

      {/* Middle/right side artist showcases */}
      <div className="artist-showcases">
        {artistShowcases.map((artist) => (
          <div key={artist.id} className="artist-showcase">
            <img src={artist.imageUrl} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p>{artist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;