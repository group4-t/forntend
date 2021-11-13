import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:4000";

function Search() {
  const [searchResult, setsearchResultt] = useState([]);
  let navigate = useNavigate();

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:4000/all/search/${myTerm}`
      );
      setsearchResultt(response.data.results);
    }
  };

  const goInside = (id) => {
    console.log(id);
    navigate(`/search/${id}`);
  };

  return (
    <div className="allMovies">
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search for something..."
        type="text"
      />
      {searchResult.map((onepodcast) => {
        return (
          <div className="oneMovie"  onClick={() => {
            goInside(onepodcast.trackId);
          }}
          className="oneMovie">
            <div>
              <img src={onepodcast.artworkUrl100} alt="movie" />
              <div>
                {/* <button
                  onClick={() => {
                    addFav(onepodcast.trackId);
                  }}
                >
                  Add to Favorite
                </button>{" "} */}
              </div>
              <h5> {onepodcast.trackName} </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Search;