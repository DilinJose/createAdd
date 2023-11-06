import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Checkboxes from "./Checkboxes";

const Cards = ({ image, action, title }) => {
  return (
    <Card
      className="custom-card"
      style={{ border: "2px solid black" }}
      sx={{ maxWidth: 545, margin: "15px" }}
    >
        <Checkboxes />
      <CardActionArea>
        <CardMedia
          sx={{ padding: "10px" }}
          component="img"
          height="400"
          image={image}
          alt="green iguana"
        />
        <CardContent>
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
            color="text.secondary"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Cards;
