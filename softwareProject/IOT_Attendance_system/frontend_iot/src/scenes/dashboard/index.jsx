// import { Box, useTheme, Container, useMediaQuery } from "@mui/material";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";
// import RealTimeAttendance from "../realtimeattendance";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import ClockProps from "../../components/ClockProps";
// import DateCalendarFormProps from "../../components/DateCalendarFormProps";
// import ModuleDetails from "../../components/ModuleDetails";
// import {
//   AbsentCard,
//   BatteryLevelCard,
//   RealTimeAttendanceCard,
//   TotalRegisteredStudentsCard,
//   YetToBeRegisteredCard,
// } from "../../components/Cards";
// import MyPieChart from "../../components/PieChart";
// import BasicCard from "../../components/LowAttendanceWarningCard";
// import DataTable from "../realtimeattendance";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const isXSmall = useMediaQuery(theme.breakpoints.down("xs"));

//   return (
//     <Box
//       sx={{
//         ml: { sm: "00px" },
//         mt: { xs: 2, sm: "80px" },
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header
//           title="Main Dashboard"
//           subtitle="Welcome to real time dashboard"
//         />
//       </Box>

//       <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
//         <Grid
//           container
//           spacing={{ xs: 2, sm: 3, md: 4 }}
//           columns={{ xs: 2, sm: 4, md: 12 }}
//         >
//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <Paper
//               elevation={0}
//               sx={{
//                 backgroundColor: colors.primary[400],
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 height: 240,
//                 // width: 300,
//                 borderRadius: 8,
//                 boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
//                 width: isXSmall ? "100%" : 300, // Responsive
//               }}
//             >
//               <ClockProps />
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <Paper
//               elevation={0}
//               sx={{
//                 backgroundColor: colors.primary[400],
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 height: 240,
//                 // width: 300,
//                 borderRadius: 8,
//                 boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
//                 width: isXSmall ? "100%" : 300, // Responsive
//               }}
//             >
//               <DateCalendarFormProps />
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <Paper
//               elevation={0}
//               sx={{
//                 backgroundColor: colors.primary[400],
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 height: 240,
//                 // width: 300,
//                 borderRadius: 8,
//                 boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
//                 width: isXSmall ? "100%" : 300, // Responsive
//               }}
//             >
//               <ModuleDetails />
//             </Paper>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <TotalRegisteredStudentsCard
//               sx={{ backgroundColor: colors.primary[400] }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <YetToBeRegisteredCard />
//           </Grid>
//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <BatteryLevelCard />
//           </Grid>
//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <RealTimeAttendanceCard />
//           </Grid>
//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <AbsentCard />
//           </Grid>

//           <MyPieChart />

//           <Grid item xs={12} sm={6} md={4} lg={4}>
//             <BasicCard />
//           </Grid>
//         </Grid>
//       </Container>

//       {/* <Grid item xs={12} sm={6} md={4} lg={4}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: 2,
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: colors.primary[400],
//           }}
//         >
//           <RealTimeAttendance />
//         </Paper>
//       </Grid> */}
//       <Grid item xs={12} sm={6} md={4} lg={4}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: 2,
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: colors.primary[400],
//           }}
//         >
//           <DataTable />
//         </Paper>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;

