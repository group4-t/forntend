import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Music from "./component/Music";
import Podcast from "./component/Podcast";
import Ebook from "./component/Ebook";
import Fav from "./component/Fav";
import User from "./component/User";
import "./App.css";
import Movies from "./component/Movies";
import Movie from "./component/Movie";
// import axios from "axios";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/Music" element={<Music />} />
        <Route exact path="/Podcast" element={<Podcast />} />
        <Route exact path="/Movies" element={<Movies />} />
        <Route exact path="/Ebook" element={<Ebook />} />
        <Route exact path="/Fav" element={<Fav />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/Movie/:trackId" element={<Movie />} />
      </Routes>
    </>
  );
};
export default App;
