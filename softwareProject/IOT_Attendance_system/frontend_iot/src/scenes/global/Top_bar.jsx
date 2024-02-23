import { Box, IconButton, useTheme, Divider } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
// Import useNavigate from react-router-dom

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import React, { useState, useEffect } from "react";

import RouterBreadcrumbs from "./Breadcrumbs";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    // Redirect to logout URL after logout
    window.location.href = "http://lms.eng.ruh.ac.lk/login/index.php";
  };

  return (
    <Box
      display="flex"
      bgcolor={colors.primary[400]}
      justifyContent="space-between"
      p={2}
      height={64}
      sx={{
        paddingTop: "20px",
        position: "fixed", // Fix the position of the topbar
        top: 0, // Align the topbar to the top of the viewport
        left: 0, // Align the topbar to the left of the viewport
        right: 0, // Align the topbar to the right of the viewport
        zIndex: 1000, // Ensure the topbar is above other content

        boxShadow:
          theme.palette.mode === "light"
            ? "0px 4px 6px rgba(0, 0, 0, 0.1)" // Add shadow effect for light mode
            : "none",
        transition: "background-color 0.3s, box-shadow 0.3s", // Transition effect for color mode toggle
        backdropFilter: scrolled ? "blur(20px)" : "none", // Apply a blur effect to the background
        background: scrolled
          ? `linear-gradient(to bottom, ${colors.primary[400]}aa, transparent)` // Adjust the gradient as needed
          : colors.primary[400],
      }}
    >
      <Box />
      <RouterBreadcrumbs />

      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ mx: 1, "&:hover": { bgcolor: "action.hover" } }}
          title={
            theme.palette.mode === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
        <IconButton
          sx={{ mx: 1, "&:hover": { bgcolor: "action.hover" } }}
          title="Notifications"
        >
          <NotificationsOutlinedIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
        <IconButton
          sx={{ mx: 1, "&:hover": { bgcolor: "action.hover" } }}
          title="Settings"
        >
          <SettingsOutlinedIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
        {/* Use onClick event to handle logout */}
        <IconButton
          onClick={handleLogout}
          sx={{ mx: 1, "&:hover": { bgcolor: "action.hover" } }}
          title="Logout"
        >
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
