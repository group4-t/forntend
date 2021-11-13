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
        <div className="oneitemHome">
          <div className="blackBackgroundM"> h</div>
          <p className="movieP"> {movie.trackName}</p>
          <img src={movie.artworkUrl100} alt="" />
          <h6 className="hhh"> main character: {movie.artistName}</h6>
          <h5 className="h5space">g</h5>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default Movie;
