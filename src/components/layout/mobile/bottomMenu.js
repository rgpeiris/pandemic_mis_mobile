import React, { useState } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import {
  Home,
  MoreHoriz,
  Campaign,
  Vaccines,
  Person,
  Close,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const navItems = [
  {
    code: "HOME",
    value: "Home",
    label: "Home",
    icon: <Home sx={{ fontSize: "27px" }} />,
    path: "/",
  },
  {
    code: "NEWS",
    value: "Updates",
    label: "Updates",
    icon: <Campaign sx={{ fontSize: "27px" }} />,
    path: "/covid-news",
  },
  {
    code: "MORE",
    value: "more",
    label: "",
    icon: <MoreHoriz sx={{ fontSize: "27px" }} />,
    path: "",
  },
  {
    code: "VACCINATION",
    value: "Vaccination",
    label: "Vaccination",
    icon: <Vaccines sx={{ fontSize: "27px" }} />,
    path: "/covid-vaccination-menu",
  },
  {
    code: "PROFILE",
    value: "Profile",
    label: "Profile",
    icon: <Person sx={{ fontSize: "27px" }} />,
    path: "/profile",
  },
];

const BottomMenu = ({ menuItems }) => {
  const [open, setOpen] = useState(false);
  const [navValue, setNavValue] = useState("");

  const toggleBootomModal = (newOpen) => () => {
    setOpen(newOpen);
  };

  const onHandleChange = (e, newValue) => {
    setNavValue(newValue);
    newValue == "more" && setOpen(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        borderRadius: "15px 15px 0 0",
        boxShadow: "0px 0px 6px #00000029",
      }}
    >
      <BottomNavigation showLabels value={navValue} onChange={onHandleChange}>
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.value}
            label={item.label}
            component={item.value == "more" ? IconButton : Link}
            to={item.path}
            icon={item.icon}
            value={item.value}
          />
        ))}
      </BottomNavigation>

      {/* Bottom modal */}
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleBootomModal(false)}
        onOpen={toggleBootomModal(true)}
        disableSwipeToOpen={true}
      >
        {/* Close button */}
        <IconButton
          onClick={toggleBootomModal(false)}
          sx={{
            color: "gray",
            mb: "5px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Close />
        </IconButton>
        <Box
          sx={{
            my: "8px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {menuItems.map((item) => (
            <ListItem
              component={Link}
              to={item.path}
              disablePadding
              key={item.path}
              sx={{
                display: "flex",
                flexDirection: "column",
                my: "8px",
                width: "33%",
              }}
              onClick={toggleBootomModal(false)}
            >
              <ListItemIcon
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  color: "#681F6E",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#681F6E",
                  textAlign: "center",
                }}
                primary={item.label}
              />
            </ListItem>
          ))}
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default BottomMenu;
