import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./styles/theme";
import { Navigator } from "./routes";
import Toast from "./components/toast";
import { hideToast } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  const { isOpen, severity, message } = useSelector((state) => state.toast);

  const onHideToast = () => {
    dispatch(hideToast());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigator />
      <Toast
        isOpen={isOpen}
        severity={severity}
        message={message}
        handleClose={onHideToast}
      />
    </ThemeProvider>
  );
}

export default App;
