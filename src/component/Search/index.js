import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:4000";

function Search() {
  const [searchResult, setsearchResultt] = useState([]);

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:4000/all/search/${myTerm}`
      );
      setsearchResultt(response.data.results);
    }
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
          <div className="oneMovie">
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
