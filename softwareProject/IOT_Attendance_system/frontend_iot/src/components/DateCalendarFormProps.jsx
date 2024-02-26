// import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// export default function DateCalendarFormProps() {
//   const [currentDate, setCurrentDate] = useState(dayjs());

//   useEffect(() => {
//     // Update the current date every second
//     const intervalId = setInterval(() => {
//       setCurrentDate(dayjs());
//     }, 1000);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []);

//   const containerStyles = {
//     width: 240, // Adjust the width to accommodate the smaller calendar
//     height: 240, // Adjust the height to accommodate the smaller calendar
//   };

//   const calendarStyles = {
//     transform: "scale(0.77)", // Scale down the calendar to 50% of its original size
//     transformOrigin: "top left", // Set the origin of transformation
//     width: "130%", // Increase the width to compensate for the scaling
//     height: "150%", // Increase the height to compensate for the scaling
//     fontSize: "0.6rem", // Adjust the font size if necessary
//   };

//   const dayStyles = {
//     padding: "1px", // Reduce the padding to decrease the gap between numbers
//     margin: "0px", // Set margin to 0 to reduce space around the day cells
//   };

//   return (
//     <div style={containerStyles}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateCalendar
//           defaultValue={currentDate}
//           readOnly
//           style={calendarStyles}
//           dayStyle={dayStyles}
//           sx={{
//             // Apply custom styles using the sx prop
//             "& .MuiPickersDay-today": {
//               backgroundColor: "darkblue !important", // Add !important to override default styles
//               color: "white !important", // Add !important to override default text color
//             },
//           }}
//         />
//       </LocalizationProvider>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// export default function DateCalendarFormProps() {
//   const [currentDate, setCurrentDate] = useState(dayjs());

//   useEffect(() => {
//     // Update the current date every second
//     const intervalId = setInterval(() => {
//       setCurrentDate(dayjs());
//     }, 1000);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []);

//   const containerStyles = {
//     width: 240, // Adjust the width to accommodate the smaller calendar
//     height: 240, // Adjust the height to accommodate the smaller calendar
//   };

//   const calendarStyles = {
//     transform: "scale(0.77)", // Scale down the calendar to 77% of its original size
//     transformOrigin: "top left", // Set the origin of transformation
//     width: "130%", // Increase the width to compensate for the scaling
//     height: "150%", // Increase the height to compensate for the scaling
//     fontSize: "0.6rem", // Adjust the font size if necessary
//   };

//   return (
//     <div style={containerStyles}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateCalendar
//           defaultValue={currentDate}
//           readOnly
//           style={calendarStyles}
//           sx={{
//             // Apply custom styles using the sx prop
//             "& .MuiPickersDay-root": {
//               padding: "1px", // Reduce the padding to decrease the gap between numbers
//               margin: "0px", // Set margin to 0 to reduce space around the day cells
//             },
//             "& .MuiPickersDay-today": {
//               backgroundColor: "darkblue !important", // Add !important to override default styles
//               color: "white !important", // Add !important to override default text color
//             },
//           }}
//         />
//       </LocalizationProvider>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarFormProps() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(dayjs());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const containerStyles = {
    width: 240, // Adjust the width to accommodate the smaller calendar
    height: 240, // Adjust the height to accommodate the smaller calendar
  };

  const calendarStyles = {
    transform: "scale(0.77)", // Scale down the calendar to 77% of its original size
    transformOrigin: "top left", // Set the origin of transformation
    width: "130%", // Increase the width to compensate for the scaling
    height: "150%", // Increase the height to compensate for the scaling
    fontSize: "0.6rem", // Adjust the font size if necessary
  };

  return (
    <div style={containerStyles}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={currentDate} // Use value instead of defaultValue
          readOnly
          style={calendarStyles}
          sx={{
            // Apply custom styles using the sx prop
            "& .MuiPickersDay-root": {
              padding: "1px", // Reduce the padding to decrease the gap between numbers
              margin: "0px", // Set margin to 0 to reduce space around the day cells
            },
            "& .MuiPickersDay-today": {
              backgroundColor: "darkblue !important", // Add !important to override default styles
              color: "white !important", // Add !important to override default text color
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
