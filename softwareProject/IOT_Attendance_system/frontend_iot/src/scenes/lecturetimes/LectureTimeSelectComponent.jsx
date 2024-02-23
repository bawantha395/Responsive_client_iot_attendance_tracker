import React, { useState } from "react";

import { tokens } from "../../theme";
import { Button, Box, useTheme, useMediaQuery } from "@mui/material";

import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import SubHeader from "../../components/SubHeader";
import { useNavigate } from "react-router-dom";
export default function LectureTimeSelectComponent() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box ml="20px" mt={"00px"}>
      <Box sx={{ width: isSmallScreen ? "75%" : "100%" }}>
        <SubHeader>Select Date and Time for particular lecture</SubHeader>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{
                marginRight: "80px",
                marginTop: "25px",
                marginLeft: "30px",
                marginBottom: "5px",
              }}
              label="Select Date"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              renderInput={(params) => (
                <TextField {...params} sx={{ margin: "16px" }} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              sx={{
                marginRight: "80px",
                marginTop: "25px",
                marginLeft: "30px",
                marginBottom: "5px",
              }}
              value={selectedStartTime}
              onChange={(time) => setSelectedStartTime(time)}
              label="Start time"
              inputProps={{ step: 1800 }}
              renderInput={(params) => (
                <TextField {...params} sx={{ margin: "16px" }} />
              )}
            />

            <TimePicker
              sx={{
                marginRight: "80px",
                marginTop: "25px",
                marginLeft: "30px",
                marginBottom: "5px",
              }}
              value={selectedEndTime}
              onChange={(time) => setSelectedEndTime(time)} // Corrected this line
              label="End time"
              inputProps={{ step: 1800 }}
              renderInput={(params) => (
                <TextField {...params} sx={{ margin: "16px" }} />
              )}
            />
          </LocalizationProvider>
        </Box>
        {/* ... other component code remains the same */}
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              filter: "blur(0.5px)",
              marginTop: "50px",
              marginLeft: "30px",
              marginRight: "0px",
              marginBottom: "10px",

              "&:hover": {
                backgroundColor: colors.redAccent[700], // Change the background color on hover
              },
            }}
            onClick={() => {
              if (!selectedDate || !selectedStartTime || !selectedEndTime) {
                alert("Please select a date, starting time, and ending time.");
                return;
              }

              const formattedDate = selectedDate.format("YYYY-MM-DD");
              const formattedStartTime = selectedStartTime.format("HH:mm");
              const formattedEndTime = selectedEndTime.format("HH:mm");

              // Validate start and end times
              const startTime = selectedStartTime.toDate();
              const endTime = selectedEndTime.toDate();
              const startTimeHours = startTime.getHours();
              const endTimeHours = endTime.getHours();

              if (
                startTimeHours < 4 ||
                startTimeHours >= 22 ||
                endTimeHours < 4 ||
                endTimeHours >= 22
              ) {
                alert(
                  "Start time and end time should be between 4:00 am and 10:00 pm."
                );
                return;
              }

              if (endTime < startTime) {
                alert(
                  "The ending time must be greater than the starting time."
                );
                return;
              }

              navigate(
                `/courselist?date=${formattedDate}&startTime=${formattedStartTime}&endTime=${formattedEndTime}`
              );
            }}
          >
            Go to Course List
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              filter: "blur(0.5px)",
              marginTop: "00px",
              marginLeft: "30px",
              marginRight: "0px",
              marginBottom: "50px",

              "&:hover": {
                backgroundColor: colors.redAccent[700], // Change the background color on hover
              },
            }}
            onClick={() => {
              setSelectedDate("");
              setSelectedStartTime("");
              setSelectedEndTime("");
            }}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
