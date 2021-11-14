import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const BASE_URL = "https://backend-tw.herokuapp.com";
const Fav = () => {
  const [users, setusers] = useState([]);
  const [fav, setfav] = useState([]);
  const [all, setall] = useState([]);

  useEffect(() => {
    getAllUsers();
    getAllItem();
  }, []);

  const getAllItem = async () => {
    const users = await axios.get(`${BASE_URL}/all`);
    setall(users.data);
  };

  const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/users`);
    setusers(users.data);
    let userid = JSON.parse(localStorage.getItem("userId"));
    if (userid) {
      let loginUser = users.data.find((ele) => {
        return ele.id == userid;
      });
      //   setuser(loginUser);
      //   setuserId(userid);
      setfav(loginUser.Fav);
    }
  };

  return (
    <div className="allMovies">
      {all.map((eleall) => {
        let gg = fav.filter((movie) => movie.id == eleall.trackId);

        console.log(gg);

        // return (
        //   <>
        //     <div
        //       onClick={() => {
        //         // goInside(movie.trackId);
        //       }}
        //       className="oneMovie"
        //     >
        //       <img src={gg.artworkUrl100} alt="movie" />

        //       <h5> {gg.trackName} </h5>

        //       <div>

        //       </div>
        //     </div>
        //   </>
        // );
      })}
    </div>
  );
};

export default Fav;
