import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

import CustomCard from "../../../components/customCard";

const Account = ({ item }) => {
  const { type, count } = item;

  const setBackground = () => {
    if (type == "TOTAL CONFIRMED") {
      return "transparent linear-gradient(94deg, #9f9b9b, #dad7d7)";
    } else if (type == "ACTIVE") {
      return "transparent linear-gradient(94deg, #108d08, #c9eac7)";
    } else if (type == "RECOVERED") {
      return "transparent linear-gradient(94deg, #2169b4, #bfd8f2)";
    } else if (type == "DEATHS") {
      return "transparent linear-gradient(94deg, #af1b49, #ead0d8)";
    } else {
      return "";
    }
  };

  const setBorder = () => {
    if (type == "TOTAL CONFIRMED") {
      return "2px solid #a5aeb5";
    } else if (type == "ACTIVE") {
      return "2px solid #07aa00";
    } else if (type == "RECOVERED") {
      return "2px solid #1765b3";
    } else if (type == "DEATHS") {
      return "2px solid #C0183E";
    } else {
      return "";
    }
  };

  return (
    <CustomCard
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "Center",
        width: "280px",
        padding: "8px",
        cursor: "pointer",
        height: "140px",
        border: setBorder(type),
        background: setBackground(type),
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "Center",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: "#333333",
            mb: 1,
          }}
        >
          {type}
        </Typography>
        <Typography
          sx={{
            fontSize: "45px",
            color: "#333333",
            fontWeight: "bold",
          }}
        >
          {count}
        </Typography>
      </div>
    </CustomCard>
  );
};

Account.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Account;
