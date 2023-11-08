import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Checkboxes from "./Checkboxes";

const Cards = ({ image, action, title, id }) => {
  return (
    <Card
      className="custom-card"
      sx={{
        maxWidth: 345,
        padding: "0 15px",
        margin: "0 15px ",
      
      }}
    >
      <Checkboxes id={id} />
      <CardActionArea>
        <CardMedia
          sx={{ padding: "10px" }}
          component="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            padding:"0px"
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "grey",
              margin:"0px"
            }}
            gutterBottom
            variant="p"
            component="div"
          >
            {action}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              margin:"0px"
            }}
            variant="p"
            color="text.dark"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Cards;
