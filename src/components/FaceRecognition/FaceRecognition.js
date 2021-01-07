import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="center">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default FaceRecognition;
