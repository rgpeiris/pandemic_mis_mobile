import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const FormWrapper = ({ children, onSubmit, style }) => {
  return (
    <Box
      component="form"
      noValidate
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default FormWrapper;
