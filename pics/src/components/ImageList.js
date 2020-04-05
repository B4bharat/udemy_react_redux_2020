import React from "react";

export default function ImageList(props) {
  const images = props.images.map(image => {
    let { id, description, urls } = image;
    return <img key={id} alt={description} src={urls.regular} />;
  });

  return <div>{images}</div>;
}
