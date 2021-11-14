import React, { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";


const BASE_URL = "http://localhost:4000";

const User = () => {
  const [users, setusers] = useState([]);
  const [AddinputSignvalue, setAddinputSignvalue] = useState("");
  const [AddinputLogvalue, setAddinputLogvalue] = useState("");
  const [text, setText] = useState('Welcome');

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
     <p className="change">  {text} </p> 
      {userId ? (
        <form onSubmit={logOut}>
          <button className="userBtnL"> log out </button>
        </form>
      ) : (
        <div className="contenerB">
          <div className="firstDiv">
            <button
              className="userBtn"
              onClick={() => {
                let found = users.find((ele) => {
                  return ele.userName == AddinputSignvalue;
                });

                if (found) {
                  console.log(found);
                  return (
                    <p className="accountText">
                      {/* {console.log(
                        "This username already have an account! log in or change your username"
                      )} */}
                    {/* {text} */}
                    {setText("This username already have an account! log in or change your username")}
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
              className="inputt1"
              onChange={(e) => {
                setAddinputSignvalue(e.target.value);
              }}
              type="text"
              placeholder="enter your name"
            />
          </div>
          <div className="secondDiv">
            <button
              className="userBtn"
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
                  // return <p>you don't have an acount!, sign up </p>;
                  {setText("you don't have an acount, sign up and join us")}
                }
              }}
            >
              {" "}
              log in{" "}
            </button>{" "}
            <input
              className="inputt2"
              onChange={(e) => {
                setAddinputLogvalue(e.target.value);
              }}
              type="text"
              placeholder="enter your name"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default User;
