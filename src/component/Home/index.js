import React from "react";
import "./style.css";
import photo from "./../../imges/last.jpeg";

const Home = () => {
  return <div> 
    <div>

<img className="backImg" src={photo}/>
    </div>
    <h2 className="h2header">  With ......, </h2>
   <h4 className="headerText"> you can find the Latest and Trending songs,podcast,movies and more.. </h4>
    
     </div>;
};

export default Home;
