import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const OneMusic = () => {
  const id = useParams().trackId;
  const [onemusic, setOneMusic] = useState("");

  const getOneMusic = async () => {
    const bigobj = await axios.get(`${BASE_URL}/Music`);
    setOneMusic(bigobj.data.find((element) => element.trackId == id));
  };

  useEffect(() => {
    getOneMusic();
  }, []);

  return (
    <>
      {OneMusic ? (
        <div className="oneitemMusic">
          <div className="blackBackgroundMusic"> h</div>
          <p className="musicP"> {onemusic.trackName}</p>
          <img src={onemusic.artworkUrl100} alt="movie" />
          <h6> by: {onemusic.artistName}</h6>
          <audio controls>
            <source src={onemusic.previewUrl} type="audio/x-m4a" />
            Your browser does not support the audio element.
          </audio>
          {console.log(onemusic.previewUrl)}
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default OneMusic;
