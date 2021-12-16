import React from "react";
// prettier-ignore

const ImageList = (props) => {          
                                         // image's
  const images = props.images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />;
               //image.id   //image.urls    //image.description
  });

  return <div>{images}</div>;
};

export default ImageList;
