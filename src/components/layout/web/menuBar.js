import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Assets } from "../../../assets/images";

const MenuBar = ({ drawerWidth, toggleModal, menuItems }) => {
  let location = useLocation();

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      PaperProps={{
        sx: {
          // background: `url(${Assets.menu.background_image}) no-repeat padding-box`,
          background: "transparent linear-gradient(94deg, #057ebd, #243c5e)",
          backgroundSize: "cover",
          color: "#FFFFFF",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          m: "8px",
        }}
      >
        <IconButton color="inherit" onClick={toggleModal(true)}>
          <Menu />
        </IconButton>

        <img
          src={Assets.auth.mask_group1}
          alt="logo"
          style={{ marginLeft: "8px", width: "83px", height: "83px" }}
        />
      </Box>

      <>
        <List>
          {menuItems && menuItems.length > 0 && (
            <>
              {menuItems.map((item) => (
                <ListItemButton
                  key={item.label}
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                  onClick={toggleModal(false)}
                  sx={{
                    m: "8px",
                    "&.Mui-selected": {
                      backgroundColor: "#057EBD",
                      "&:hover": {
                        backgroundColor: "#057EBD",
                      },
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#FFFFFF" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  />
                </ListItemButton>
              ))}
            </>
          )}
        </List>
      </>
    </Drawer>
  );
};

export default MenuBar;
