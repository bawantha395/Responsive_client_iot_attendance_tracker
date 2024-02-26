import React, { useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme, Box, useMediaQuery, TextField, Button ,Snackbar, Alert } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import BlockIcon from "@mui/icons-material/Block";
import SubHeader from "../../components/SubHeader";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

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
    regno: "EG/2010/001",
    name: "John Doe",
    date: "2024-02-18",
    time: "08:30",
    result: "Approved",
  },
  {
    id: 2,
    regno: "EG/2010/002",
    name: "Jane Smith",
    date: "2024-02-18",
    time: "08:45",
    result: "Error",
  },
  {
    id: 3,
    regno: "EG/2010/003",
    name: "Alice Johnson",
    date: "2024-02-18",
    time: "09:00",
    result: "Approved",
  },
  {
    id: 4,
    regno: "EG/2010/004",
    name: "Bob Brown",
    date: "2024-02-18",
    time: "09:15",
    result: "Disable",
  },
  {
    id: 5,
    regno: "EG/2010/005",
    name: "Eve Williams",
    date: "2024-02-18",
    time: "09:30",
    result: "Approved",
  },
  {
    id: 6,
    regno: "EG/2010/006",
    name: "Michael Davis",
    date: "2024-02-18",
    time: "09:45",
    result: "Approved",
  },
  {
    id: 7,
    regno: "EG/2010/007",
    name: "Emily Wilson",
    date: "2024-02-18",
    time: "10:00",
    result: "Approved",
  },
  {
    id: 8,
    regno: "EG/2010/008",
    name: "David Johnson",
    date: "2024-02-18",
    time: "10:15",
    result: "Error",
  },
  {
    id: 9,
    regno: "EG/2010/009",
    name: "Sarah Adams",
    date: "2024-02-18",
    time: "10:30",
    result: "Approved",
  },
  {
    id: 10,
    regno: "EG/2010/010",
    name: "Mark Wilson",
    date: "2024-02-18",
    time: "10:45",
    result: "Disable",
  },
  {
    id: 11,
    regno: "EG/2010/011",
    name: "Laura Taylor",
    date: "2024-02-18",
    time: "11:00",
    result: "Approved",
  },
  {
    id: 12,
    regno: "EG/2010/012",
    name: "Peter Martinez",
    date: "2024-02-18",
    time: "11:15",
    result: "Approved",
  },
  {
    id: 13,
    regno: "EG/2010/013",
    name: "Rachel Brown",
    date: "2024-02-18",
    time: "11:30",
    result: "Error",
  },
  {
    id: 14,
    regno: "EG/2010/014",
    name: "Andrew Miller",
    date: "2024-02-18",
    time: "11:45",
    result: "Approved",
  },
  {
    id: 15,
    regno: "EG/2010/015",
    name: "Olivia Johnson",
    date: "2024-02-18",
    time: "12:00",
    result: "Approved",
  },
  {
    id: 16,
    regno: "EG/2010/016",
    name: "Christopher Wilson",
    date: "2024-02-18",
    time: "12:15",
    result: "Disable",
  },
  {
    id: 17,
    regno: "EG/2010/017",
    name: "Emma Taylor",
    date: "2024-02-18",
    time: "12:30",
    result: "Approved",
  },
  {
    id: 18,
    regno: "EG/2010/018",
    name: "Daniel Clark",
    date: "2024-02-18",
    time: "12:45",
    result: "Approved",
  },
  {
    id: 19,
    regno: "EG/2010/019",
    name: "Hannah Wilson",
    date: "2024-02-18",
    time: "13:00",
    result: "Error",
  },
  {
    id: 20,
    regno: "EG/2010/020",
    name: "William Johnson",
    date: "2024-02-18",
    time: "13:15",
    result: "Approved",
  },
];

