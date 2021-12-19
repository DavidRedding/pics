import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
// prettier-ignore

const ImageList = (props) => {          
                                         // image's
  const images = props.images.map( image => {
    return <ImageCard key={image.id} image = {images}/>;
  });

  return <div className = "image-list">{images}</div>;
};

export default ImageList;
