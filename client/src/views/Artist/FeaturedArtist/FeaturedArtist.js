import React from "react";
import "./FeaturedArtist.css";
import { useQuery } from "@apollo/client";
import { QUERY_ARTISTS } from "../../../utils/queries";

function FeaturedArtist() {
  const { loading, error, data } = useQuery(QUERY_ARTISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const artists = data.artists;

  return (
    <div className="backGround">
      <div className="homeContainer">
        {artists.map((artist, index) => (
          <div key={index} className="artistContainer">
            <h2 className="artistName">
              {artist.artistName.firstName} {artist.artistName.lastName}
            </h2>
            <img
              className="artistProfileImage"
              src={artist.artistPicture}
              alt={`${artist.artistName.firstName}'s profile`}
            />

            <div className="artworkContainer">
              {artist.artworks.map((artwork, index) => (
                <div key={index} className="artworkItem">
                  <h3 className="artworkTitle">{artwork.title}</h3>
                  <img
                    className="artistArtWork"
                    src={artwork.images[0]}
                    alt={`${artwork.title}`}
                  />
                  <p className="artistDescription">
                    {artist.artistDescription.artistProfile}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedArtist;
