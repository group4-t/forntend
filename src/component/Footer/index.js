import React from "react";
import "./style.css";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="">
            {" "}
            <FaTwitter className="icon" /> Twitter{" "}
          </a>
        </li>
        <li id="secondLiFooter">
          <a href="">
            {" "}
            <AiFillInstagram className="icon" /> Instagram{" "}
          </a>
        </li>
        <li id="lastLifooter">
          <a href="https://github.com/dorrahsq">
            {" "}
            <AiFillGithub className="icon" /> GitHub{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
