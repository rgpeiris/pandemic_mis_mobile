import React from "react";
import { Box, Dialog, Slide, Typography } from "@mui/material";
import { SignalWifiConnectedNoInternet4 } from "@mui/icons-material";

const Offline = ({ display }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={display}
      BackdropProps={{ style: { backgroundColor: "gray", opacity: 0.5 } }}
      TransitionComponent={Transition}
      keepMounted
      disableEscapeKeyDown={true}
    >
      <Box
        sx={{
          display: "flex",
          pl: 2,
          alignItems: "center",
        }}
      >
        <SignalWifiConnectedNoInternet4 sx={{ fontSize: 40 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: 2,
          }}
        >
          <Typography variant="h6">You're not online</Typography>
          <Typography variant="body2">
            Check your internet connection.
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Offline;
