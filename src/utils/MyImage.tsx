import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = (props) => {
  return (
    <LazyLoadImage
      alt={props.alt}
      height={props.height}
      src={props.src}
      width={props.width}
      effect="blur"
    />
  );
};

export default MyImage;
