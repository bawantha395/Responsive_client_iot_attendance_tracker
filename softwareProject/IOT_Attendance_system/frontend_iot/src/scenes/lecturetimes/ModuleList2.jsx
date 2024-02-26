// import React from "react";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";
// import { Box, useTheme, CardMedia } from "@mui/material";
// import { CardContent, Typography, Button } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import { Link } from "react-router-dom";

// export default function ModuleList2() {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   // Example images array with relative paths from the public folder
//   const images = [
//     "/assets/nfts/Nft1.png",
//     "/assets/nfts/Nft2.png",
//     "/assets/nfts/Nft3.png",
//     "/assets/nfts/Nft4.png",
//     "/assets/nfts/Nft5.png",
//     "/assets/nfts/Nft6.png",
//     // Add more image paths as needed
//   ];

//   return (
//     <Box ml="0px" mt={"80px"}>
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="Module List" subtitle="Choose a module" />
//       </Box>
//       <Grid sx={{ flexGrow: 1 }} container spacing={2}>
//         <Grid item xs={12}>
//           <Grid container justifyContent="center" spacing={6}>
//             {images.map((image, index) => (
//               <Grid key={index} item>
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     height: 280,
//                     width: 300,
//                     backgroundColor: colors.primary[400],
//                     padding: 2,
//                     display: "flex",
//                     flexDirection: "column", // Adjusted to stack content vertically
//                     alignItems: "left", // Align items to the left horizontally
//                     justifyContent: "left", // Align items to the left vertically

//                     borderRadius: 4,
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="100"
//                     image={image} // Using the relative path
//                     alt={`Module ${index + 1}`}
//                   />
//                   <CardContent
//                     sx={{
//                       backgroundColor: colors.primary[400],
//                       p: 2,
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "left",
//                       justifyContent: "left",
//                       height: { xs: 240, sm: 240, md: 240 },
//                       padding: 2,
//                     }}
//                   >
//                     <Typography variant="h5" component="h2">
//                       EE3302-Introduction to
//                     </Typography>

//                     <Typography variant="h5" component="h2">
//                       Dr. Name
//                     </Typography>
//                     {/* <Typography variant="subtitle1" color="text.secondary">
//                       Time: XXXX - YYYY
//                     </Typography> */}
//                     <Button
//                       sx={{
//                         backgroundColor: colors.greenAccent[700], // Updated colorAccent[700],
//                         color: colors.grey[100],
//                         fontSize: "12px",
//                         fontWeight: "bold",
//                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                         marginBottom: "5px",

//                         marginTop: "45px",
//                         filter: "blur(0.5px)",

//                         "&:hover": {
//                           backgroundColor: colors.redAccent[700], // Change the background color on hover
//                         },
//                       }}
//                       component={Link}
//                       to="/dashboard"
//                     >
//                       View Dashboard
//                     </Button>
//                   </CardContent>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//         {/* <Grid item xs={12}>
//           <Paper sx={{ p: 2 }}>
//             <Grid container>
//               <Grid item></Grid>
//             </Grid>
//           </Paper>
//         </Grid> */}
//       </Grid>
//     </Box>
//   );
// }

// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Typography, Box } from "@mui/material";

// const ModuleList2 = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const department = searchParams.get("department");
//   const semester = searchParams.get("semester");

//   // You would fetch the modules for the selected department and semester here
//   // For this example, we'll just display the department and semester

//   return (
//     <Box marginTop={20}>

//       <Typography>Modules for {department}</Typography>
//       <Typography>{semester}</Typography>
//       {/* Display the list of modules here */}
//       {/* This could be a list, table, or any other component that represents your modules */}
//     </Box>
//   );
// };

// export default ModuleList2;

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Grid, Paper, Typography, Button, CardMedia, CardContent, useTheme } from "@mui/material";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";
// import { Link } from "react-router-dom";

// export default function ModuleList2() {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const department = searchParams.get("department");
//   const semester = searchParams.get("semester");
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const [modules, setModules] = useState([]);

//   useEffect(() => {
//     // Fetch the modules from the backend using the department and semester
//     // This is a placeholder for your actual fetch call
//     const fetchModules = async () => {
//       // Replace with your actual backend endpoint
//       const response = await fetch(`/api/modules?department=${encodeURIComponent(department)}&semester=${encodeURIComponent(semester)}`);
//       const data = await response.json();
//       setModules(data.modules);
//     };

//     fetchModules();
//   }, [department, semester]);

