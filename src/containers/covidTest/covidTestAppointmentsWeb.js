import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";
import Loading from "../../components/loading";
import ErrorPage from "../../components/errorPage";

import { getTestAppointmentsByCreatedBy } from "../../store/actions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f3f9ff",
  padding: theme.spacing(1),
  textAlign: "left",
}));

const CovidTestAppointmentsWeb = ({ isMobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loggedInUser } = useSelector((state) => state.auth);
  const {
    isGettingTestAppointmentsByCreatedBy,
    isErrorGettingTestAppointmentsByCreatedBy,
    testAppointmentsByCreatedBy,
  } = useSelector((state) => state.covidTest);

  useEffect(() => {
    dispatch(getTestAppointmentsByCreatedBy(loggedInUser.userName));
  }, []);

  return (
    <CustomCard isMobile={isMobile}>
      {isGettingTestAppointmentsByCreatedBy ? (
        <Loading />
      ) : isErrorGettingTestAppointmentsByCreatedBy ? (
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
            title={"Viral Testing Appointments"}
            isArrowBack={true}
          />
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {testAppointmentsByCreatedBy.map((item, index) => {
              return (
                <Grid key={index} item sm={6} xs={12}>
                  <Item
                    sx={{
                      background:
                        "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
                    }}
                  >
                    <Box>
                      <Typography
                        fontSize="17px"
                        fontWeight="bold"
                        sx={{ mb: 1 }}
                      >
                        Scheduled ({item?.centreName})
                      </Typography>
                      <Typography fontSize="14px">
                        Appointment Date: {item?.dateScheduled?.split("T")[0]} (
                        {item?.timeScheduled})
                      </Typography>
                      <Typography fontSize="14px">
                        Location: {item?.centreName}
                      </Typography>
                      <Typography fontSize="14px">
                        Patient Name: {item?.name}
                      </Typography>
                      <Typography fontSize="14px">
                        NIC Number: {item?.nicNumber}
                      </Typography>
                      <Typography fontSize="14px">
                        Appointment Type: COVID Testing
                      </Typography>
                      <Typography fontSize="14px" sx={{ mb: 1 }}>
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

export default CovidTestAppointmentsWeb;
