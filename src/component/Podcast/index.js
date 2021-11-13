import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:4000";

function Podcast() {
  const [podcast, setpodcast] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllPodcast();
  }, []);

  const getAllPodcast = async () => {
    const podcast = await axios.get(`${BASE_URL}/Podcast`);

    setpodcast(podcast.data);
  };

  const goInside = (id) => {
    console.log(id);
    navigate(`/Podcast/${id}`);
  };
  const addFav = () => {
    //inside users
  };

  return (
    <div className="allMovies">
      {podcast.map((onepodcast) => {
        return (
          <div
            onClick={() => {
              goInside(onepodcast.trackId);
            }}
            className="oneMovie"
          >
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

export default Podcast;