//   return (
//     <Box ml="0px" mt={"80px"}>
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title={`Modules for ${department}`} subtitle={`${semester}`} />
//       </Box>
//       <Grid sx={{ flexGrow: 1 }} container spacing={2}>
//         <Grid item xs={12}>
//           <Grid container justifyContent="center" spacing={6}>
//             {modules.map((module, index) => (
//               <Grid key={index} item>
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     height: 280,
//                     width: 300,
//                     backgroundColor: colors.primary[400],
//                     padding: 2,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "left",
//                     justifyContent: "left",
//                     borderRadius: 4,
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="100"
//                     image={module.image} // Assuming 'image' is a property of the module object
//                     alt={module.name} // Assuming 'name' is a property of the module object
//                   />
//                   <CardContent
//                     sx={{
//                       backgroundColor: colors.primary[400],
//                       p: 2,
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "left",
//                       justifyContent: "left",
//                       height: { xs: 240, sm: 240, md: 240 },
//                       padding: 2,
//                     }}
//                   >
//                     <Typography variant="h5" component="h2">
//                       {module.name} {/* Assuming 'name' is a property of the module object */}
//                     </Typography>
//                     <Typography variant="h5" component="h2">
//                       {module.instructor} {/* Assuming 'instructor' is a property of the module object */}
//                     </Typography>
//                     <Button
//                       sx={{
//                         backgroundColor: colors.greenAccent[700],
//                         color: colors.grey[100],
//                         fontSize: "12px",
//                         fontWeight: "bold",
//                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                         marginBottom: "5px",
//                         marginTop: "45px",
//                         filter: "blur(0.5px)",
//                         "&:hover": {
//                           backgroundColor: colors.redAccent[700],
//                         },
//                       }}
//                       component={Link}
//                       to="/dashboard" // Replace with the actual link to the module's dashboard
//                     >
//                       View Dashboard
//                     </Button>
//                   </CardContent>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import React from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  CardMedia,
  CardContent,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";


// Dummy data for the modules of each department
const departmentsModules = {
  "Electrical and Information Engineering": [
    // Add 6 dummy modules for the Electrical and Information Engineering department
    // ...
    {
      id: 1,
      name: "EE3302 - Introduction to Electrical Engineering",
      instructor: "Dr. John Doe",
      image: "/assets/nfts/Nft1.png",
    },
    {
      id: 2,
      name: "EE3302 - Introduction to Electrical Engineering",
      instructor: "Dr. John Doe",
      image: "/assets/nfts/Nft2.png",
    },
    {
      id: 3,
      name: "EE3302 - Introduction to Electrical Engineering",
      instructor: "Dr. John Doe",
      image: "/assets/nfts/Nft3.png",
    },
    {
      id: 4,
      name: "EE3302 - Introduction to Electrical Engineering",
      instructor: "Dr. John Doe",
      image: "/assets/nfts/Nft4.png",
    },
    {
      id: 5,
      name: "EE3302 - Introduction to Electrical Engineering",
      instructor: "Dr. John Doe",
      image: "/assets/nfts/Nft5.png",
    },
    {
      id: 6,
      name: "EE3302 - Introduction to Electrical Engineering",
      instructor: "Dr. John Doe",
      image: "/assets/nfts/Nft6.png",
    },
  ],
  "Civil and Environmental Engineering": [
    // Add 6 dummy modules for the Civil and Environmental Engineering department
    // ...
    {
      id: 1,
      name: "CE2201 - Structural Analysis",
      instructor: "Dr. Jane Smith",
      image: "/assets/nfts/Nft1.png",
    },
    {
      id: 2,
      name: "CE2201 - Structural Analysis",
      instructor: "Dr. Jane Smith",
      image: "/assets/nfts/Nft2.png",
    },
    {
      id: 3,
      name: "CE2201 - Structural Analysis",
      instructor: "Dr. Jane Smith",
      image: "/assets/nfts/Nft3.png",
    },
  ],
  "Mechanical and Manufacturing Engineering": [
    // Add 6 dummy modules for the Mechanical and Manufacturing Engineering department
    // ...
    {
      id: 1,
      name: "CE2201 - Structural Analysis",
      instructor: "Dr. Jane Smith",
      image: "/assets/nfts/Nft1.png",
    },
  ],
  "Interdisciplinary Studies": [
    // Add 6 dummy modules for the Interdisciplinary Studies department
    // ...
  ],
  "Marine Engineering and Naval Architecture": [
    // Add 6 dummy modules for the Marine Engineering and Naval Architecture department
    // ...
  ],
};

export default function ModuleList2() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const department = searchParams.get("department");
  const semester = searchParams.get("semester");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Get the modules for the selected department
  const modules = departmentsModules[department] || [];

  return (
    <Box ml="0px" mt={"80px"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={`Modules for ${department}`} subtitle={`${semester}`} />
      </Box>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={6}>
            {modules.map((module, index) => (
              <Grid key={index} item>
                <Paper
                  elevation={0}
                  sx={{
                    height: 300,
                    width: 300,
                    backgroundColor: colors.primary[400],
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "left",
                    borderRadius: 4,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    ':hover': {
      transform: "translateY(-5px)", // Move the card up by 5px
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100"
                    image={module.image}
                    alt={module.name}
                  />
                  <CardContent
                    sx={{
                      backgroundColor: colors.primary[400],
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      justifyContent: "left",
                      height: { xs: 240, sm: 240, md: 240 },
                      padding: 2,
                    }}
                  >
                    <Typography variant="h5" component="h2">
                      {module.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary"  >
                      {module.instructor}
                    </Typography>
                    <Button
                      sx={{
                        backgroundColor: colors.greenAccent[700],
                        color: colors.grey[100],
                        fontSize: "12px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        marginBottom: "5px",
                        marginTop: "25px",
                        filter: "blur(0.5px)",
                        "&:hover": {
                          backgroundColor: colors.redAccent[700],
                        },
                      }}
                      component={Link}
                      to={`/dashboard`}
                      // to={`/dashboard/${module.id}`} // Replace with the actual link to the module's dashboard
                    >
                      View Dashboard
                    </Button>
                  </CardContent>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
