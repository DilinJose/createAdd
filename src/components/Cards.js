import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Checkboxes from "./Checkboxes";

const Cards = ({ image, action, title, id }) => {
  return (
    <Card className="custom-card" sx={{  padding: "0 15px",margin: "0 15px ",border: "2px solid black" }}>
      <Checkboxes id={id} />
      <CardActionArea>
        <CardMedia
          sx={{ padding: "10px", border: "2px solid black" }}
          component="img"
          height="280"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ border: "2px solid black", }}>
          <Typography
            sx={{ display: "flex", justifyContent: "center", color: "grey" }}
            gutterBottom
            variant="p"
            component="div"
          >
            {action}
          </Typography>
          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            variant="h6"
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
