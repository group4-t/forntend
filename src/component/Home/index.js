import React, { useState, useEffect } from "react";
import "./style.css";
import photo from "./../../imges/last.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://backend-tw.herokuapp.com";

const Home = () => {
  const [top, setTop] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const top = await axios.get(`${BASE_URL}/all`);

    setTop(top.data);
  };
  let first = 0;
  let second = 0;
  let third = 0;
  let firstt = 0;
  let secondd = 0;
  let thirdd = 0;

  const goInside = (id) => {
    console.log(id);
    navigate(`/${id}`);
  };

  return (
    <div>
      <div>
        <img className="backImg" src={photo} />
      </div>
      <h2 className="h2header"> With SkyTunes </h2>
      <h4 className="headerText">
        {" "}
        you can find the Latest and Trending songs, <br /> podcast,movies and
        more..{" "}
      </h4>
      <h5 className="top5"> TOP 3 </h5>
      {top.map((ele) => {
        if (ele.trackCount > first) {
          third = second;
          second = first;
          first = ele.trackCount;
          firstt = ele;
        } else if (ele.trackCount > second) {
          third = second;
          second = ele.trackCount;
          secondd = ele;
        } else if (ele.trackCount > third) {
          third = ele.trackCount;
          thirdd = ele;
        }
      })}

      <div className="allTop">
        <div
          onClick={() => {
            goInside(firstt.trackId);
          }}
        >
          <p className="type"> {firstt.kind} </p>
          <img src={firstt.artworkUrl100} alt="movie" />
          <h6 className="topName"> {firstt.trackName} </h6>{" "}
        </div>

        <div
          onClick={() => {
            goInside(secondd.trackId);
          }}
          className="second"
        >
          <p className="type"> {secondd.kind} </p>
          <img src={secondd.artworkUrl100} alt="movie" />
          <h6 className="topName"> {secondd.trackName} </h6>{" "}
        </div>

        <div
          onClick={() => {
            goInside(thirdd.trackId);
          }}
        >
          <p className="type"> {thirdd.kind} </p>
          <img src={thirdd.artworkUrl100} alt="movie" />
          <h6 className="topName"> {thirdd.trackName} </h6>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
