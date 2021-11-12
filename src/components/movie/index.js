import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const Movie = () => {
    const id = useParams().trackId;
    const [movie, setmovie] = useState("");
    // console.log(id);
  
    // const getAllMovies = async () => {
    //     const movies = await axios.get(`${BASE_URL}/movies`);


    const getMovie = async () => {
      const bigobj = await axios.get(`${BASE_URL}/movies`);
      setmovie(bigobj.data.find((element) => element.trackId == id));
    };
  
    useEffect(() => {
        getMovie();
    }, []);
  
  
    
    return (<>
  {movie ? <div className="oneitem">
        {movie.trackName}
        <img src= {movie.artworkUrl100} alt="movie" />
      </div>:<h1>loading ...</h1>}
    </>
      
    );
  };
  
  export default Movie;