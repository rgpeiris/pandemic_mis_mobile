import React from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const SpaceBetween = ({ children }) => {
  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 3 }}
    >
      {children}
    </Grid>
  );
};

SpaceBetween.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SpaceBetween;
