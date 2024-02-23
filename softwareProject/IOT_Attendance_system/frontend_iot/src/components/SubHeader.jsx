import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import {  useTheme } from "@mui/material";
import { tokens } from "../theme";

function SubHeader(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Typography variant="h4"
    color={colors.grey[100]}
    fontWeight="bold"
    sx={{ m: "0 0 5px 0" }} gutterBottom>
      {props.children}
    </Typography>
  );
}

SubHeader.propTypes = {
  children: PropTypes.node,
};

export default SubHeader;