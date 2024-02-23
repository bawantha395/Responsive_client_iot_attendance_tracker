import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme"; // Update the import path as needed
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      background: `${tokens(theme.palette.mode).primary[400]} !important`,
      boxShadow:
        theme.palette.mode === "light"
          ? "0px 4px 6px rgba(0, 0, 0, 0.4)"
          : "0px 4px 6px rgba(0, 0, 0, 0.4)", // Apply light mode shadow for dark mode
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      background: `${tokens(theme.palette.mode).primary[400]} !important`,
      boxShadow:
        theme.palette.mode === "light"
          ? "0px 4px 6px rgba(0, 0, 0, 0.4)"
          : "0px 4px 6px rgba(0, 0, 0, 0.5)", // Apply light mode shadow for dark mode
    },
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen size // Detect mobile screen size
  const [open, setOpen] = useState(!isMobile); // Set open state based on screen size
  const [selected, setSelected] = useState("Main Dashboard");

  useEffect(() => {
    console.log("Screen size changed:", isMobile ? "Mobile" : "Desktop/Tablet");
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sidebarItems = [
    { title: "Lecture Times", icon: <ScheduleIcon />, to: "/lecturetimes" },
    { title: "Reports", icon: <AddchartOutlinedIcon />, to: "/mymodules" },

    { title: "Main Dashboard", icon: <HomeOutlinedIcon />, to: "/dashboard" },
    // { title: "My Modules", icon: <LayersIcon />, to: "/mymodules" },
  ];

  const sidebarItem_2 = [
    // { title: "Reports", icon: <AddchartOutlinedIcon />, to: "/reports" },
  ];

  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

  const colors = tokens(theme.palette.mode);
  const TitleATS = styled("span")(({ theme }) => ({
    fontWeight: 800, // Custom font weight for "ATS"
    fontFamily: "Rubik",
    fontSize: "25px",
    color: theme.palette.mode === "dark" ? "white" : "#1B254B",
  }));

  const TitleIOT = styled("span")(({ theme }) => ({
    fontWeight: 500, // Custom font weight for "IOT"
    fontFamily: "Rubik",
    fontSize: "25px",
    color: theme.palette.mode === "dark" ? "white" : "#1B254B",
  }));

  return (
    <Box
      sx={{
        display: "flex",
        "& .pro-sidebar-inner": {
          background: `${tokens(theme.palette.mode).primary[400]} !important`,
          ...(theme.palette.mode === "light",
          "dark" && {
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
          }),
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "darkblue !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "8px",
          }}
        >
          <Box
            style={{
              display: open ? "inline-block" : "none",
              marginRight: "6px",
            }}
          >
            <TitleATS>ATS</TitleATS>
          </Box>
          <Box
            style={{
              display: open ? "inline-block" : "none",
              marginLeft: "6px",
            }}
          >
            <TitleIOT>IOT</TitleIOT>
          </Box>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {open ? (
              theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <ProSidebar collapsed={!open} width={drawerWidth}>
          <Menu iconShape="square">
            {open && (
              <Box mb="25px" mt="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="80px"
                    height="80px"
                    src={`../../assets/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="semibold"
                    sx={{ m: "10px 0px 00px 0" }}
                  >
                    Lecturer Name
                  </Typography>
                  <Typography
                    variant="h6"
                    color={colors.greenAccent[500]}
                    sx={{ m: "00px 0px 40px 0" }}
                  >
                    Department
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={open ? undefined : "5%"}>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0px 15px 15px" }}
              >
                Pages
              </Typography>

              {sidebarItems.map((item, index) => (
                <Item
                  key={index}
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}

              {/* <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 00px 15px 15px" }}
              >
                Data
              </Typography> */}
              {sidebarItem_2.map((item, index) => (
                <Item
                  key={index}
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </Box>
          </Menu>
        </ProSidebar>
      </Drawer>
      <Box component="main" sx={{ ml: -4, flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* Main content */}
      </Box>
    </Box>
  );
}
