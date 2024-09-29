import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";
import Loading from "../../components/loading";
import ErrorPage from "../../components/errorPage";

import { getVaccineAppointmentsByCreatedBy } from "../../store/actions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f3f9ff",
  padding: theme.spacing(1),
  textAlign: "left",
}));

const CovidVaccineAppointmentsMobile = (isMobile) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loggedInUser } = useSelector((state) => state.auth);
  const {
    isGettingVaccineAppointmentsByCreatedBy,
    isErrorGettingVaccineAppointmentsByCreatedBy,
    vaccineAppointmentsByCreatedBy,
  } = useSelector((state) => state.covidVaccine);

  useEffect(() => {
    dispatch(getVaccineAppointmentsByCreatedBy(loggedInUser.userName));
  }, []);

  return (
    <CustomCard isMobile={isMobile}>
      {isGettingVaccineAppointmentsByCreatedBy ? (
        <Loading />
      ) : isErrorGettingVaccineAppointmentsByCreatedBy ? (
        <ErrorPage onHandleReload={() => navigate(0)} isMobile={true} />
      ) : (
        <Box
          sx={{
            margin: "16px 8px",
            minHeight: "460px",
          }}
        >
          <Heading
            isMobile={isMobile}
            title={"Vaccination Appointments"}
            isArrowBack={true}
          />
          <Grid container spacing={2} sx={{ mt: "0.5px" }}>
            {vaccineAppointmentsByCreatedBy.map((item, index) => {
              return (
                <Grid key={index} item sm={12} xs={12}>
                  <Item
                    sx={{
                      background:
                        "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
                    }}
                  >
                    <Box>
                      <Typography
                        fontSize="16px"
                        fontWeight="bold"
                        sx={{ mb: 1 }}
                      >
                        Scheduled ({item?.centreName})
                      </Typography>
                      <Typography fontSize="12px">
                        Appointment Date: {item?.dateScheduled?.split("T")[0]} (
                        {item?.timeScheduled})
                      </Typography>
                      <Typography fontSize="12px">
                        Location: {item?.centreName}
                      </Typography>
                      <Typography fontSize="12px">
                        Patient Name: {item?.name}
                      </Typography>
                      <Typography fontSize="12px">
                        NIC Number: {item?.nicNumber}
                      </Typography>
                      <Typography fontSize="12px">
                        Appointment Type: COVID Vaccination
                      </Typography>
                      <Typography fontSize="12px" sx={{ mb: 1 }}>
                        Status: Scheduled
                      </Typography>
                    </Box>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </CustomCard>
  );
};

export default CovidVaccineAppointmentsMobile;
