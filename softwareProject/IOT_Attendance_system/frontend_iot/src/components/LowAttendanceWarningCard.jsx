import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { tokens } from "../theme";

export default function BasicCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        width: isSmallScreen ? "90%" : 360,
        position: "relative",
        // margin: "auto",
        mt: -5,
        mb: 3,
        //
      }}
    >
      <Card
        elevation={0}
        sx={{
          // minWidth: 255,
          height: 365,
          backgroundColor: colors.primary[400],
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          borderRadius: 6,
          mt: isSmallScreen ? 2 : 0,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
          ":hover": {
            transform: "translateY(-5px)", // Move the card up by 5px
            boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
          },
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: isSmallScreen ? 18 : 20,
              display: "flex",
              alignItems: "center",
              color: theme.palette.error.main,
            }}
            gutterBottom
          >
            <WarningIcon sx={{ mr: 1, fontSize: isSmallScreen ? 40 : 50 }} />{" "}
            Low Attendance Warning (80%)
          </Typography>
          <Typography variant="h5" component="div">
            Count : 6 students
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: isSmallScreen ? 1 : 2,
              color: theme.palette.error.main,
              fontSize: isSmallScreen ? 14 : "inherit",
            }}
          >
            EG/2020/4405
            <br />
            EG/2020/4406
            <br />
            EG/2020/4407
            <br />
            EG/2020/4408
            <br />
            EG/2020/4409
            <br />
            EG/2020/4410
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
