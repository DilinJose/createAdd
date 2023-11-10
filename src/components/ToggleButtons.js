import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TableChartIcon from '@mui/icons-material/TableChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

 const ToggleButtons = ({togle,setTogle}) => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web" onClick={()=>setTogle(false)}><DonutLargeIcon/></ToggleButton>
      <ToggleButton value="android" onClick={()=>setTogle(true)}><TableChartIcon/></ToggleButton>
    </ToggleButtonGroup>
  );
}
export default ToggleButtons