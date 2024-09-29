import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Dashboard,
  Person,
  Vaccines,
  ContentPasteSearch,
  LocalHospital,
  Newspaper,
} from "@mui/icons-material";

import HeaderBar from "./headerBar";
import MenuBar from "./menuBar";
import MenuModal from "./menuModal";
import Copyright from "../../copyright";

import { userLogout } from "../../../store/actions/auth";

const drawerWidth = 240;

const menuItems = [
  {
    code: "DASHBOARD",
    label: "Dashboard",
    icon: <Dashboard sx={{ fontSize: "27px" }} />,
    path: "/",
  },
  {
    code: "NEWS",
    label: "COVID News",
    icon: <Newspaper sx={{ fontSize: "27px" }} />,
    path: "/covid-news",
  },
  {
    code: "COVID_VACCINATION",
    label: "COVID Vaccination",
    icon: <Vaccines sx={{ fontSize: "27px" }} />,
    path: "/covid-vaccination-menu",
  },
  {
    code: "COVID_VIRAL_TESTS",
    label: "COVID Viral Tests",
    icon: <ContentPasteSearch sx={{ fontSize: "27px" }} />,
    path: "/covid-viral-tests-menu",
  },
  {
    code: "COVID_PATIENTS",
    label: "COVID Patients",
    icon: <LocalHospital sx={{ fontSize: "27px" }} />,
    path: "/covid-patients",
  },
  {
    code: "PROFILE",
    label: "Profile",
    icon: <Person sx={{ fontSize: "27px" }} />,
    path: "/profile",
  },
  {
    code: "COMPLAINTS",
    label: "Complaints",
    icon: <Person sx={{ fontSize: "27px" }} />,
    path: "/create-complaint",
  },
];

const Layout = () => {
  const dispatch = useDispatch();

  const [isOpen, setVisibility] = useState(false);

  const toggleModal = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setVisibility(open);
  };

  const onHandleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <Box sx={{ display: "flex", pt: 8 }}>
      {/* Header bar */}
      <HeaderBar drawerWidth={drawerWidth} />

      {/* Menu bar */}
      <MenuBar
        drawerWidth={drawerWidth}
        toggleModal={toggleModal}
        menuItems={menuItems}
      />

      {/* Side Modal */}
      <MenuModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        handleLogout={onHandleLogout}
        setVisibility={setVisibility}
      />

      {/* Container */}
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "calc(100vh - 64px)",
          minWidth: "600px",
          overflow: "auto",
          backgroundColor: "#EEEEEE",
          p: 2,
        }}
      >
        <Box sx={{ flex: 1, pb: "18px" }}>
          <Outlet />
        </Box>
        <Copyright />
      </Box>
    </Box>
  );
};

export default Layout;
