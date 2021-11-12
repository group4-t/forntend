
import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Music from "./component/Music";
import Podcast from "./component/Podcast";
import Ebook from "./component/Ebook";
import Fav from "./component/Fav";
import User from "./component/User";
import Footer from "./component/Footer/index";
import "./App.css";
import Movies from "./component/Movies";
import Movie from "./component/Movie";
// import axios from "axios";

const App = () => {
  return (
    <>
      <Nav />
      {/* >>>>>>> 1e3c1e70b26cb15df472e9ffa1de8844ab086d6a */}
      <Routes>
        <Route exact path="/Music" element={<Music />} />
        <Route exact path="/Podcast" element={<Podcast />} />
        <Route exact path="/Movies" element={<Movies />} />
        <Route exact path="/Ebook" element={<Ebook />} />
        <Route exact path="/Fav" element={<Fav />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/Movie/:trackId" element={<Movie />} />
        <Route exact path="/" element={<Footer />} />
      </Routes>
    </>
  );
};
export default App;
