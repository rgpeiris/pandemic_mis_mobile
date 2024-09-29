import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { ArrowBack } from "@mui/icons-material";

const Heading = ({ isMobile, title, textCenter, isArrowBack }) => {
  const navigate = useNavigate();

  return (
    <>
      {isArrowBack ? (
        <Typography
          sx={{
            fontSize: isMobile ? "20px" : "24px",
            color: "#681F6E",
            fontWeight: "bold",
          }}
        >
          <ArrowBack
            onClick={() => navigate(-1)}
            sx={{
              position: "relative",
              top: "4px",
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          />{" "}
          {title}
        </Typography>
      ) : (
        <Typography
          sx={{
            fontSize: isMobile ? "20px" : "24px",
            color: "#681F6E",
            fontWeight: "bold",
            textAlign: textCenter ? "center" : null,
          }}
        >
          {title}
        </Typography>
      )}
    </>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  isArrowBack: false,
};

export default Heading;
