import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import "./style.css";
​
​
​
const Nav = () => { 
    const navigate = useNavigate();
    const goBack = () => {
      navigate.goBack();
    };
    return (
        <div className="nav">
            <ul>
               <div className="icon"><IoArrowBackCircleSharp onClick={goBack}/></div>
                <li> <Link to ="/Music">Music</Link></li>
                <li> <Link to ="/Podcast">Podcast</Link></li>
                <li> <Link to ="/Movie">Movie</Link></li>
                <li> <Link to ="/Ebook">ebook</Link></li>
            </ul>
        </div>
    )
​
}
​
export default Nav;