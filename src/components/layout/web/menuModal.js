import React from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
} from "@mui/material";
import { AccountCircleRounded, Call, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Assets } from "../../../assets/images";

import Loading from "../../../components/loading";

const menuItems = [
  {
    label: "Contact Us",
    icon: <Call />,
  },
  {
    label: "Logout",
    icon: <Logout />,
  },
];

const MenuModal = ({ isOpen, toggleModal, handleLogout, setVisibility }) => {
  const navigate = useNavigate();

  const { isUserLogging, loggedInUser } = useSelector((state) => state.auth);

  const onHandleClick = (label) => {
    if (label == "Logout") {
      handleLogout();
    }
    if (label == "Contact Us") {
      navigate("contact-us");
      setVisibility(false);
    }
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleModal(false)}
      PaperProps={{
        sx: {
          height: "calc(100vh - 30px)",
          width: "260px",
          backgroundColor: "#D35367",
          color: "#FFFFFF",
          margin: "15px 0 15px 15px",
        },
      }}
    >
      {isUserLogging ? (
        <Loading />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={Assets.auth.mask_group1}
              alt="logo"
              style={{ width: "93px", height: "93px", margin: "10px 0" }}
            />
            <AccountCircleRounded sx={{ mt: "30px", fontSize: "50px" }} />
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                mt: "10px",
                mb: "10px",
              }}
            >
              {loggedInUser?.callingName}
            </Typography>
          </div>
          <List>
            {menuItems.map((menu) => (
              <React.Fragment key={menu.label}>
                <ListItemButton onClick={() => onHandleClick(menu.label)}>
                  <ListItemIcon sx={{ color: "white" }}>
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={menu.label}
                    primaryTypographyProps={{ fontSize: 14 }}
                  />
                </ListItemButton>
              </React.Fragment>
            ))}
          </List>
        </>
      )}
    </Drawer>
  );
};

export default MenuModal;
