import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const BASE_URL = "https://backend-tw.herokuapp.com";

const HomeItem = () => {
  const id = useParams().trackId;

  const [topp, seTopp] = useState("");
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

  const getAllItem = async () => {
    const bigobj = await axios.get(`${BASE_URL}/all`);
    seTopp(bigobj.data.find((element) => element.trackId == id));
  };

  useEffect(() => {
    getAllItem();
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
      {topp ? (
        <div className="oneitemHomeq">
          <div className="blackBackground"> h</div>
          <p className="homeP"> {topp.trackName}</p>
          <img src={topp.artworkUrl100} alt="" />
          <h6> by: {topp.artistName}</h6>
          <button
            className="addFavBtn"
            onClick={() => {
              addFav(topp.trackId);
            }}
          >
            {text}
          </button>{" "}
          <h5 className="headSpa">g</h5>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default HomeItem;
