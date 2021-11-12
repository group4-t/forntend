import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router';
import "./style.css";
import head from "./../../imges/head.png";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="ulNav">

      {/* <li>
      <img src={head} alt="logo" />
        </li> */}

      <li>
          <Link id="firstli" className="linkk" to="/">Home</Link>
        </li>

        <li>
          <Link className="linkk" to="/Music">Music</Link>
        </li>
        <li>
          <Link className="linkk" to="/Podcast">Podcast</Link>
        </li>
        <li>
          <Link className="linkk" to="/Movies">Movies</Link>
        </li>
        <li>
          <Link  className="linkk" to="/Ebook">Ebook</Link>
        </li>
        <li>
          <Link className="linkk" to="/Fav">Favorite</Link>
        </li>
        <li>
          <Link  className="linkk" to="/User">User</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
// import Music from "./component/Music";
// import Podcast from "./component/Podcast";
// import Movie from "./component/Movie";
// import Ebook from "./component/Ebook";
// import Fav from "./component/Fav";
// import User from "./component/User";
