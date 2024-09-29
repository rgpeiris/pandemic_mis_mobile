import React from "react";
import PropTypes from "prop-types";
import { Modal, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Clear } from "@mui/icons-material";

import Heading from "../heading";

const ResponsiveModal = styled("div")(({ theme, width }) => ({
  [theme.breakpoints.down("sm")]: {
    width: width ? width : "75%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "65%",
  },
}));

const CustomModal = ({
  isOpen,
  children,
  handleClose,
  width,
  padding,
  title,
  isView,
  isBottomModal,
  isMobile,
}) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      {isBottomModal ? (
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "0%",
            width: "100%",
            maxHeight: "90%",
            overflowY: "auto",
            backgroundColor: "#FFFFFF",
            padding: padding ? padding : "16px",
            borderRadius: "8px 8px 0 0",
          }}
        >
          {isView && (
            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Heading title={title} />
              <IconButton
                sx={{
                  height: 29,
                  width: 29,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              >
                <Clear />
              </IconButton>
            </Grid>
          )}
          {children}
        </div>
      ) : (
        <ResponsiveModal
          width={isMobile && "90%"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: width ? width : "md",
            maxHeight: "90%",
            overflowY: "auto",
            bgcolor: "background.paper",
            borderRadius: 2,
            p: padding ? padding : 4,
          }}
        >
          {isView && (
            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Heading title={title} isMobile={isMobile} />
              <IconButton
                sx={{
                  height: 29,
                  width: 29,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              >
                <Clear />
              </IconButton>
            </Grid>
          )}
          {children}
        </ResponsiveModal>
      )}
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleClose: PropTypes.func.isRequired,
  width: PropTypes.string,
  padding: PropTypes.string,
  title: PropTypes.string,
  isView: PropTypes.bool,
  isBottomModal: PropTypes.bool,
};

CustomModal.defaultProps = {
  title: "",
  isView: false,
};

export default CustomModal;
