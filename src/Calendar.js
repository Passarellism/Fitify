import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function StaticDatePickerLandscape() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="landscape" />
    </LocalizationProvider>
  );
}

// import React, {useState} from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import CheckIcon from '@mui/icons-material/Check';

// export default function StaticDatePickerLandscape() {
//   const [value, setValue] = useState(new Date())
//   const [highlightedDays, setHighlightedDays] = useState([1, 2, 5, 12])

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker 
//       orientation="portrait" 
//       renderInput={(params) => <TextField {... params} />}
//       renderDay={(day, _value, DayComponentProps) => {
//         const isSelected = 
//         !DayComponentProps.outsideCurrentMonth && highlightedDays.indexOf(day.getDate()) >= 0;
//           return(
//             <Badge
//               key={day.toString()}
//               overlap='circular'
//               badgeContent={isSelected ? <CheckIcon/> : undefined}
//             >
    
//             </Badge>
//           )
        
        
//       }}
//       />
//     </LocalizationProvider>
//   );
// }