import React, { useState } from "react";
import "./Home.css";
import { useQuery, gql } from "@apollo/client";

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
      description:
        "About: come check out my amazing art work, you wont be dissapointed",
      artwork1: "https://via.placeholder.com/150",
      artwork2: "https://via.placeholder.com/150",
    },
    {
      name: "Tyler Smith",
      profilePicture: "https://via.placeholder.com/150",
      description: "hello",
      artwork1: "https://via.placeholder.com/150",
      artwork2: "https://via.placeholder.com/150",
    },
    {
      name: "Trace Martin",
      profilePicture: "https://via.placeholder.com/150",
      description: "hello",
      artwork1: "https://via.placeholder.com/150",
      artwork2: "https://via.placeholder.com/150",
    },
    {
      name: "Tyler Smith",
      profilePicture: "https://via.placeholder.com/150",
      description: "hello",
      artwork1: "https://via.placeholder.com/150",
      artwork2: "https://via.placeholder.com/150",
    },
    {
      name: "Trace Martin",
      profilePicture: "https://via.placeholder.com/150",
      description: "hello",
      artwork1: "https://via.placeholder.com/150",
      artwork2: "https://via.placeholder.com/150",
    },
    {
      name: "Tyler Smith",
      profilePicture: "https://via.placeholder.com/150",
      description: "hello",
      artwork1: "https://via.placeholder.com/150",
      artwork2: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="homeContainer">
      <h2>home</h2>
    </div>
  );
}

export default Home;
