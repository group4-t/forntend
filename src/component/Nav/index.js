import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router';
import "./style.css";
const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/Music">Music</Link>
        </li>
        <li>
          <Link to="/Podcast">Podcast</Link>
        </li>
        <li>
          <Link to="/Movie">Movie</Link>
        </li>
        <li>
          <Link to="/Ebook">Ebook</Link>
        </li>
        <li>
          <Link to="/Fav">Favorite</Link>
        </li>
        <li>
          <Link to="/User">User</Link>
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