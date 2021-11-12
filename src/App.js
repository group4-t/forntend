import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/nav";
// import Movie from "./component/Movie";
// import Music from "./component/Music";
// import Favorite from "./component/Fav";
// import User from "./component/user";
import "./App.css";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/Music" element={<Music />} />
        <Route exact path="/Podcast" element={<Podcast />} />
        <Route exact path="/Movie" element={<Movie />} />
        <Route exact path="/Ebook" element={<Ebook />} />
        <Route exact path="/fav" element={<Fav />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </>
  );
};
export default App;
