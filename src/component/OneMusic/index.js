import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const BASE_URL = "https://backend-tw.herokuapp.com";

const OneMusic = () => {
  const id = useParams().trackId;
  const [onemusic, setOneMusic] = useState("");
  const [user, setuser] = useState(null);
  const [userId, setuserId] = useState("");
  const [text, setText] = useState("Add to Favorite");

  const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/users`);

    let userid = JSON.parse(localStorage.getItem("userId"));
    if (userid) {
      let loginUser = users.data.find((ele) => {
        return ele.id == userid;
      });

      const found = loginUser.Fav.find((elm) => elm.trackId == id);
      if (found) setText("Remove from Favorite");

      setuser(loginUser);
      setuserId(userid);
    }
  };

  const getOneMusic = async () => {
    const bigobj = await axios.get(`${BASE_URL}/Music`);
    setOneMusic(bigobj.data.find((element) => element.trackId == id));
  };

  useEffect(() => {
    getOneMusic();
    getAllUsers();
  }, []);

  const addFav = (id) => {
    if (userId) {
      console.log("go to fav");
      // check if the item already in fav or not
      const found = user.Fav.find((elm) => {
        return id == elm.trackId;
      });

      if (found) {
        let obj = {
          idu: userId,
          trackId: id,
        };
        axios
          .put(`${BASE_URL}/users/removeFav`, obj)
          .then(() => console.log(" removed secc.... "))
          .catch((err) => {
            console.error(err);
          });

        getAllUsers();
        setText("Add to Favorite");
      } else {
        //call backend (add to fav) and  send user id , fav item  to backend
        console.log("its time to add ");
        let obj = {
          idu: userId,
          trackId: id,
        };
        axios
          .put(`${BASE_URL}/users/addFav`, obj)
          .then(() => console.log(" done "))
          .catch((err) => {
            console.error(err);
          });
        // setinFav(true);
        setText("Remove from Favorite");
      }

      getAllUsers();
    } else {
      console.log("you need to sign up or log in first ");
    }
  };
  return (
    <>
      {OneMusic ? (
        <div className="oneitemMusic">
          <div className="blackBackgroundMusic"> h</div>
          <p className="musicP"> {onemusic.trackName}</p>
          <img src={onemusic.artworkUrl100} alt="movie" />
          <h6> by: {onemusic.artistName}</h6>
          <button
            className="addFavBtnMu"
            onClick={() => {
              addFav(onemusic.trackId);
            }}
          >
            {text}
          </button>{" "}
          {/* <audio controls>
            <source src={onemusic.previewUrl} type="audio/x-m4a" />
            Your browser does not support the audio element.
          </audio> */}
          {console.log(onemusic.previewUrl)}
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default OneMusic;
