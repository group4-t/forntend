import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const BASE_URL = "http://localhost:4000";
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
                return ele.name == AddinputSignvalue;
              });
              if (found ) {
                return (
                  <p>
                    you already have an account! log in or change your username{" "}
                  </p>
                );
              } else {
                createNew();
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
                return ele.name == AddinputLogvalue;
              });
              if (found) {
                localStorage.setItem("userId", JSON.stringify(found.id));
                return <p>your in </p>;
              } else {
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
