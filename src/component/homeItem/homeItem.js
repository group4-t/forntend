import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const BASE_URL = "http://localhost:4000";

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
          <p> {topp.trackName}</p>
          <img src={topp.artworkUrl100} alt="" />

          <h6> by: {topp.artistName}</h6>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default HomeItem;