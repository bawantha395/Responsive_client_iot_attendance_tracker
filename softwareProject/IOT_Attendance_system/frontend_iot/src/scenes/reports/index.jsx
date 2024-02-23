import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";

import ReportComponent from "./ReportComponent";

export default function Reports() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box ml="0px" mt={"80px"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Reports" subtitle="Download Reports" />
      </Box>
      <Box>
        
        <ReportComponent/>
      </Box>
    </Box>
  );
}