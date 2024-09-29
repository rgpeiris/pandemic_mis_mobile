import React from "react";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

const AddButton = ({ title, onCreateClick }) => {
  return (
    <Button
      sx={{ border: "1px solid #D05064", borderRadius: "20px", height: "40px" }}
      onClick={onCreateClick}
    >
      <Typography
        variant="button"
        sx={{
          color: "#D05064",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};

AddButton.propTypes = {
  title: PropTypes.string.isRequired,
  onCreateClick: PropTypes.func.isRequired,
};

export default AddButton;
