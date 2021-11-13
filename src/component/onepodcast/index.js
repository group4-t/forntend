import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const OnePodcast = () => {
  const id = useParams().trackId;
  // trackId or id ?
  // console.log(id);
  const [podcast, setpodcast] = useState("");

  const getPodcast = async () => {
    const bigobj = await axios.get(`${BASE_URL}/Podcast`);
    setpodcast(bigobj.data.find((element) => element.trackId == id));
  };

  useEffect(() => {
    getPodcast();
  }, []);
  console.log(podcast);

  return (
    <>
      {podcast ? (
        <div className="oneitemMusic">
          <div className="blackBackgroundMusic"> h</div>
          <p className="musicP"> {podcast.trackName}</p>
          <img src={podcast.artworkUrl100} alt="movie" />
          <h6> by: {podcast.artistName}</h6>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default OnePodcast;
