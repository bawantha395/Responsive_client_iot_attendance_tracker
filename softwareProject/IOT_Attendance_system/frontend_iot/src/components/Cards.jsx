import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import BatteryIcon from "@mui/icons-material/BatteryFull";
import AttendanceIcon from "@mui/icons-material/EventAvailable";
import AbsentIcon from "@mui/icons-material/EventBusy";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import WifiIcon from "@mui/icons-material/Wifi"; // Icon for connected status
import WifiOffIcon from "@mui/icons-material/WifiOff"; // Icon for not connected status

// Define the fetch functions
const fetchTotalRegisteredStudentsCount = () => {
  // Simulate fetching data from an API or another source
  return 150; // Replace with your actual data-fetching logic
};

const fetchYetToBeRegisteredCount = () => {
  // Simulate fetching data from an API or another source
  return 50; // Replace with your actual data-fetching logic
};

const fetchBatteryLevel = () => {
  // Simulate fetching data from an API or another source
  return 80; // Replace with your actual data-fetching logic
};

const fetchRealTimeAttendance = () => {
  // Simulate fetching data from an API or another source
  return 140; // Replace with your actual data-fetching logic
};

const fetchAbsentCount = () => {
  // Simulate fetching data from an API or another source
  return 10; // Replace with your actual data-fetching logic
};

const fetchDeviceStatus = () => {
  // Simulate fetching data from an API or another source
  return true; // Replace with your actual data-fetching logic (true for connected, false for not connected)
};

export const TotalRegisteredStudentsCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const totalRegisteredStudentsCount = fetchTotalRegisteredStudentsCount();
  // const isXSmall = true; // or false, depending on your logic
  const isXSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const cardStyles = {
    backgroundColor: colors.primary[400],
    padding: 2,
    display: "flex",
    flexDirection: "column", // Adjusted to stack content vertically
    alignItems: "left", // Align items to the left horizontally
    justifyContent: "left", // Align items to the left vertically
    height: 80, // Adjusted to accommodate two lines of text and an icon
    // width: 300,
    borderRadius: 4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginTop: 0.5,
    width: isXSmall ? "80%" : 300,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    ':hover': {
      transform: "translateY(-5px)", // Move the card up by 5px
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
    },
  };

  return (
    <Card elevation={0} sx={cardStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <PeopleIcon color="neutral" fontSize="large" /> {/* Icon */}
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6">Registered Students</Typography>
          <Typography variant="h8">
            Count: {totalRegisteredStudentsCount}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export const YetToBeRegisteredCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const yetToBeRegisteredCount = fetchYetToBeRegisteredCount();
  // const isXSmall = true; // or false, depending on your logic
  const isXSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const cardStyles = {
    backgroundColor: colors.primary[400],
    padding: 2,
    display: "flex",
    flexDirection: "column", // Adjusted to stack content vertically
    alignItems: "left", // Align items to the left horizontally
    justifyContent: "left", // Align items to the left vertically
    height: 80, // Adjusted to accommodate two lines of text and an icon
    // width: 300,
    borderRadius: 4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginTop: 0.5,
    width: isXSmall ? "80%" : 300,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    ':hover': {
      transform: "translateY(-5px)", // Move the card up by 5px
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
    },
  };

  return (
    <Card elevation={0} sx={cardStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <PeopleIcon color="neutral" fontSize="large" /> {/* Icon */}
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6">Yet to be Registered</Typography>
          <Typography variant="h8">Count: {yetToBeRegisteredCount}</Typography>
        </div>
      </div>
    </Card>
  );
};

export const BatteryLevelCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const batteryLevel = fetchBatteryLevel();
  // const isXSmall = true; // or false, depending on your logic
  const isXSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const cardStyles = {
    backgroundColor: colors.primary[400],
    padding: 2,
    display: "flex",
    flexDirection: "column", // Adjusted to stack content vertically
    alignItems: "left", // Align items to the left horizontally
    justifyContent: "left", // Align items to the left vertically
    height: 80, // Adjusted to accommodate two lines of text and an icon
    // width: 300,
    borderRadius: 4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginTop: 0.5,
    width: isXSmall ? "80%" : 300,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    ':hover': {
      transform: "translateY(-5px)", // Move the card up by 5px
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
    },
  };

  return (
    <Card elevation={0} sx={cardStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <BatteryIcon color="neutral" fontSize="large" /> {/* Icon */}
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6">Battery Level</Typography>
          <Typography variant="h8">Level: {batteryLevel}%</Typography>
        </div>
      </div>
    </Card>
  );
};

export const RealTimeAttendanceCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const realTimeAttendance = fetchRealTimeAttendance();
  // const isXSmall = true; // or false, depending on your logic
  const isXSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const cardStyles = {
    backgroundColor: colors.primary[400],
    padding: 2,
    display: "flex",
    flexDirection: "column", // Adjusted to stack content vertically
    alignItems: "left", // Align items to the left horizontally
    justifyContent: "left", // Align items to the left vertically
    height: 80, // Adjusted to accommodate two lines of text and an icon
    // width: 300,
    borderRadius: 4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginTop: 0.5,
    width: isXSmall ? "80%" : 300,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    ':hover': {
      transform: "translateY(-5px)", // Move the card up by 5px
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
    },
  };

  return (
    <Card elevation={0} sx={cardStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AttendanceIcon color="neutral" fontSize="large" /> {/* Icon */}
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6">Real Time Attendance</Typography>
          <Typography variant="h8">Count: {realTimeAttendance}</Typography>
        </div>
      </div>
    </Card>
  );
};

export const AbsentCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const absentCount = fetchAbsentCount();
  // const isXSmall = true; // or false, depending on your logic
  const isXSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const cardStyles = {
    backgroundColor: colors.primary[400],
    padding: 2,
    display: "flex",
    flexDirection: "column", // Adjusted to stack content vertically
    alignItems: "left", // Align items to the left horizontally
    justifyContent: "left", // Align items to the left vertically
    height: 80, // Adjusted to accommodate two lines of text and an icon
    // width: 300,
    borderRadius: 4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginTop: 0.5,
    width: isXSmall ? "80%" : 300,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    ':hover': {
      transform: "translateY(-5px)", // Move the card up by 5px
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
    },
  };

  return (
    <Card elevation={0} sx={cardStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AbsentIcon color="neutral" fontSize="large" /> {/* Icon */}
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6">Absent</Typography>
          <Typography variant="h8">Count: {absentCount}</Typography>
        </div>
      </div>
    </Card>
  );
};

export const DeviceStatusCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDeviceConnected = fetchDeviceStatus();
  const isXSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const cardStyles = {
    backgroundColor: colors.primary[400],
    padding: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "left",
    height: 80,
    borderRadius: 4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginTop: 0.5,
    width: isXSmall ? "80%" : 300,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
    ':hover': {
      transform: "translateY(-5px)", // Move the card up by 5px
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
    },
  };

  return (
    <Card elevation={0} sx={cardStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isDeviceConnected ? (
          <WifiIcon color="success" fontSize="large" />
        ) : (
          <WifiOffIcon color="error" fontSize="large" />
        )}
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6">Device Status</Typography>
          <Typography variant="h8">
            {isDeviceConnected ? "Connected" : "Not Connected"}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
