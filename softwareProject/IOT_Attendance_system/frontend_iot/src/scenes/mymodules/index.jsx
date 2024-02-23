import React from "react";

import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, useTheme,  useMediaQuery } from "@mui/material";
import ControlledTreeView from "./ControlledTreeView";

export default function MyModules() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box ml="0px" mt={"80px"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Available Courses" subtitle="Course Categories" />
      </Box>
      <Box sx={{ width: isSmallScreen ? "75%" : "100%" }}>
        <ControlledTreeView />
      </Box>
    </Box>
  );
}
