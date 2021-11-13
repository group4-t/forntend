import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const OneSearch = () => {
  const id = useParams().trackId;
  // trackId or id ?
  // console.log(id);
  const [searchOne, setsearchOne] = useState("");

  const getSearchItem = async () => {
    const bigobj = await axios.get(`${BASE_URL}/all/search`);
    setsearchOne(bigobj.data.results.find((element) => element.trackId == id));
      // console.log(searchOne);
  };

  useEffect(() => {
    getSearchItem();
  }, []);

  console.log(searchOne);

  return (
    <>
      {searchOne ? (
        <div className="oneitemMusic">
          <div className="blackBackgroundMusic"> h</div>
          <p className="musicP"> {searchOne.trackName}</p>
          <img src={searchOne.artworkUrl100} alt="movie" />
          <h6> by: {searchOne.artistName}</h6>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default OneSearch;
