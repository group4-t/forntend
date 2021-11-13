import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:4000";

function Music() {
  const [music, setMusic] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllMusic();
  }, []);

  const getAllMusic = async () => {
    const music = await axios.get(`${BASE_URL}/Music`);

    setMusic(music.data);
  };

  const goInside = (id) => {
    console.log(id);
    navigate(`/Music/${id}`);
  };
  const addFav = () => {
    //inside users
  };

  return (
    <div className="allMovies">
      {music.map((music) => {
        return (
          <div
            onClick={() => {
              goInside(music.trackId);
            }}
            className="oneMovie"
          >
            <img src={music.artworkUrl100} alt="music" />
            <div>
              {/* <button
                  onClick={() => {
                    addFav(music.trackId);
                  }}
                >
                  Add to Favorite
                </button>{" "} */}
            </div>
            <h5> {music.trackName} </h5>
          </div>
        );
      })}
    </div>
  );
}

export default Music;
