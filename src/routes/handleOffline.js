import * as React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Offline from "../components/offline";

const HandleOffline = () => {
  const [isOnline, setAvailability] = useState(navigator.onLine);

  const setOnline = () => {
    setAvailability(true);
  };

  const setOffline = () => {
    setAvailability(false);
  };

  useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  return (
    <>
      {!isOnline && <Offline display={!isOnline} />}
      <Outlet />
    </>
  );
};

export default HandleOffline;
