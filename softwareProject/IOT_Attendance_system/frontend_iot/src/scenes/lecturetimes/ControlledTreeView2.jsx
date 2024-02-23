import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";

import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function ControlledTreeView2() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  const handleSemesterClick = (department, semester) => {
    navigate(`/moduleList2?department=${department}&semester=${semester}`);
  };
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
          <div key={`civil-semester${i + 1}`} onClick={() => handleSemesterClick('Civil and Environmental Engineering', `Semester${i + 1}`)}>
            <TreeItem nodeId={`civil-${i + 11}`} label={`Semester${i + 1}`} />
          </div>
        ))}
          
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
          <div key={`mechanical-semester${i + 1}`} onClick={() => handleSemesterClick('Mechanical and Manufacturing Engineering', `Semester${i + 1}`)}>
            <TreeItem nodeId={`mechanical-${i + 20}`} label={`Semester${i + 1}`} />
          </div>
        ))}
          
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
          nodeId="28"
          label="Department of Interdisciplinary Studies "
        >
           {Array.from({ length: 8 }, (_, i) => (
          <div key={`interdisciplinary-semester${i + 1}`} onClick={() => handleSemesterClick('Interdisciplinary Studies', `Semester${i + 1}`)}>
            <TreeItem nodeId={`interdisciplinary-${i + 29}`} label={`Semester${i + 1}`} />
          </div>
        ))}
          
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
          <div key={`marine-semester${i + 1}`} onClick={() => handleSemesterClick('Marine Engineering and Naval Architecture', `Semester${i + 1}`)}>
            <TreeItem nodeId={`marine-${i + 38}`} label={`Semester${i + 1}`} />
          </div>
        ))}
          
        </TreeItem>
        
      </TreeView>
    </Box>
  );
}
