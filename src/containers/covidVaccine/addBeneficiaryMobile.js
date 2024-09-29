import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField, Checkbox, Typography, Box } from "@mui/material";

import CustomModal from "../../components/modal";
import { FormWrapper } from "../../components/wrapper";
import Heading from "../../components/heading";
import CustomSelect from "../../components/customSelect";
import { FormActionButton } from "../../components/button";

import { GENDER_LIST, checkNICValidity, findInfoFromNic } from "../../utils";

import { createVaccineAppointment } from "../../store/actions";

const AddBeneficiaryMobile = ({ isOpen, handleClose, selectedData }) => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [isValidFullName, setIsValidFullName] = useState(true);
  const [nicNumber, setNicNumber] = useState("");
  const [isValidNicNumber, setIsValidNicNumber] = useState(true);
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [isValidGender, setIsValidGender] = useState(true);
  const [isClearGender, setIsClearGender] = useState(false);
  const [address, setAddress] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isRequiredReports, setIsRequiredReports] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const { loggedInUser } = useSelector((state) => state.auth);

  const onHandleFullName = (e) => {
    setIsValidFullName(true);
    setFullName(e.target.value);
  };

  const onHandleNicNumber = (e) => {
    setIsValidNicNumber(true);
    setNicNumber(e.target.value);

    if (checkNICValidity(e.target.value)) {
      var info = findInfoFromNic(e.target.value);

      if (info != null) {
        setAge(info.age);
        setBirthday(info.dob);
        setIsRequired(info.age >= 60 ? true : false);
      } else {
        setAge("");
        setBirthday("");
        setIsRequired(false);
      }
    } else {
      setAge("");
      setBirthday("");
      setIsRequired(false);
    }
  };

  const onHandleIsRequiredReports = () => {
    setIsRequiredReports(!isRequiredReports);
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

  const onHandleAddress = (e) => {
    setIsValidAddress(true);
    setAddress(e.target.value);
  };

  const onHandlePhoneNumber = (e) => {
    setIsValidPhoneNumber(true);
    setPhoneNumber(e.target.value);
  };

  const checkValidity = (e) => {
    e.preventDefault();
    handleCreate(e);
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const userData = {
      vaccineAppointmentId: 0,
      name: fullName,
      nicNumber,
      age,
      birthYear: birthday.split("-")[0],
      gender,
      address,
      phoneNumber,
      isRequiredReports,
      vaccinationCentreId: selectedData.vaccinationCentreId,
      dateScheduled: selectedData.dateScheduled,
      timeScheduled: selectedData.timeScheduled,
      status: "SCHEDULED",
      createdBy: loggedInUser.userName,
      createdDate: new Date().toISOString(),
    };

    dispatch(createVaccineAppointment(userData, handleClose));
  };

  const onHandleCancel = () => {
    handleClose();
  };

  return (
    <CustomModal isOpen={isOpen} handleClose={handleClose} isMobile={true}>
      <FormWrapper onSubmit={checkValidity}>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Heading title={"Schedule Appointment for Beneficiary"} />
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
              label={"NIC Number"}
              placeholder={"Enter NIC Number"}
              inputProps={{ maxLength: 50 }}
              value={nicNumber}
              onChange={onHandleNicNumber}
              error={!isValidNicNumber}
              helperText={!isValidNicNumber && "* Required Field"}
            />
          </Grid>
          {isRequired && (
            <>
              <Grid item sm={12} xs={12}>
                <TextField fullWidth disabled label={"Age"} value={age} />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Typography
                  fontSize="12px"
                  fontWeight="bold"
                  textAlign="justify"
                  sx={{ mb: 1 }}
                >
                  At the moment, citizen of age group 60 above are allowed to
                  register for vaccination if they are having any comorbidities
                  (pre-existing medical conditions).
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Checkbox
                    checked={isRequiredReports}
                    style={{ color: "#CD4C60" }}
                    onChange={onHandleIsRequiredReports}
                  />
                  <Typography fontSize="12px">
                    I am having comorbidities and I agree to carry the medical
                    certificate indicating my comorbidity condition to the
                    Vaccination Center.
                  </Typography>
                </Box>
              </Grid>
            </>
          )}
          <Grid item sm={12} xs={12}>
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
          <Grid item sm={12} xs={12}>
            <TextField
              required
              fullWidth
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
              inputProps={{ maxLength: 50 }}
              value={phoneNumber}
              onChange={onHandlePhoneNumber}
              error={!isValidPhoneNumber}
              helperText={!isValidPhoneNumber && "* Required Field"}
            />
          </Grid>
        </Grid>
        <FormActionButton
          isMobile={true}
          title={"Schedule"}
          onCancelClick={onHandleCancel}
        />
      </FormWrapper>
    </CustomModal>
  );
};

export default AddBeneficiaryMobile;
