import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const BASE_URL = "http://localhost:4000";
const User = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/users`);

    setusers(users.data);
  };
  const createNew = (e) => {
    e.preventDefault();
    console.log("create");

    let obj = {
      id: users.length + 1,
      userName: e.target.inside.value,
      Fav: [],
    };
    // setusers([...users , obj])


    axios
      .post(`${BASE_URL}/users/addNew`, obj)
      .then(() => console.log("yess User Created "))
      .catch((err) => {
        console.error(err);
      });
      e.target.inside.value = "";
    console.log(users);
  };

  return (
    <div>
      <form onSubmit={createNew}>
        <button> sign up </button>{" "}
        <input type="text" placeholder="enter your name" name="inside" />
      </form>
    </div>
  );
};

export default User;
