import react, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const Checkboxes = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={(e)=>handleChange(e)}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
export default Checkboxes;
