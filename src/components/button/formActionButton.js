import React from "react";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import PropTypes from "prop-types";

const FormActionButton = ({
  isMobile,
  title,
  onCancelClick,
  loading,
  Edit,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent={isMobile ? "space-between" : "flex-end"}
      alignItems="center"
      spacing={1}
      sx={{ mt: 5 }}
    >
      <LoadingButton
        type="button"
        variant="outlined"
        onClick={onCancelClick}
        disabled={loading}
        sx={{
          width: isMobile ? "50%" : "180px",
          height: "40px",
          border: "1px solid #C0183E",
          borderRadius: "20px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: !loading && "#FFFFFF",
          color: "#C0183E",
          "&:hover": {
            border: "1px solid #C0183E",
          },
        }}
      >
        Cancel
      </LoadingButton>
      <LoadingButton
        type="submit"
        variant="contained"
        loading={loading}
        loadingPosition="start"
        startIcon={<></>}
        sx={{
          width: isMobile ? "50%" : "180px",
          height: "40px",
          borderRadius: "20px",
          fontSize: "16px",
          fontWeight: "bold",
          background:
            !loading && "transparent linear-gradient(92deg, #B02D41, #D9596D)",
          color: "#FFFFFF",
        }}
      >
        {title ? title : Edit ? "Update" : "Create"}
      </LoadingButton>
    </Stack>
  );
};

FormActionButton.propTypes = {
  title: PropTypes.string,
  Edit: PropTypes.bool,
  onCancelClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default FormActionButton;
