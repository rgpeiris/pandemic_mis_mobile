import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import { Assets } from "../../assets/images";

const ErrorPage = ({ onHandleReload, isMobile }) => {
  return (
    <Box
      sx={{
        height: "74vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={Assets.common.warning_icon}
        alt="logo"
        style={{
          width: isMobile ? "300px" : "400px",
          height: isMobile ? "200px" : "250px",
        }}
      />
      <Typography align="center" fontSize="25px" fontWeight="bold">
        Something went wrong
      </Typography>
      <Typography align="center" fontSize="14px">
        We're having issues loading the page
      </Typography>
      <Button
        variant="contained"
        startIcon={<RefreshIcon fontSize="small" />}
        sx={{
          mt: 3,
          borderRadius: "20px",
          background: "transparent linear-gradient(94deg, #B02D41, #D9596D)",
        }}
        onClick={onHandleReload}
      >
        <Typography align="center" variant="h6" sx={{ fontSize: "medium" }}>
          Try Again
        </Typography>
      </Button>
    </Box>
  );
};

ErrorPage.propTypes = {
  onHandleReload: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

export default ErrorPage;
