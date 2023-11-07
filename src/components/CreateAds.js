import React from "react";

import textImage from "../assests/img/img1.png";
import mediaImage from "../assests/img/img2.png";
import Cards from "./Cards";

const CreateAds = () => {
  
  const cardData = [
    {
      id:1,
      image: textImage,
      action: "Create",
      title: "Text Ad",
    },
    {
      id:2,
      image: mediaImage,
      action: "Create",
      title: "Media Ad",
    },
  ];

  return (
    <div style={{height:"90vh" }} className=" d-flex justify-content-center align-items-center"> 
      {cardData.map(({ image, action, title ,id}) => {
        return <Cards image={image} action={action} title={title} id={id} />
      })}
      {/* <Cards /> */}
    </div>
  );
};

export default CreateAds;
