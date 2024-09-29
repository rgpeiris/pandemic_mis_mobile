import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Assets } from "../../assets/images";
import { checkStringValidity } from "../../utils";

import { userLogin, clearLoginError } from "../../store/actions/auth";

const LoginMobile = () => {
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

  useEffect(() => {
    dispatch(clearLoginError());
  }, [dispatch]);

  const onHandleUserName = (e) => {
    dispatch(clearLoginError());
    setValidUserName(true);
    setUserName(e.target.value);
  };

  const onHandlePassword = (e) => {
    dispatch(clearLoginError());
    setVallidPassword(true);
    setPassword(e.target.value);
  };

  const onHandleShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  const onHandleForgotPassword = () => {};

  const onHandleSignUp = () => {
    navigate("/register-user");
  };

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
        minHeight: "100vh",
        height: "100%",
        background: `url(${Assets.auth.group_471_new}) center center / cover no-repeat`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: "12px",
          mx: "8px",
        }}
      >
        <img
          src={Assets.auth.mask_group1}
          alt="logo"
          style={{ width: "64px", height: "64px" }}
        />
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
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "600",
            fontSize: "27px",
          }}
        >
          Welcome to
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "16px",
          }}
        >
          AAROGYA
        </Typography>
        <TextField
          required
          label={"Username"}
          value={username || ""}
          onChange={onHandleUserName}
          placeholder={"Enter Username"}
          inputProps={{ maxLength: 20 }}
          error={!isValidUserName}
          helperText={!isValidUserName && "* Required Field"}
          sx={{
            width: "310px",
            mt: "41px",
            WebkitTextFillColor: isValidUserName && "white",
            ".MuiFormHelperText-root ": {
              color: "#FF9094 !important",
            },
          }}
          InputLabelProps={{ shrink: true, style: { color: "#FFFFFF" } }}
          InputProps={{ style: { color: "#FFFFFF" } }}
        />
        <TextField
          required
          label={"Password"}
          value={password || ""}
          type={isShowPassword ? "text" : "password"}
          onChange={onHandlePassword}
          placeholder={"Enter Password"}
          inputProps={{ maxLength: 20 }}
          error={!isValidPassword}
          helperText={!isValidPassword && "* Required Field"}
          sx={{
            width: "310px",
            mt: "24px",
            WebkitTextFillColor: isValidPassword && "white",
            ".MuiFormHelperText-root ": {
              color: "#FF9094",
            },
          }}
          InputLabelProps={{ shrink: true, style: { color: "#FFFFFF" } }}
          InputProps={{
            style: { color: "#FFFFFF" },
            endAdornment: (
              <IconButton onClick={onHandleShowPassword} edge="end">
                {isShowPassword ? (
                  <Visibility fontSize="small" sx={{ color: "#FFF" }} />
                ) : (
                  <VisibilityOff fontSize="small" sx={{ color: "#FFF" }} />
                )}
              </IconButton>
            ),
          }}
        />
        {isErrorUserLogging && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "310px",
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
                color: "#FF9094",
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
            width: "310px",
            mt: "8px",
          }}
        >
          <Button
            sx={{
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "none",
            }}
            onClick={onHandleForgotPassword}
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
            width: "311px",
            height: "45px",
            my: "24px",
            background: "transparent linear-gradient(94deg, #B02D41, #D9596D)",
          }}
        >
          {"Login"}
        </LoadingButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "12px",
            }}
          >
            {"Don't have an account?"}
          </Typography>
          <Button
            sx={{
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "none",
              position: "relative",
              right: "5px",
            }}
            onClick={onHandleSignUp}
          >
            {"Sign Up"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginMobile;
