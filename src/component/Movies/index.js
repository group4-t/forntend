import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
const BASE_URL = "https://backend-tw.herokuapp.com";

function Movies() {
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const movies = await axios.get(`${BASE_URL}/Movies`);

    setMovies(movies.data);
  };

  const goInside = (id) => {
    console.log(id);
    navigate(`/Movie/${id}`);
  };
  const addFav = (id) => {
    console.log(id);
  };

  return (
    <div className="allMovies">
      {movies.map((movie) => {
        return (
          <>
            <div
              onClick={() => {
                goInside(movie.trackId);
              }}
              className="oneMovie"
            >
              <img src={movie.artworkUrl100} alt="movie" />

              <h5> {movie.trackName} </h5>

              <div>
                {/* <button
                onClick={() => {
                  addFav(movie.trackId);
                }}
              >
                Add to Favorite
              </button>{" "} */}
              </div>
            </div>
            {/* <button
                onClick={() => {
                  addFav(movie.trackId);
                }}
              >
                Add to Favorite
              </button>{" "} */}
          </>
        );
      })}
    </div>
  );
}

export default Movies;
