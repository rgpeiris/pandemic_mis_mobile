import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Assets } from "../../assets/images";
import { checkStringValidity } from "../../utils";

import { userLogin } from "../../store/actions/auth";

const LoginWeb = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isUserLogging, isErrorUserLogging, error } = useSelector(
    (state) => state.auth
  );

  const [username, setUserName] = useState("");
  const [isValidUserName, setValidUserName] = useState(true);
  const [password, setPassword] = useState("");
  const [isShowPassword, setShowPassword] = useState(false);
  const [isValidPassword, setVallidPassword] = useState(true);

  const onHandleUserName = (e) => {
    setValidUserName(true);
    setUserName(e.target.value);
  };

  const onHandlePassword = (e) => {
    setVallidPassword(true);
    setPassword(e.target.value);
  };

  const onHandleShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  const handleForgotPassword = () => {};

  const onCheckValidity = (e) => {
    e.preventDefault();
    let isErrorValidation = false;

    if (!checkStringValidity(username)) {
      setValidUserName(false);
      isErrorValidation = true;
    }
    if (!checkStringValidity(password)) {
      setVallidPassword(false);
      isErrorValidation = true;
    }
    if (!isErrorValidation) {
      onHandleSubmit(e);
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userLogin(
        { username: username.trim(), password: password.trim() },
        navigate
      )
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: `url(${Assets.auth.group_681}) center no-repeat`,
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "78px",
          position: "fixed",
          top: "22px",
          left: "23px",
          right: "23px",
        }}
      >
        <img
          src={Assets.auth.mask_group1}
          alt="logo"
          style={{ width: "113px", height: "113px" }}
        />
      </Box>
      <Box
        sx={{
          width: "756px",
          height: "420px",
          display: "flex",
          flexDirection: "row",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            width: "378px",
            height: "420px",
            // background: `url(${Assets.auth.group_680}) 0% 0% no-repeat padding-box`,
            background: "transparent linear-gradient(94deg, #057ebd, #243c5e)",
            borderRadius: "8px 0px 0px 8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "84px",
              mx: "56px",
              mt: "31px",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "600",
                fontSize: "35px",
              }}
            >
              Welcome to
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "19px",
              }}
            >
              AAROGYA SETU
            </Typography>
          </Box>
        </Box>
        <Box
          component="form"
          onSubmit={onCheckValidity}
          noValidate
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            required
            label={"Username"}
            value={username || ""}
            onChange={onHandleUserName}
            placeholder="Enter Username"
            inputProps={{ maxLength: 20 }}
            error={!isValidUserName}
            helperText={!isValidUserName && "* Required Field"}
            sx={{ width: "254px" }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            required
            label={"Password"}
            value={password || ""}
            type={isShowPassword ? "text" : "password"}
            placeholder="Enter Password"
            onChange={onHandlePassword}
            inputProps={{ maxLength: 20 }}
            error={!isValidPassword}
            helperText={!isValidPassword && "* Required Field"}
            sx={{ width: "254px", mt: "24px" }}
            InputProps={{
              endAdornment: (
                <IconButton onClick={onHandleShowPassword} edge="end">
                  {isShowPassword ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </IconButton>
              ),
            }}
            InputLabelProps={{ shrink: true }}
          />
          {isErrorUserLogging && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "254px",
                marginTop: "8px",
              }}
            >
              <img
                src={Assets.auth.group_707}
                alt="logo"
                style={{ width: "23px", height: "23px", marginRight: "8px" }}
              />
              <Typography
                sx={{
                  color: "#ED1B23",
                  fontSize: "12px",
                }}
              >
                {error}
              </Typography>
            </div>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "254px",
            }}
          >
            <Button
              sx={{
                color: "#333333",
                fontSize: "12px",
                fontWeight: "600",
                textTransform: "none",
              }}
              onClick={handleForgotPassword}
            >
              {"Forgot Password?"}
            </Button>
          </Box>
          <LoadingButton
            type="submit"
            loading={isUserLogging}
            loadingPosition="start"
            startIcon={<></>}
            variant="contained"
            sx={{
              width: "254px",
              mt: "24px",
              background:
                "transparent linear-gradient(94deg, #B02D41, #D9596D)",
            }}
          >
            {"Login"}
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginWeb;
