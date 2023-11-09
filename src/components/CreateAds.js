import React, { createContext, useState } from "react";

import textImage from "../assests/img/img1.png";
import mediaImage from "../assests/img/img2.png";
import Cards from "./Cards";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

const CreateAds = () => {
  const navigate = useNavigate();
  const [checkedId, setCheckedId] = useState([]);
  console.log("checkedId", checkedId);

  const cardData = [
    {
      id: 1,
      image: textImage,
      action: "Create",
      title: "Text Ad",
    },
    {
      id: 2,
      image: mediaImage,
      action: "Create",
      title: "Media Ad",
    },
  ];

  const handleForm = () => {
    if (checkedId.includes(1)) {
      navigate("/textadsform");
    } else if (checkedId.includes(2)) {
      navigate("/mediaadsform");
    }
  };

  return (
    <div className="createads-card " style={{ height: "75vh" }}>
      <userContext.Provider value={{ setCheckedId, checkedId }}>
        <div className=" h-100 d-flex justify-content-center align-items-center">
          {cardData.map(({ image, action, title, id }) => {
            return (
              <Cards image={image} action={action} title={title} id={id} />
            );
          })}
        </div>
        <div className="d-flex justify-content-end m-4 ">
          <Button
            className="customButton"
            variant="contained"
            onClick={handleForm}
          >
            Next
          </Button>
        </div>
      </userContext.Provider>
    </div>
  );
};

export default CreateAds;
