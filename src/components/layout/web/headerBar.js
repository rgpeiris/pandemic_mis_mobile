import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Badge,
  IconButton,
  Typography,
  Toolbar,
} from "@mui/material";
import { MailOutline, CheckCircle } from "@mui/icons-material";
import moment from "moment";

import { Assets } from "../../../assets/images";

import Loading from "../../../components/loading";

const HeaderBar = ({ drawerWidth }) => {
  const { isUserLogging, loggedInUser } = useSelector((state) => state.auth);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#FFFFFF",
        }}
      >
        {isUserLogging ? (
          <Loading />
        ) : (
          <Toolbar sx={{ minWidth: "850px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <img
                src={Assets.header.group_365}
                style={{ width: "24px", height: "24px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {loggedInUser?.callingName}
                </Typography>
                <Typography
                  sx={{
                    color: "#A5AEB5",
                    fontSize: "14px",
                  }}
                >
                  {"Aarogya"}
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                color: "#A5AEB5",
                fontSize: "14px",
              }}
            >
              {moment().format("[Last Login] DD-MMM-YY HH:mmA")}
            </Typography>

            <IconButton size="large" component={Link} to="/inbox">
              <Badge badgeContent={6} color="error">
                <MailOutline />
              </Badge>
            </IconButton>

            <IconButton size="large" sx={{ color: "#07AA00" }}>
              <Badge
                badgeContent={10}
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
        )}
      </AppBar>
    </>
  );
};

export default HeaderBar;
