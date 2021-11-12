import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const Movie = () => {
  const id = useParams().trackId;

  const [movie, setmovie] = useState("");

  const getMovie = async () => {
    const bigobj = await axios.get(`${BASE_URL}/Movies`);
    setmovie(bigobj.data.find((element) => element.trackId == id));
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);

  return (
    <>
      {movie ? (
        <div className="oneitem">
          {movie.trackName}
          <video width="320" height="240" controls>
            {" "}
            <source src={movie.trackViewUrl} type="video/mp4" />
            {console.log(movie.trackViewUrl)}
            Your browser does not support the video tag.
          </video>
          {/* <img src= {movie.artworkUrl100} alt="movie" /> */}
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default Movie;
