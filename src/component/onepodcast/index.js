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
        <div className="oneitem">
          {podcast.trackName}
          {/* <video width="320" height="240" controls> <source src= {movie.artistViewUrl} type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
          {/* <img src= {movie.artworkUrl100} alt="movie" /> */}
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default OnePodcast;
