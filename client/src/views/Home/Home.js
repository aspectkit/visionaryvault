import React, { useState } from 'react';
import './Home.css';

function Home() {

  // const [artists, setArtists] = useState([]);

  // useEffect(() => {
  //   console.log('Home mounted')
  //     fetch('')
  //         .then((response) => response.json())
  //         .then((data) => setArtists(data))
  //         .catch((error) => console.error('Error:', error));
  // }, []);

    const artists = [
        {
            name: "Trace Martin",
            profilePicture: "https://via.placeholder.com/150",
            description: "About: come check out my amazing art work, you wont be dissapointed",
            artwork1: "https://via.placeholder.com/150",
            artwork2: "https://via.placeholder.com/150"
        },
        {
            name: "Tyler Smith",
            profilePicture: "https://via.placeholder.com/150",
            description: "hello",
            artwork1: "https://via.placeholder.com/150",
            artwork2: "https://via.placeholder.com/150"
        },
        {
            name: "Trace Martin",
            profilePicture: "https://via.placeholder.com/150",
            description: "hello",
            artwork1: "https://via.placeholder.com/150",
            artwork2: "https://via.placeholder.com/150"
        },
        {
            name: "Tyler Smith",
            profilePicture: "https://via.placeholder.com/150",
            description: "hello",
            artwork1: "https://via.placeholder.com/150",
            artwork2: "https://via.placeholder.com/150"
        },
        {
            name: "Trace Martin",
            profilePicture: "https://via.placeholder.com/150",
            description: "hello",
            artwork1: "https://via.placeholder.com/150",
            artwork2: "https://via.placeholder.com/150"
        },
        {
            name: "Tyler Smith",
            profilePicture: "https://via.placeholder.com/150",
            description: "hello",
            artwork1: "https://via.placeholder.com/150",
            artwork2: "https://via.placeholder.com/150"
        }
    ];

    return (
        <div className="homeContainer">
          {artists.map((artist, index) => (
            <div key={index} className="artistContainer">
              <h2 className="artistName">{artist.name}</h2>
              <img className='artistProfileImage' src={artist.profilePicture} alt={`${artist.name}'s profile`} />
                  <p className='artistDescription'>{artist.description}</p>
              <div className='artworkContainer'>
                <img className='artistArtWork' src={artist.artwork1} alt={`${artist.name}'s artwork 1`} />
                <img className='artistArtWork' src={artist.artwork2} alt={`${artist.name}'s artwork 2`} />
                <img className='artistArtWork' src={artist.artwork2} alt={`${artist.name}'s artwork 2`} />
                <img className='artistArtWork' src={artist.artwork2} alt={`${artist.name}'s artwork 2`} />
              </div>
            </div>
          ))}
        </div>
    );
}
    
export default Home;