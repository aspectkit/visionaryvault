import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './Artists.css';

const GET_ARTISTS = [];

const UserPage = () => {
  const { loading, error, data } = useQuery(GET_ARTISTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>Artists' Portfolios</h1>
      {data.artists.map((artist) => (
        <div key={artist._id}>
          <h2>{artist.name}</h2>
          <p>Email: {artist.email}</p>
          <h3>Portfolio:</h3>
          <ul>
            {artist.portfolio.map((item) => (
              <li key={item._id}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <img src={item.imageUrl} alt={item.title} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserPage;