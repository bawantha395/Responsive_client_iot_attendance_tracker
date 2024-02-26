import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, useTheme, CardMedia } from "@mui/material";
import { CardContent, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function ModuleList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Example images array with relative paths from the public folder
  const images = [
    "/assets/nfts/Nft1.png",
    "/assets/nfts/Nft2.png",
    "/assets/nfts/Nft3.png",
    "/assets/nfts/Nft4.png",
    "/assets/nfts/Nft5.png",
    "/assets/nfts/Nft6.png",
    // Add more image paths as needed
  ];

  return (
    <Box ml="0px" mt={"80px"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Module List" subtitle="Choose a module" />
      </Box>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={6}>
            {images.map((image, index) => (
              <Grid key={index} item>
                <Paper
                  elevation={0}
                  sx={{
                    height: 300,
                    width: 300,
                    backgroundColor: colors.primary[400],
                    padding: 2,
                    display: "flex",
                    flexDirection: "column", // Adjusted to stack content vertically
                    alignItems: "left", // Align items to the left horizontally
                    justifyContent: "left", // Align items to the left vertically

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
                    image={image} // Using the relative path
                    alt={`Module ${index + 1}`}
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
                      EE3302-Introduction to
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary">
                      Dr. Name
                    </Typography>
                    {/* <Typography variant="subtitle1" color="text.secondary">
                      Time: XXXX - YYYY
                    </Typography> */}
                    <Button
                      sx={{
                        backgroundColor: colors.greenAccent[700], // Updated colorAccent[700],
                        color: colors.grey[100],
                        fontSize: "12px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        marginBottom: "5px",
                        marginTop: "10px",
                        filter: "blur(0.5px)",

                        "&:hover": {
                          backgroundColor: colors.redAccent[700], // Change the background color on hover
                        },
                      }}
                      component={Link}
                      to="/registeredstudentslist"
                    >
                      View Registered Students
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: colors.greenAccent[700],
                        color: colors.grey[100],
                        fontSize: "12px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        filter: "blur(0.5px)",

                        "&:hover": {
                          backgroundColor: colors.redAccent[700], // Change the background color on hover
                        },
                      }}
                      component={Link}
                      to="/reports"
                    >
                      View Reports
                    </Button>
                  </CardContent>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Grid container>
              <Grid item></Grid>
            </Grid>
          </Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
}
