import React from 'react'
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import RegisteredStudentListComponent from './RegisteredStudentListComponent';

export default function RegisteredStudentsList() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box ml="0px" mt={"80px"}>
    {/* HEADER */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
  <Header title="Registered Students " subtitle="view full list" />
    </Box>
    <Box>
      <RegisteredStudentListComponent/>
      
    </Box>
  </Box>
  )
}
