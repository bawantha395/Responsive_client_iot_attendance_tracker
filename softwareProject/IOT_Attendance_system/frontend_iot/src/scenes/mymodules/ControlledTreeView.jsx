import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function ControlledTreeView() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ["1", "10", "19", "28", "37"] : []
    );
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSemesterClick = (department, semester) => {
    navigate(
      `/modulelist?department=${encodeURIComponent(
        department
      )}&semester=${encodeURIComponent(semester)}`
    );
  };

  return (
    <Box
      m={{ xs: "20px", sm: "40px" }} // Adjust margin based on screen size
      height="auto"
      sx={{
        Height: 500,
        flexGrow: 1,
        // maxWidth: 1000,
        backgroundColor: colors.primary[400],
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        width: isSmallScreen ? "120%" : "90%",
      }}
    >
      <Box
        sx={{
          mb: 1,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Button
          sx={{
            backgroundColor: colors.greenAccent[700], // Updated colorAccent[700],
            color: colors.grey[100],
            fontSize: "12px",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            marginBottom: "5px",
            filter: "blur(0.5px)",
            mr: 0,

            "&:hover": {
              backgroundColor: colors.redAccent[700], // Change the background color on hover
            },
          }}
          onClick={handleExpandClick}
        >
          {expanded.length === 0 ? "Expand " : "Collapse "}
        </Button>
      </Box>
      <TreeView
        sx={{
          backgroundColor: colors.primary[400],
          // color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        <TreeItem
          sx={{
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: colors.greenAccent[700], // Change background color on hover
            },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column", // Change flex direction for smaller screens
              alignItems: "flex-start", // Adjust alignment for smaller screens
              padding: "15px", // Adjust padding for smaller screens
            },
          }}
          nodeId="1"
          label="Department of Electrical and Information Engineering "
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`electrical-semester${i + 1}`}
              onClick={() =>
                handleSemesterClick(
                  "Electrical and Information Engineering",
                  `Semester${i + 1}`
                )
              }
            >
              <TreeItem
                nodeId={`electrical-${i + 2}`}
                label={`Semester${i + 1}`}
              />
            </div>
          ))}
          {/* <Link
            to="/eesem1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <TreeItem nodeId="2" label="Semester1" />
          </Link> */}
          {/* <TreeItem nodeId="3" label="Semester2" />
          <TreeItem nodeId="4" label="Semester3" />
          <TreeItem nodeId="5" label="Semester4" />
          <TreeItem nodeId="6" label="Semester5" />
          <TreeItem nodeId="7" label="Semester6" />
          <TreeItem nodeId="8" label="Semester7" />
          <TreeItem nodeId="9" label="Semester8" /> */}
        </TreeItem>
        <TreeItem
          sx={{
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: colors.greenAccent[700], // Change background color on hover
            },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column", // Change flex direction for smaller screens
              alignItems: "flex-start", // Adjust alignment for smaller screens
              padding: "15px", // Adjust padding for smaller screens
            },
          }}
          nodeId="10"
          label="Department of Civil and Environmental Engineering "
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`civil-semester${i + 1}`}
              onClick={() =>
                handleSemesterClick(
                  "Civil and Environmental Engineering",
                  `Semester${i + 1}`
                )
              }
            >
              <TreeItem nodeId={`civil-${i + 11}`} label={`Semester${i + 1}`} />
            </div>
          ))}
          {/* <TreeItem nodeId="11" label="Semester1" />
          <TreeItem nodeId="12" label="Semester2" />
          <TreeItem nodeId="13" label="Semester3" />
          <TreeItem nodeId="14" label="Semester4" />
          <TreeItem nodeId="15" label="Semester5" />
          <TreeItem nodeId="16" label="Semester6" />
          <TreeItem nodeId="17" label="Semester7" />
          <TreeItem nodeId="18" label="Semester8" /> */}
        </TreeItem>
        <TreeItem
          sx={{
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: colors.greenAccent[700], // Change background color on hover
            },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column", // Change flex direction for smaller screens
              alignItems: "flex-start", // Adjust alignment for smaller screens
              padding: "15px", // Adjust padding for smaller screens
            },
          }}
          nodeId="19"
          label="Department of Mechanical and Manufacturing Engineering "
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`mechanical-semester${i + 1}`}
              onClick={() =>
                handleSemesterClick(
                  "Mechanical and Manufacturing Engineering",
                  `Semester${i + 1}`
                )
              }
            >
              <TreeItem
                nodeId={`mechanical-${i + 20}`}
                label={`Semester${i + 1}`}
              />
            </div>
          ))}
          {/* <TreeItem nodeId="20" label="Semester1" />
          <TreeItem nodeId="21" label="Semester2" />
          <TreeItem nodeId="22" label="Semester3" />
          <TreeItem nodeId="23" label="Semester4" />
          <TreeItem nodeId="24" label="Semester5" />
          <TreeItem nodeId="25" label="Semester6" />
          <TreeItem nodeId="26" label="Semester7" />
          <TreeItem nodeId="27" label="Semester8" /> */}
        </TreeItem>
        <TreeItem
          sx={{
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            // transition: "background-color 0.3s ease",
            // "&:hover": {
            //   backgroundColor: colors.greenAccent[700], // Change background color on hover
            // },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column", // Change flex direction for smaller screens
              alignItems: "flex-start", // Adjust alignment for smaller screens
              padding: "15px", // Adjust padding for smaller screens
            },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth effect
            ":hover": {
              transform: "translateY(-5px)", // Move the card up by 5px
              boxShadow: "0 12px 16px rgba(0, 0, 0, 0.3)", // Increase the shadow to give a "lifting" effect
            },
          }}
          nodeId="28"
          label="Department of Interdisciplinary Studies "
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`interdisciplinary-semester${i + 1}`}
              onClick={() =>
                handleSemesterClick(
                  "Interdisciplinary Studies",
                  `Semester${i + 1}`
                )
              }
            >
              <TreeItem
                nodeId={`interdisciplinary-${i + 29}`}
                label={`Semester${i + 1}`}
              />
            </div>
          ))}
          {/* <TreeItem nodeId="29" label="Semester1" />
          <TreeItem nodeId="30" label="Semester2" />
          <TreeItem nodeId="31" label="Semester3" />
          <TreeItem nodeId="32" label="Semester4" />
          <TreeItem nodeId="33" label="Semester5" />
          <TreeItem nodeId="34" label="Semester6" />
          <TreeItem nodeId="35" label="Semester7" />
          <TreeItem nodeId="36" label="Semester8" /> */}
        </TreeItem>
        <TreeItem
          sx={{
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: colors.greenAccent[700], // Change background color on hover
            },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column", // Change flex direction for smaller screens
              alignItems: "flex-start", // Adjust alignment for smaller screens
              padding: "15px", // Adjust padding for smaller screens
            },
          }}
          nodeId="37"
          label="Department of Marine Engineering and Naval Architecture "
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`marine-semester${i + 1}`}
              onClick={() =>
                handleSemesterClick(
                  "Marine Engineering and Naval Architecture",
                  `Semester${i + 1}`
                )
              }
            >
              <TreeItem
                nodeId={`marine-${i + 38}`}
                label={`Semester${i + 1}`}
              />
            </div>
          ))}
          {/* <TreeItem nodeId="38" label="Semester1" />
          <TreeItem nodeId="39" label="Semester2" />
          <TreeItem nodeId="40" label="Semester3" />
          <TreeItem nodeId="41" label="Semester4" />
          <TreeItem nodeId="42" label="Semester5" />
          <TreeItem nodeId="43" label="Semester6" />
          <TreeItem nodeId="44" label="Semester7" />
          <TreeItem nodeId="45" label="Semester8" /> */}
        </TreeItem>
        {/* Your TreeItems */}
      </TreeView>
    </Box>
  );
}
