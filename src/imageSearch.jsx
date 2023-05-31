import React, { useState } from "react";
import axios from "axios";

export default function ImageSearch({addImages}) {
  const [searchImage, setSearchImage] = useState("");

  // const handleOnchange = (e) => {
  //  setSearchImage(e.target.value);
  // };
 

  function getImages() {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: process.env.REACT_APP_ACCESS,
          query: searchImage,
        },
      })
      .then((res) => addImages(res.data.results))
      .catch((error)=>console.log(error))
  }

  return (
    <div>
      <input
        type="text"
        onChange={e=>setSearchImage(e.target.value)}
        
        placeholder="search image"
        value={searchImage}
      />
      <button onClick={getImages}>search</button>
    </div>
  );
}
