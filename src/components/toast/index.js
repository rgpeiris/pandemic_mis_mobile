import * as React from "react";
import PropTypes from "prop-types";
import { Alert, Snackbar } from "@mui/material";

const Toast = ({ isOpen, severity, message, handleClose }) => {
  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        elevation={6}
        ariant="filled"
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

Toast.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  severity: PropTypes.oneOf(["success", "error", "info", "warning"]).isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Toast;
