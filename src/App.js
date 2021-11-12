import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Music from "./component/Music";
import Podcast from "./component/Podcast";
import Movie from "./component/Movie";
import Ebook from "./component/Ebook";
import Fav from "./component/Fav";
import User from "./component/User";
import "./App.css";
// import axios from "axios";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/Music" element={<Music />} />
        <Route exact path="/Podcast" element={<Podcast />} />
        <Route exact path="/Movie" element={<Movie />} />
        <Route exact path="/Ebook" element={<Ebook />} />
        <Route exact path="/Fav" element={<Fav />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </>
  );
};
export default App;
