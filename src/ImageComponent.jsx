import React from 'react';

const ImageComponent = ({ image }) => {
  return (
    <>
      {image && <img src={image} alt="Post content" />}
    </>
  );
};

export default ImageComponent;
