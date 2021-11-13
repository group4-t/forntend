import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const BASE_URL = "https://backend-tw.herokuapp.com";

const HomeItem = () => {
  const id = useParams().trackId;

  const [topp, seTopp] = useState("");

  const getAllItem = async () => {
    const bigobj = await axios.get(`${BASE_URL}/all`);
    seTopp(bigobj.data.find((element) => element.trackId == id));
  };

  useEffect(() => {
    getAllItem();
  }, []);
  console.log(topp);
  return (
    <>
      {topp ? (
        <div className="oneitemHome">
          <div className="blackBackground"> h</div>
          <p className="homeP"> {topp.trackName}</p>
          <img src={topp.artworkUrl100} alt="" />

          <h6> by: {topp.artistName}</h6>
          <h5 className="headSpa">g</h5>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default HomeItem;
