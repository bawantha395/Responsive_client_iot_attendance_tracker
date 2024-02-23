import React from "react";
import { useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";

import Header from "../../components/Header";
import ControlledTreeView2 from "./ControlledTreeView2";

const MyModules2 = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedDate = searchParams.get("date");
  const selectedStartTime = searchParams.get("startTime");
  const selectedEndTime = searchParams.get("endTime");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box ml="0px" mt={"80px"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Available Courses" subtitle="Course Categories" />
      </Box>

      <Box>
        <Typography>Date: {selectedDate}</Typography>
        <Typography>Start Time: {selectedStartTime}</Typography>

        <Typography>End Time: {selectedEndTime}</Typography>
      </Box>
      <Box sx={{ width: isSmallScreen ? "75%" : "100%" }}>
        <ControlledTreeView2 />
      </Box>
    </Box>
  );
};

export default MyModules2;
