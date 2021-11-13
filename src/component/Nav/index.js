import { Link } from "react-router-dom";
import "./style.css";
import head from "./../../imges/head.png";
import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <h1> SkyTunes </h1>
      </div>
      <ul className="ulNav">
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
      </ul>
    </div>
  );
};
export default Nav;