export default function ReportComponent() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const csvLink = useRef(null);

  const handleClear = () => {
    setSelectedDate("");
    setSelectedStartTime("");
    setSelectedEndTime("");
  };

  const handleFilter = () => {
    // Format the date for comparison
    const formattedDate = selectedDate ? selectedDate.format("YYYY-MM-DD") : "";

    // Format the times for comparison
    const formattedStartTime = selectedStartTime
      ? selectedStartTime.format("HH:mm")
      : "";
    const formattedEndTime = selectedEndTime
      ? selectedEndTime.format("HH:mm")
      : "";

    // Check if end time is greater than start time
    if (formattedEndTime <= formattedStartTime) {
      setSnackbarMessage("End time must be greater than start time");
      setSnackbarOpen(true);
      return;
    }

    setIsFiltering(true);
    const filteredData = rows.filter((row) => {
      return (
        row.date === formattedDate &&
        row.time >= formattedStartTime &&
        row.time <= formattedEndTime &&
        row.result === "Approved"
      );
    });
    setFilteredRows(filteredData);
    setIsFiltering(false);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const rowsPerPage = 25;
    const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * rowsPerPage;
      const endIndex = Math.min(startIndex + rowsPerPage, filteredRows.length);
      const pageRows = filteredRows.slice(startIndex, endIndex);

      const tableRows = pageRows.map((row) => {
        return [row.regno, row.name, row.date, row.time, row.result];
      });

      doc.autoTable({
        head: [["Reg NO", "Name", "Date", "Time", "Status"]],
        body: tableRows,
        startY: i === 0 ? 10 : 0,
      });

      if (i < totalPages - 1) {
        doc.addPage();
      }
    }

    doc.setFontSize(12);
    doc.text(
      `Attendance Count: ${filteredRows.length}`,
      14,
      doc.internal.pageSize.height - 10
    );

    doc.save("attendance_report.pdf");
  };

  const handleDownloadCSV = () => {
    const csvData = [
      {
        "Reg NO": "Reg NO",
        Name: "Name",
        Date: "Date",
        Time: "Time",
        Status: "Status",
      },
      ...filteredRows.map((row) => ({
        "Reg NO": row.regno,
        Name: row.name,
        Date: row.date,
        Time: row.time,
        Status: row.result,
      })),
      {
        "Reg NO": "",
        Name: "",
        Date: "",
        Time: "",
        Status: `Attendance Count: ${filteredRows.length}`,
      },
    ];

    const csvContent = csvData
      .map((row) => Object.values(row).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "attendance_report.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box ml="25px" sx={{ width: isSmallScreen ? "70%" : "90%" }}>
      <SubHeader>Attendance</SubHeader>
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
        <Box style={{ marginBottom: "16px" }}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      sx={{
        marginRight: "30px",
        marginTop: "15px",
        marginLeft: "30px",
        marginBottom: "5px",
      }}
      label="Select Date"
      value={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      slotProps={{ textField: { sx: { margin: "16px" } } }}
    />
  </LocalizationProvider>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TimePicker
      sx={{
        marginRight: "30px",
        marginTop: "15px",
        marginLeft: "30px",
        marginBottom: "5px",
      }}
      value={selectedStartTime}
      onChange={(time) => setSelectedStartTime(time)}
      label="Start time"
      inputProps={{ step: 1800 }}
      slotProps={{ textField: { sx: { margin: "16px" } } }}
    />
    <TimePicker
      sx={{
        marginRight: "30px",
        marginTop: "15px",
        marginLeft: "30px",
        marginBottom: "5px",
      }}
      value={selectedEndTime}
      onChange={(time) => setSelectedEndTime(time)}
      label="End time"
      inputProps={{ step: 1800 }}
      slotProps={{ textField: { sx: { margin: "16px" } } }}
    />
  </LocalizationProvider>
</Box>

        <Box>
          <Button
            onClick={handleClear}
            variant="contained"
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              filter: "blur(0.5px)",
              marginRight: "8px",
              marginTop: "5px",
              marginLeft: "30px",
              marginBottom: "15px",

              "&:hover": {
                backgroundColor: colors.redAccent[700], // Change the background color on hover
              },
            }}
          >
            Clear
          </Button>
          <Button
            onClick={handleFilter}
            variant="contained"
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              filter: "blur(0.5px)",
              marginRight: "8px",
              marginTop: "5px",
              marginLeft: "30px",
              marginBottom: "15px",

              "&:hover": {
                backgroundColor: colors.redAccent[700], // Change the background color on hover
              },
            }}
          >
            {isFiltering ? "Filtering..." : "Filter"}
          </Button>
          <Button
            onClick={handleDownloadPDF}
            variant="contained"
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              filter: "blur(0.5px)",
              marginRight: "8px",
              marginTop: "5px",
              marginLeft: "30px",
              marginBottom: "15px",

              "&:hover": {
                backgroundColor: colors.redAccent[700], // Change the background color on hover
              },
            }}
          >
            Download PDF
          </Button>
          <Button
            onClick={handleDownloadCSV}
            variant="contained"
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              filter: "blur(0.5px)",
              marginRight: "8px",
              marginTop: "5px",
              marginLeft: "30px",
              marginBottom: "15px",

              "&:hover": {
                backgroundColor: colors.redAccent[700], // Change the background color on hover
              },
            }}
          >
            Download CSV
          </Button>
          <CSVLink
            data={[]}
            filename={"filtered_data.csv"}
            ref={csvLink}
            style={{ display: "none" }}
          >
            Download CSV
          </CSVLink>
        </Box>
        {selectedDate ? ( // Render DataGrid only if a date is selected
  filteredRows.length > 0 ? (
    <DataGrid
      sx={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        height: "80%",
      }}
      rows={filteredRows}
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
  ) : (
    <Box>No matching data found for the selected date.</Box>
  )
) : (
  <Box>No date selected</Box>
)}

<Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
