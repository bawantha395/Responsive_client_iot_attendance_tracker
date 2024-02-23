import React, { useState, useRef } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme, useMediaQuery } from "@mui/material";
import SubHeader from "../../components/SubHeader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const columns = [
  { field: "id", headerName: "ID", type: "number", width: 50 },
  { field: "newColumn", headerName: "", width: 50 },
  { field: "regno", headerName: "Reg NO", type: "string", width: 280 },
  { field: "name", headerName: "Student Name", width: 300 },

  {
    field: "yesno",
    headerName: "Is Registered",
    width: 200,
    renderCell: (params) =>
      params.value === "Yes" ? (
        <>
        <CheckCircleIcon style={{ color: "green" }} />
        <span style={{ marginLeft: 5 }}>Yes</span>
        </>
      ) : (
        <>
          <CancelIcon color="error" />
          <span style={{ marginLeft: 5 }}>No</span>
        </>
      ),
},
];

const rows = [];

for (let i = 1; i <= 200; i++) {
  rows.push({
    id: i,
    name: `Name ${i}`,
    regno: `EG/2020/${i.toString().padStart(3, "0")}`,
    yesno: Math.random() < 0.5 ? "Yes" : "No",
  });
}

export default function RegisteredStudentListComponent() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [filteredRows] = useState([]);

  return (
    <Box ml="25px" sx={{ width: isSmallScreen ? "70%" : "90%" }}>
      <SubHeader>All Registered Students</SubHeader>
      <Box
        ml="0px 00 0 0"
        height="100vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Box style={{ marginBottom: "16px" }}></Box>
        <Box></Box>
        <DataGrid
          sx={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            height: "80%",
          }}
          rows={filteredRows.length > 0 ? filteredRows : rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            },
          }}
          pageSizeOptions={[25, 50, 100]}
          disableSelectionOnClick
          style={{
            backgroundColor: colors.primary[400],
            height: "100%",
            width: "100%",
            float: "right",
          }}
        />
      </Box>
    </Box>
  );
}
