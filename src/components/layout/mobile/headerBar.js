import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Badge, IconButton, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  MailOutline,
  // NotificationsOutlined,
  CheckCircle,
} from "@mui/icons-material";

import { Assets } from "../../../assets/images";

const HeaderBar = ({ toggleModal }) => {
  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#FFFFFF" }}>
      <Toolbar>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <img
            src={Assets.header.group_77}
            style={{ width: "24px", height: "24px", cursor: "pointer" }}
            onClick={toggleModal(true)}
          />
        </Box>

        <IconButton component={Link} to="/inbox">
          <Badge badgeContent={1} color="error">
            <MailOutline />
          </Badge>
        </IconButton>

        <IconButton sx={{ color: "#07AA00" }}>
          <Badge
            badgeContent={2}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "#07AA00",
              },
            }}
          >
            <CheckCircle />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
