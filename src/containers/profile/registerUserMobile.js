import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Grid, Typography } from "@mui/material";

import { FormWrapper } from "../../components/wrapper";
import Heading from "../../components/heading";
import CustomSelect from "../../components/customSelect";
import { FormActionButton } from "../../components/button";

import { Assets } from "../../assets/images";

import {
  checkEmailValidity,
  checkStringValidity,
  checkContactValidity,
  checkNICValidity,
  GENDER_LIST,
} from "../../utils";

import { userRegisterMobile } from "../../store/actions";

const RegisterUserMobile = ({ isMobile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [fullName, setFullName] = useState("");
  const [isValidFullName, setIsValidFullName] = useState(true);
  const [callingName, setCallingName] = useState("");
  const [isValidCallingName, setIsValidCallingName] = useState(true);
  const [gender, setGender] = useState("");
  const [isValidGender, setIsValidGender] = useState(true);
  const [isClearGender, setIsClearGender] = useState(false);
  const [nicNumber, setNicNumber] = useState("");
  const [isValidNicNumber, setIsValidNicNumber] = useState(true);
  const [address, setAddress] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const { isUserRegistering } = useSelector((state) => state.auth);

  const onHandleUsername = (e) => {
    setIsValidUsername(true);
    setUsername(e.target.value);
  };

  const onHandleFullName = (e) => {
    setIsValidFullName(true);
    setFullName(e.target.value);
  };

  const onHandleCallingName = (e) => {
    setIsValidCallingName(true);
    setCallingName(e.target.value);
  };

  const onHandleGender = (e) => {
    setIsValidGender(true);
    setIsClearGender(true);
    setGender(e.target.value);
  };

  const onHandleClearGender = () => {
    setGender("");
    setIsClearGender(false);
  };

  const onHandleNicNumber = (e) => {
    setIsValidNicNumber(true);
    setNicNumber(e.target.value);
  };

  const onHandleAddress = (e) => {
    setIsValidAddress(true);
    setAddress(e.target.value);
  };

  const onHandlePhoneNumber = (e) => {
    setIsValidPhoneNumber(true);
    setPhoneNumber(e.target.value);
  };

  const onHandleEmail = (e) => {
    setIsValidEmail(true);
    setEmail(e.target.value);
  };

  const checkValidity = (e) => {
    e.preventDefault();
    let isErrorValidation = false;

    if (!checkStringValidity(username)) {
      setIsValidUsername(false);
      isErrorValidation = true;
    }
    if (!checkStringValidity(fullName)) {
      setIsValidFullName(false);
      isErrorValidation = true;
    }
    if (!checkStringValidity(callingName)) {
      setIsValidCallingName(false);
      isErrorValidation = true;
    }
    if (!checkStringValidity(gender)) {
      setIsValidGender(false);
      isErrorValidation = true;
    }
    if (!checkNICValidity(nicNumber)) {
      setIsValidNicNumber(false);
      isErrorValidation = true;
    }
    if (!checkStringValidity(address)) {
      setIsValidAddress(false);
      isErrorValidation = true;
    }
    if (!checkContactValidity(phoneNumber)) {
      setIsValidPhoneNumber(false);
      isErrorValidation = true;
    }
    if (!checkEmailValidity(email)) {
      setIsValidEmail(false);
      isErrorValidation = true;
    }
    if (!isErrorValidation) {
      handleCreate(e);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const userData = {
      username,
      callingName,
      gender,
      salutation: gender === "Male" ? "Mr." : "Ms.",
      fullName,
      nicNumber,
      address,
      email,
      phoneNumber,
      designation: "N/A",
      password: "Admin@123",
      isActive: true,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      createdBy: "app_user",
      role: "APP_USER",
    };

    dispatch(userRegisterMobile(userData, navigate));
  };

  const onHandleCancel = () => {
    navigate("/login");
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
          borderRadius: "4px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 0px 8px #0000001D",
          margin: "16px 16px 16px 16px",
          padding: "8px 10px 10px 10px",
        }}
      >
        <FormWrapper
          style={{
            margin: "16px 8px",
          }}
          onSubmit={checkValidity}
        >
          <Grid container spacing={2}>
            <Grid item sm={12} xs={12}>
              <Heading isMobile={isMobile} title={""} isArrowBack={true} />
            </Grid>
            <Grid item sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "#681F6E",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up for Aarogya
                </Typography>
                <Typography fontSize="small" color="dimgray">
                  Just a few quick things to get started
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                required
                fullWidth
                label={"Username"}
                placeholder={"Enter Username"}
                inputProps={{ maxLength: 20 }}
                value={username}
                onChange={onHandleUsername}
                error={!isValidUsername}
                helperText={!isValidUsername && "* Required Field"}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                required
                fullWidth
                label={"Full Name"}
                placeholder={"Enter Full Name"}
                inputProps={{ maxLength: 150 }}
                value={fullName}
                multiline
                rows={3}
                onChange={onHandleFullName}
                error={!isValidFullName}
                helperText={!isValidFullName && "* Required Field"}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                required
                fullWidth
                label={"Calling Name"}
                placeholder={"Enter Calling Name"}
                inputProps={{ maxLength: 50 }}
                value={callingName}
                onChange={onHandleCallingName}
                error={!isValidCallingName}
                helperText={!isValidCallingName && "* Required Field"}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomSelect
                fullWidth
                label={"Gender *"}
                isShowPlaceholder
                value={gender || ""}
                selectData={GENDER_LIST}
                onChange={onHandleGender}
                isValid={isValidGender}
                handleClear={onHandleClearGender}
                isClear={isClearGender}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                required
                fullWidth
                label={"NIC Number"}
                placeholder={"Enter NIC Number"}
                inputProps={{ maxLength: 50 }}
                value={nicNumber}
                onChange={onHandleNicNumber}
                error={!isValidNicNumber}
                helperText={
                  !isValidNicNumber
                    ? nicNumber
                      ? "Please enter a valid NIC number"
                      : "* Required Field"
                    : ""
                }
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                required
                fullWidth
                label={"Address"}
                placeholder={"Enter Address"}
                inputProps={{ maxLength: 150 }}
                value={address}
                multiline
                rows={3}
                onChange={onHandleAddress}
                error={!isValidAddress}
                helperText={!isValidAddress && "* Required Field"}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                required
                fullWidth
                label={"Phone Number"}
                placeholder={"Enter Phone Number"}
                inputProps={{ maxLength: 50 }}
                value={phoneNumber}
                onChange={onHandlePhoneNumber}
                error={!isValidPhoneNumber}
                helperText={
                  !isValidPhoneNumber
                    ? phoneNumber
                      ? "Please enter a valid Phone number"
                      : "* Required Field"
                    : ""
                }
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                required
                fullWidth
                label={"Email"}
                placeholder={"Enter Email"}
                inputProps={{ maxLength: 100 }}
                value={email}
                onChange={onHandleEmail}
                error={!isValidEmail}
                helperText={
                  !isValidEmail
                    ? email
                      ? "Please enter a valid Email"
                      : "* Required Field"
                    : ""
                }
              />
            </Grid>
          </Grid>
          <FormActionButton
            title={"Sign Up"}
            onCancelClick={onHandleCancel}
            loading={isUserRegistering}
          />
        </FormWrapper>
      </Box>
    </Box>
  );
};

export default RegisterUserMobile;
