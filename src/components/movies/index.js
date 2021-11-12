import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const BASE_URL = "http://localhost:4000";

function Movies() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const movies = await axios.get(`${BASE_URL}/movies`);

    setMovies(movies.data);
  };

  const goInside = (id) => {
    let navigate = useNavigate();
    console.log(id);
    navigate.push(`/movie/${id}`);
  };
const addFav =()=>{
  //inside users 
}

  return (
    <div className="allMovies">
        {movies.map((movie) => {
          return (
            <div className="oneMovie">
            <div onClick={() => {goInside(movie.trackId);}}>
            <img src= {movie.artworkUrl100} alt="movie" />
            <div>
      <button onClick={() => {
                addFav(movie.trackId);
              }}
            >
              Add to Favorite
            </button> </div>
               <h5>  {movie.trackName}  </h5>
                      
      </div>
      
    </div>
  );
})}
</div>

);
}

export default Movies;