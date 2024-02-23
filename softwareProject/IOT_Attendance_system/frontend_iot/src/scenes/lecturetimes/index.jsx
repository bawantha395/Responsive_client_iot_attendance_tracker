import React from "react";

import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import LectureTimeSelectComponent from "./LectureTimeSelectComponent";

export default function LectureTimes() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box ml="0px" mt={"80px"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Lecture Times" subtitle="Choose  your Lecture Time" />
      </Box>
      <Box>
        <LectureTimeSelectComponent/>
      
      </Box>

    </Box>
  );
}
