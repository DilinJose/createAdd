import Checkbox from "@mui/material/Checkbox";
import { useContext, useState } from "react";
import { userContext } from "./CreateAds";

const Checkboxes = ({ id }) => {
  const { setCheckedId, checkedId } = useContext(userContext);

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checkedId.includes(id)) {
      setCheckedId(checkedId.filter((v) => v !== id));
    } else {
      setCheckedId([...checkedId, id]);
    }
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
export default Checkboxes;