import React from "react";
import {
  Box,
  useTheme,
  Container,
  Grid,
  Paper,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import ClockProps from "../../components/ClockProps";
import DateCalendarFormProps from "../../components/DateCalendarFormProps";
import ModuleDetails from "../../components/ModuleDetails";
import {
  AbsentCard,
  BatteryLevelCard,
  DeviceStatusCard,
  RealTimeAttendanceCard,
  TotalRegisteredStudentsCard,
  YetToBeRegisteredCard,
} from "../../components/Cards";
import MyPieChart from "../../components/PieChart";
import LowAttendanceWarningCard from "../../components/LowAttendanceWarningCard";
import DataTable from "../realtimeattendance";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const isXSmall = true; // or false, depending on your logic
  // const isXSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const isXSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const cardStyle = {
    backgroundColor: colors.primary[400],
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: { xs: 240, sm: 240, md: 240 },

    borderRadius: 8,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    // Full width on all screen sizes
    width: isXSmall ? "80%" : 300,

    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    ':hover': {
      transform: "translateY(-5px)", // Move the card up by 5px
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
    },
  };

  return (
    <Box
      sx={{
        ml: { sm: "00px" },
        mt: { xs: "80px", sm: "80px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Header
          title="Main Dashboard"
          subtitle="Welcome to real time dashboard"
        />
      </Box>

      {/* First Row: ClockProps, DateCalendarFormProps, ModuleDetails */}
      <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
        <Grid container spacing={3} columns={{ xs: 2, sm: 6, md: 12 }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} sx={cardStyle}>
              <ClockProps />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} sx={cardStyle}>
              <DateCalendarFormProps />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} sx={cardStyle}>
              <ModuleDetails />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Second Row: TotalRegisteredStudentsCard, YetToBeRegisteredCard, BatteryLevelCard */}
      <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
        <Grid container spacing={3} columns={{ xs: 2, sm: 6, md: 12 }}>
          <Grid item xs={12} sm={4}>
            <TotalRegisteredStudentsCard sx={cardStyle} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RealTimeAttendanceCard sx={cardStyle} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BatteryLevelCard sx={cardStyle} />
          </Grid>
        </Grid>
      </Container>

      {/* Third Row: RealTimeAttendanceCard, AbsentCard */}
      <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
        <Grid container spacing={3} columns={{ xs: 2, sm: 6, md: 12 }}>
          <Grid item xs={12} sm={4}>
            <YetToBeRegisteredCard sx={cardStyle} />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <AbsentCard sx={cardStyle} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DeviceStatusCard sx={cardStyle} />
          </Grid>
        </Grid>
      </Container>

      {/* Fourth Row: MyPieChart, LowAttendanceWarningCard */}
      <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
        <Grid container spacing={0} columns={{ xs: 2, sm: 6, md: 12 }}>
          <Grid item xs={12} sm={6}>
            <MyPieChart sx={cardStyle} />
          </Grid>
          <Grid sx={{ mt: 3, mb: 4 }} item xs={12} sm={6}>
            <LowAttendanceWarningCard sx={cardStyle} />
          </Grid>
        </Grid>
      </Container>

      {/* DataTable */}
      <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
        <Grid container spacing={2} columns={{ xs: 2, sm: 6 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} sx={{ p: 2, backgroundColor: "transparent" }}>
              <DataTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;



// import React, { useEffect, useState } from "react";
// // ... other imports

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const isXSmall = useMediaQuery(theme.breakpoints.up("sm"));

//   // Define state for each piece of data you want to display
//   const [clockData, setClockData] = useState(null);
//   const [moduleDetails, setModuleDetails] = useState(null);
//   // ... other states for different cards

//   // Fetch data for the clock when the component mounts
//   useEffect(() => {
//     const fetchClockData = async () => {
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/clock');
//       const data = await response.json();
//       setClockData(data);
//     };

//     fetchClockData();
//   }, []); // Empty dependency array means this effect runs once on mount

//   // Fetch data for module details
//   useEffect(() => {
//     const fetchModuleDetails = async () => {
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/module-details');
//       const data = await response.json();
//       setModuleDetails(data);
//     };

//     fetchModuleDetails();
//   }, []); // Empty dependency array means this effect runs once on mount

//   // ... other useEffect hooks for different cards

//   // Define a card style object for reuse
//   const cardStyle = {
//     backgroundColor: colors.primary[400],
//     p: 2,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: { xs: 240, sm: 240, md: 240 },
//     borderRadius: 8,
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
//     width: isXSmall ? "80%" : 300,
//   };

//   // ... rest of your component JSX

//   return (
//     <Box
//       sx={{
//         ml: { sm: "00px" },
//         mt: { xs: "80px", sm: "80px" },
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* ... rest of your component JSX */}
//       <Grid item xs={12} sm={4}>
//         <Paper elevation={0} sx={cardStyle}>
//           {/* Use the state variable to display data */}
//           <ClockProps time={clockData?.time} />
//         </Paper>
//       </Grid>
//       <Grid item xs={12} sm={4}>
//         <Paper elevation={0} sx={cardStyle}>
//           {/* Use the state variable to display data */}
//           <ModuleDetails details={moduleDetails} />
//         </Paper>
//       </Grid>
//       {/* ... other components that use state variables */}
//     </Box>
//   );
// };

// export default Dashboard;
