import "./App.css";
import ImageSearch from "./imageSearch";
import DisplayImages from "./displayImages";
import React,{ useState } from "react";
function App() {
  const [images,setImages]=useState();
  return (
    <div>
      <h1>Image Bazzar</h1>
      <ImageSearch addImages={setImages}></ImageSearch>
      <DisplayImages images={images}></DisplayImages>
    </div>
  );
}

export default App;
