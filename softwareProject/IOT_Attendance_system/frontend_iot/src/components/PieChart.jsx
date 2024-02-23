import React from "react";
import { PieChart as MuiPieChart } from "@mui/x-charts";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { tokens } from "../theme";

const data = [
  { label: "Attendance", value: 80, color: "#3A7559" },
  { label: "Absent", value: 20, color: "#F44336" },
];

const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "0",
  position: "relative",
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

const StyledTypography = styled(Typography)({
  marginBottom: "1rem",
  position: "relative",
});

const ResponsivePieChart = styled(MuiPieChart)({
  position: "relative",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

const MyPieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <StyledCard
      elevation={0}
      sx={{
        backgroundColor: colors.primary[400],
        borderRadius: 6,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        position: "relative",
        mb: 4,
        mr: 6,
        p: 2,
        width: isSmallScreen ? "90%" : 360,
      }}
    >
      <StyledCardContent>
        <StyledTypography variant="h4" gutterBottom>
          Data Analysis
        </StyledTypography>
        <ResponsivePieChart
          sx={{ width: isSmallScreen ? "80%" : 480 }}
          series={[
            {
              arcLabel: (item) => `(${item.value}%)`,
              arcLabelMinAngle: 45,
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={250}
          width={400}
        />
      </StyledCardContent>
    </StyledCard>
  );
};

export default MyPieChart;
