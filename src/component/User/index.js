import React, { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";
const BASE_URL = "https://backend-tw.herokuapp.com";
const User = () => {
  const [users, setusers] = useState([]);
  const [AddinputSignvalue, setAddinputSignvalue] = useState("");
  const [AddinputLogvalue, setAddinputLogvalue] = useState("");
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/users`);
    setusers(users.data);
  };
  const createNew = () => {
    //   console.log("create");
    let obj = {
      id: users.length + 1,
      userName: AddinputSignvalue,
      Fav: [],
    };
    axios
      .post(`${BASE_URL}/users/addNew`, obj)
      .then(() => console.log(" User Created "))
      .catch((err) => {
        console.error(err);
      });
    console.log(users);
  };
  const logOut = () => {
    localStorage.clear();
    console.log("log out");
  };
  let userId = JSON.parse(localStorage.getItem("userId"));
  console.log(userId);

  return (
    <>
      {userId ? (
        <form onSubmit={logOut}>
          <button> log out </button>
        </form>
      ) : (
        <div>
          <button
            onClick={() => {
              let found = users.find((ele) => {
                return ele.userName == AddinputSignvalue;
              });

              if (found) {
                console.log(found);
                return (
                  <p className="accountText">
                    {console.log(
                      "you already have an account! log in or change your username"
                    )}
                    you already have an account! log in or change your username{" "}
                  </p>
                );
              } else {
                localStorage.setItem(
                  "userId",
                  JSON.stringify(users.length + 1)
                );
                console.log(users.length + 1);
                createNew();
                window.location.reload(false);
              }
            }}
          >
            {" "}
            sign up{" "}
          </button>{" "}
          <input
            onChange={(e) => {
              setAddinputSignvalue(e.target.value);
            }}
            type="text"
            placeholder="enter your name"
          />
          <button
            onClick={() => {
              let found = users.find((ele) => {
                return ele.userName == AddinputLogvalue;
              });
              if (found) {
                localStorage.setItem("userId", JSON.stringify(found.id));
                console.log("your in ");
                window.location.reload(false);
                return <p>your in </p>;
              } else {
                console.log("you dont have an account");
                return <p>you don't have an acount!, sign up </p>;
              }
            }}
          >
            {" "}
            log in{" "}
          </button>{" "}
          <input
            onChange={(e) => {
              setAddinputLogvalue(e.target.value);
            }}
            type="text"
            placeholder="enter your name"
          />
        </div>
      )}
    </>
  );
};
export default User;
