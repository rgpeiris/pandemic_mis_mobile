import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Home,
  Campaign,
  Vaccines,
  Person,
  ContentPasteSearch,
  LocalHospital,
} from "@mui/icons-material";

import HeaderBar from "./headerBar";
import BottomMenu from "./bottomMenu";
import MenuModal from "./menuModal";

import { userLogout } from "../../../store/actions";

const menuItems = [
  {
    code: "HOME",
    label: "Home",
    icon: <Home sx={{ fontSize: "30px" }} />,
    path: "/",
  },
  {
    code: "NEWS",
    label: "COVID Updates",
    icon: <Campaign sx={{ fontSize: "30px" }} />,
    path: "/covid-news",
  },
  {
    code: "COVID_VACCINATION",
    label: "COVID Vaccination",
    icon: <Vaccines sx={{ fontSize: "30px" }} />,
    path: "/covid-vaccination-menu",
  },
  {
    code: "COVID_VIRAL_TESTS",
    label: "COVID Tests",
    icon: <ContentPasteSearch sx={{ fontSize: "30px" }} />,
    path: "/covid-viral-tests-menu",
  },
  {
    code: "COVID_PATIENTS",
    label: "COVID Patients",
    icon: <LocalHospital sx={{ fontSize: "30px" }} />,
    path: "/covid-patients",
  },
  {
    code: "PROFILE",
    label: "Profile",
    icon: <Person sx={{ fontSize: "30px" }} />,
    path: "/profile",
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
    <Box sx={{ display: "flex", py: 7 }}>
      {/* Header bar */}
      <HeaderBar toggleModal={toggleModal} />

      {/* Bottom menu */}
      <BottomMenu menuItems={menuItems} />

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
          flexGrow: 1,
          position: "fixed",
          height: "calc(100% - 112px)", // window - padding & bottom nav
          width: "100%",
          overflow: "auto",
          backgroundColor: "#EEEEEE",
          p: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
