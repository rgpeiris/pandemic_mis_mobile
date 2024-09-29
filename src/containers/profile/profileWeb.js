import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";
import { SpaceBetween } from "../../components/wrapper";
import { FormWrapper } from "../../components/wrapper";
import { FormActionButton } from "../../components/button";
import Loading from "../../components/loading";
import ErrorPage from "../../components/errorPage";

import {
  checkEmailValidity,
  checkStringValidity,
  checkContactValidity,
} from "../../utils";

import { getUserById, updateUser } from "../../store/actions";

const ProfileWeb = ({ isMobile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [salutation, setSalutation] = useState("");
  const [fullName, setFullName] = useState("");
  const [callingName, setCallingName] = useState("");
  const [gender, setGender] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [designation, setDesignation] = useState("");
  const [isValidDesignation, setIsValidDesignation] = useState(true);
  const [status, setStatus] = useState("");

  const {
    loggedInUser,
    isUpdatingUser,
    isGettingUserById,
    isErrorGettingUserById,
    systemUserById,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserById(loggedInUser?.userName));
  }, [dispatch]);

  useEffect(() => {
    if (systemUserById) {
      setUsername(systemUserById?.userName);
      setSalutation(systemUserById?.salutation);
      setFullName(systemUserById?.fullName);
      setCallingName(systemUserById?.callingName);
      setGender(systemUserById?.gender);
      setNicNumber(systemUserById?.nicNumber);
      setAddress(systemUserById?.address);
      setPhoneNumber(systemUserById?.phoneNumber);
      setEmail(systemUserById?.email);
      setDesignation(systemUserById?.designation);
      setStatus(systemUserById?.isActive ? "Active" : "Inactive");
      setIsValidAddress(true);
      setIsValidPhoneNumber(true);
      setIsValidEmail(true);
      setIsValidDesignation(true);
    }
  }, [systemUserById]);

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

  const onHandleDesignation = (e) => {
    setIsValidDesignation(true);
    setDesignation(e.target.value);
  };

  const checkValidity = (e) => {
    e.preventDefault();
    let isErrorValidation = false;

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
    if (!checkStringValidity(designation)) {
      setIsValidDesignation(false);
      isErrorValidation = true;
    }

    if (!isErrorValidation) {
      handleUpdate(e);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const userData = {
      salutation: systemUserById?.salutation,
      fullName: systemUserById?.fullName,
      callingName: systemUserById?.callingName,
      gender: systemUserById?.gender,
      nicNumber: systemUserById?.nicNumber,
      address,
      phoneNumber,
      email,
      designation,
      isActive: systemUserById?.isActive,
      updatedDate: new Date().toISOString(),
    };

    dispatch(updateUser(loggedInUser?.id, userData, onHandleCancel));
  };

  const onHandleCancel = () => {
    navigate("/");
  };

  return (
    <CustomCard isMobile={isMobile}>
      {isGettingUserById ? (
        <Loading />
      ) : isErrorGettingUserById ? (
        <ErrorPage onHandleReload={() => navigate(0)} />
      ) : (
        <>
          <SpaceBetween>
            <Heading
              title="My Profile"
              isArrowBack={true}
              isMobile={isMobile}
            />
          </SpaceBetween>
          <FormWrapper onSubmit={checkValidity}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <TextField
                  disabled
                  fullWidth
                  label={"Username"}
                  value={username}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  disabled
                  fullWidth
                  label={"Salutation"}
                  value={salutation}
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <TextField
                  disabled
                  fullWidth
                  label={"Full Name"}
                  value={fullName}
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <TextField
                  disabled
                  fullWidth
                  label={"Calling Name"}
                  value={callingName}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField disabled fullWidth label={"Gender"} value={gender} />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  disabled
                  fullWidth
                  label={"NIC Number"}
                  value={nicNumber}
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
              <Grid item sm={6} xs={12} sx={{ display: "none" }}>
                <TextField
                  required
                  fullWidth
                  label={"Designation"}
                  placeholder={"Enter Designation"}
                  inputProps={{ maxLength: 100 }}
                  value={designation}
                  onChange={onHandleDesignation}
                  error={!isValidDesignation}
                  helperText={!isValidDesignation && "* Required Field"}
                />
              </Grid>
              <Grid item sm={6} xs={12} sx={{ display: "none" }}>
                <TextField disabled fullWidth label={"Status"} value={status} />
              </Grid>
            </Grid>
            <FormActionButton
              Edit
              onCancelClick={onHandleCancel}
              loading={isUpdatingUser}
            />
          </FormWrapper>
        </>
      )}
    </CustomCard>
  );
};

export default ProfileWeb;
