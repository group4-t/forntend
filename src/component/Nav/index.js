import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router';
import "./style.css";
import head from "./../../imges/head.png";
import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="ulNav">
        {/* <li>
      <img src={head} alt="logo" />
        </li> */}

        <li className="liiFirst">
          <Link id="firstli" className="linkk" to="/">
            Home
          </Link>
        </li>

        <li className="lii">
          <Link className="linkk" to="/Music">
            Music
          </Link>
        </li>
        <li className="lii">
          <Link className="linkk" to="/Podcast">
            Podcasts
          </Link>
        </li>
        <li className="lii">
          <Link className="linkk" to="/Movies">
            Movies
          </Link>
        </li>

        <li className="lii">
          <Link className="linkk" to="/search">
            Search
          </Link>
        </li>

        {/* <li className="lii">
          <Link className="linkk" to="/Fav">Favorite</Link>
        </li>
        <li className="lii">
          <Link  className="linkk" to="/User">User</Link>
        </li> */}
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
