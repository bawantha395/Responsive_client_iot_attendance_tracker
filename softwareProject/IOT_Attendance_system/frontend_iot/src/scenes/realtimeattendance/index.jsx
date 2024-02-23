import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import BlockIcon from "@mui/icons-material/Block";
import SubHeader from "../../components/SubHeader";

const columns = [
  // { field: "id", headerName: "ID", type: "number", width: 100 },
  { field: "regno", headerName: "Reg NO", type: "string", width: 180 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "date", headerName: "Date", type: "string", width: 180 },
  { field: "time", headerName: "Time", type: "time", width: 180 },
  {
    field: "result",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      let icon;
      switch (params.value) {
        case "Approved":
          icon = <CheckCircleIcon style={{ color: "green" }} />;
          break;
        case "Error":
          icon = <ErrorIcon style={{ color: "red" }} />;
          break;
        case "Disable":
          icon = <BlockIcon style={{ color: "gray" }} />;
          break;
        default:
          icon = null;
      }
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          {icon}
          <span>{params.value}</span>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    regno: "EG/20##/####",
    name: "Name1",
    date: "20XX-XX-XX",
    time: "08.31.11",
    result: "Approved",
  },
  {
    id: 2,
    regno: "EG/20##/####",
    name: "Name2",
    date: "20XX-XX-XX",
    time: "08.31.31",
    result: "Approved",
  },
  {
    id: 3,
    regno: "EG/20##/####",
    name: "Name3",
    date: "20XX-XX-XX",
    time: "08.31.51",
    result: "Error",
  },
  {
    id: 4,
    regno: "EG/20##/####",
    name: "Name4",
    date: "20XX-XX-XX",
    time: "08.32.01",
    result: "Disable",
  },
  {
    id: 5,
    regno: "EG/20##/####",
    name: "Name5",
    date: "20XX-XX-XX",
    time: "08.32.15",
    result: "Approved",
  },
  {
    id: 6,
    regno: "EG/20##/####",
    name: "Name6",
    date: "20XX-XX-XX",
    time: "08.32.31",
    result: "Approved",
  },
  {
    id: 7,
    regno: "EG/20##/####",
    name: "Name7",
    date: "20XX-XX-XX",
    time: "08.32.50",
    result: "Approved",
  },
];

export default function DataTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      m="-15px"
      // width={1000}
      sx={{
        width: isSmallScreen ? "39%" : "98%",
        "& .MuiPaper-root": {
          border: "none",
          backgroundColor: colors.primary[400],
        },
        "& .MuiGrid-root": {
          border: "none",
          backgroundColor: colors.primary[400],
        },
      }}
    >
      <SubHeader>Recorded Attendance</SubHeader>
      <Box
        m="0px 0 0 0"
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
        <DataGrid
          sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", height: "80%" }}
          rows={rows}
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
