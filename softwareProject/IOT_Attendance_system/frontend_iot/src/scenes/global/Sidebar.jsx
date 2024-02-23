import { useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { ProSidebar } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";

import LayersIcon from "@mui/icons-material/Layers";
import ScheduleIcon from "@mui/icons-material/Schedule";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(" Dashboard");

  return (
    <Box
      // display={isCollapsed ? "flex" : "block"}
      flexGrow={1}
      sx={{
        position: "fixed", // Fix the sidebar position
        top: 0, // Align the sidebar to the top of the viewport
        left: 0, // Align the sidebar to the left of the viewport
        bottom: 150,
        height: "100vh", // Make the sidebar full height
        zIndex: 1100, // Ensure the sidebar is above other content

        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          // Add boxShadow only in light mode
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
      <ProSidebar collapsed={isCollapsed} width={240}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : <ArrowBackIosNewIcon />}
            style={{
              margin: "10px 0 10px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="6px"
                mt="0px" // Increase top margin as needed
                mb="0px" // Increase bottom margin as needed
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: "800",
                    fontFamily: "Rubik",
                    fontSize: "25px",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "#1B254B",
                  }}
                >
                  ATS
                </Box>
                {"  "}
                <Box
                  component="span"
                  sx={{
                    fontFamily: "Rubik",
                    fontSize: "25px",
                    fontWeight: "400",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "#1B254B",
                  }}
                >
                  IOT
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  {/* <ArrowBackIosNewIcon /> */}
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* Conditional rendering for the divider */}
          {/* {theme.palette.mode === "dark" ? (
            <Divider
              sx={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                margin: "10px 10px",
              }}
            />
          ) : (
            <Divider
              sx={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                margin: "0px 0",
              }}
            />
          )} */}

          {!isCollapsed && (
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

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 00px 15px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="Main Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography> */}
            <Item
              title="My Modules"
              to="/mymodules"
              icon={<LayersIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Lecture Times"
              to="/lecturetimes"
              icon={<ScheduleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Reports"
              to="/reports"
              icon={<AddchartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
