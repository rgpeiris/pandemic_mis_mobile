import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Checkbox,
  Typography,
  Box,
  IconButton,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  Link,
} from "@mui/material";
import { Search, FilterAltOff, ArrowForward } from "@mui/icons-material";

import CustomCard from "../../components/customCard";
import { FormWrapper, SpaceBetween } from "../../components/wrapper";
import Heading from "../../components/heading";
import CustomSelect from "../../components/customSelect";
import { FormActionButton } from "../../components/button";

import {
  GENDER_LIST,
  DISTRICT_LIST,
  DS_DIVISION_LIST,
  checkNICValidity,
  findInfoFromNic,
} from "../../utils";

import {
  createVaccineAppointment,
  getScheduledVaccinationCentresByInfo,
} from "../../store/actions";

const CovidVaccineMobile = ({ isMobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const [district, setDistrict] = useState("");
  const [isValidDistrict, setIsValidDistrict] = useState(true);
  const [isClearDistrict, setIsClearDistrict] = useState(false);
  const [dsDivision, setDsDivision] = useState("");
  const [dsDivisionsList, setDsDivisionsList] = useState([]);
  const [isValidDsDivision, setIsValidDsDivision] = useState(true);
  const [isClearDsDivision, setIsClearDsDivision] = useState(false);
  const [date, setDate] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [showCenters, setShowCenters] = useState(false);
  const [showAddBeneficiaries, setShowAddBeneficiaries] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [isRequiredCenter, setIsRequiredCenter] = useState(false);

  const { loggedInUser } = useSelector((state) => state.auth);
  const { createdVaccineAppointment } = useSelector(
    (state) => state.covidVaccine
  );

  useEffect(() => {
    if (loggedInUser) {
      setFullName(loggedInUser?.fullName);
      setNicNumber(loggedInUser?.nicNumber);
      setGender(loggedInUser?.gender);
      setAddress(loggedInUser?.address);
      setPhoneNumber(loggedInUser?.phoneNumber);

      if (checkNICValidity(loggedInUser?.nicNumber)) {
        var info = findInfoFromNic(loggedInUser?.nicNumber);

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
    }
  }, []);

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

  const onHandleDistrict = (e) => {
    setIsValidDistrict(true);
    setIsClearDistrict(true);
    setDistrict(e.target.value);

    let dsDList = DS_DIVISION_LIST.find(
      (x) => x.key === e.target.value
    ).dsDivisions;

    setDsDivisionsList(dsDList);
  };

  const onHandleClearDistrict = () => {
    setDistrict("");
    setIsClearDistrict(false);
    setDsDivision("");
    setIsClearDsDivision(false);
    setDsDivisionsList([]);
  };

  const onHandleDsDivision = (e) => {
    setIsValidDsDivision(true);
    setIsClearDsDivision(true);
    setDsDivision(e.target.value);
  };

  const onHandleClearDsDivision = () => {
    setDsDivision("");
    setIsClearDsDivision(false);
  };

  const onHandleDate = (e) => {
    setDate(e.target.value);
  };

  const onSelectAction = (scheduledVaccinationCentreId, e) => {
    const { value } = e.target;

    const newArr = searchedData.map((obj) => {
      if (obj.scheduledVaccinationCentreId === scheduledVaccinationCentreId) {
        return { ...obj, timeSelected: value };
      }
      return obj;
    });
    setSearchedData(newArr);
  };

  const onCheckAction = (scheduledVaccinationCentreId, e) => {
    const { checked } = e.target;
    setIsRequiredCenter(false);

    searchedData.map((element) => ({
      ...element,
      checked: false,
    }));

    const newArr = searchedData.map((obj) => {
      if (obj.scheduledVaccinationCentreId === scheduledVaccinationCentreId) {
        return { ...obj, checked: checked };
      }
      return obj;
    });
    setSearchedData(newArr);
  };

  const onHandleSearch = (e) => {
    setIsRequiredCenter(false);
    if (district && dsDivision && date) {
      e.preventDefault();
      const userData = {
        district,
        city: dsDivision,
        date,
      };

      dispatch(
        getScheduledVaccinationCentresByInfo(userData, onHandleSuccessSearch)
      );
    }
  };

  const onHandleSuccessSearch = (data) => {
    setShowCenters(true);
    setSearchedData(data);
  };

  const onHandleClearFilters = (e) => {
    e.preventDefault();
    setDistrict("");
    setIsClearDistrict(false);
    setDsDivision("");
    setIsClearDsDivision(false);
    setDsDivisionsList([]);
    setDate("");
    setSearchedData([]);
    setShowCenters(false);
    setIsRequiredCenter(false);
  };

  const checkValidity = (e) => {
    e.preventDefault();
    let selectedCentre = searchedData.find((x) => x.checked === true);

    if (selectedCentre) {
      handleCreate(e);
    } else {
      setIsRequiredCenter(true);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();

    let selectedCentre = searchedData.find((x) => x.checked === true);

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
      vaccinationCentreId: selectedCentre.vaccinationCentreId,
      dateScheduled: selectedCentre.dateScheduled,
      timeScheduled: selectedCentre.timeSelected,
      status: "SCHEDULED",
      createdBy: loggedInUser.userName,
      createdDate: new Date().toISOString(),
    };

    dispatch(createVaccineAppointment(userData, onHandleSuccessCreate));
  };

  const onHandleSuccessCreate = () => {
    setShowAddBeneficiaries(true);
  };

  const onHandleCancel = () => {
    navigate("/covid-vaccination");
  };

  const onHandleCreateBeneficiaries = () => {
    navigate("/covid-vaccination-add-beneficiaries", {
      state: {
        vaccineAppointmentId: createdVaccineAppointment?.vaccineAppointmentId,
        vaccinationCentreId: createdVaccineAppointment?.vaccinationCentreId,
        dateScheduled: createdVaccineAppointment?.dateScheduled,
        timeScheduled: createdVaccineAppointment?.timeScheduled,
        createdBy: createdVaccineAppointment?.createdBy,
      },
    });
  };

  return (
    <CustomCard isMobile={isMobile}>
      <FormWrapper
        style={{
          margin: "16px 8px",
        }}
        onSubmit={checkValidity}
      >
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Heading
              isMobile={isMobile}
              isArrowBack={true}
              title={"Schedule an Appointment"}
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <TextField
              disabled
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
              disabled
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
              disabled
              fullWidth
              label={"Gender"}
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
              disabled
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
              disabled
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
          <Grid item sm={12} xs={12}>
            <Typography fontSize="15px">Select Vaccination Center *</Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "#F0F0F0",
            borderRadius: "15px 15px 15px 15px",
            p: "20px 20px 10px 20px",
            mt: "5px",
          }}
        >
          <Typography fontSize="13px" sx={{ mb: 2 }}>
            Find center with District and City
          </Typography>
          <CustomSelect
            fullWidth
            sx={{ mb: "20px" }}
            label={"Select District *"}
            isShowPlaceholder
            value={district || ""}
            selectData={DISTRICT_LIST}
            onChange={onHandleDistrict}
            isValid={isValidDistrict}
            handleClear={onHandleClearDistrict}
            isClear={isClearDistrict}
          />
          <CustomSelect
            fullWidth
            sx={{ mb: "20px" }}
            label={"Select City *"}
            isShowPlaceholder
            value={dsDivision || ""}
            selectData={dsDivisionsList}
            onChange={onHandleDsDivision}
            isValid={isValidDsDivision}
            handleClear={onHandleClearDsDivision}
            isClear={isClearDsDivision}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: "5px",
            }}
          >
            <TextField
              required
              fullWidth
              label={"Select Date"}
              type="date"
              value={date}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: new Date().toISOString().split("T")[0],
              }}
              sx={{ pr: 1 }}
              onChange={onHandleDate}
            />
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "7px",
                background:
                  "transparent linear-gradient(90deg, #B02D41 0%, #D9596D 100%) 0% 0% no-repeat padding-box",
                color: "#FFFFFF",
                mr: "5px",
              }}
              onClick={onHandleSearch}
            >
              <Search />
            </IconButton>
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "7px",
                background:
                  "transparent linear-gradient(90deg, #B02D41 0%, #D9596D 100%) 0% 0% no-repeat padding-box",
                color: "#FFFFFF",
              }}
              onClick={onHandleClearFilters}
            >
              <FilterAltOff />
            </IconButton>
          </div>
        </Box>
        {showCenters && (
          <>
            {searchedData.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #D0D0D0",
                    borderRadius: "15px 15px 15px 15px",
                    p: "5px 5px 5px 5px",
                    mt: "15px",
                  }}
                >
                  <SpaceBetween>
                    <Typography
                      sx={{ fontSize: "15px", fontWeight: "600", pl: 3 }}
                    >
                      {item.centreName}
                    </Typography>
                    <Checkbox
                      checked={item.checked}
                      style={{ color: "#CD4C60" }}
                      onChange={onCheckAction.bind(
                        this,
                        item.scheduledVaccinationCentreId
                      )}
                    />
                  </SpaceBetween>
                  <Typography sx={{ fontSize: "14px", pl: 3 }}>
                    Date: {item.dateScheduled?.split("T")[0]} (10.00 am - 5.00
                    pm)
                  </Typography>
                  <Typography sx={{ fontSize: "14px", pl: 3 }}>
                    Available Capacity: {item.availableCapacity}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", mb: 1, pl: 3 }}>
                    Schedule Time
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "5px",
                    }}
                  >
                    <FormControl sx={{ pl: 3 }}>
                      <RadioGroup
                        row
                        size="medium"
                        name="timeScheduled"
                        value={item.timeSelected}
                        onChange={onSelectAction.bind(
                          this,
                          item.scheduledVaccinationCentreId
                        )}
                      >
                        <FormControlLabel
                          value={"Forenoon"}
                          control={<Radio sx={{ color: "#8D8D8D" }} />}
                          label={
                            <Typography style={{ fontSize: "14px" }}>
                              Forenoon
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value={"Afternoon"}
                          control={<Radio sx={{ color: "#8D8D8D" }} />}
                          label={
                            <Typography style={{ fontSize: "14px" }}>
                              Afternoon
                            </Typography>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </Box>
              );
            })}
          </>
        )}
        {isRequiredCenter && (
          <Typography sx={{ mt: 1, color: "#d9596d", fontSize: "14px" }}>
            * Please select a center to continue
          </Typography>
        )}
        <FormActionButton
          isMobile={isMobile}
          title={"Schedule"}
          onCancelClick={onHandleCancel}
        />
        {showAddBeneficiaries && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Link
              sx={{ mt: 2, fontSize: "16px", color: "#D35367" }}
              underline="none"
              component="button"
              onClick={onHandleCreateBeneficiaries}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {"Add Beneficiaries"}
                <ArrowForward sx={{ color: "#D35367" }} />
              </Box>
            </Link>
          </Box>
        )}
      </FormWrapper>
    </CustomCard>
  );
};

export default CovidVaccineMobile;
