import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { Circle, WhatsApp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";
import Loading from "../../components/loading";
import ErrorPage from "../../components/errorPage";

import { getPatientsByGuardian } from "../../store/actions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f3f9ff",
  padding: theme.spacing(1),
  textAlign: "left",
}));

const CovidPatientWeb = (isMobile) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loggedInUser } = useSelector((state) => state.auth);
  const {
    isGettingPatientsByGuardian,
    isErrorGettingPatientsByGuardian,
    covidPatientsByGuardian,
  } = useSelector((state) => state.covidPatient);

  useEffect(() => {
    dispatch(getPatientsByGuardian(loggedInUser.userName));
  }, []);

  return (
    <CustomCard isMobile={isMobile}>
      {isGettingPatientsByGuardian ? (
        <Loading />
      ) : isErrorGettingPatientsByGuardian ? (
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
            title={"COVID Patients"}
            isArrowBack={true}
          />
          <Grid container spacing={2} sx={{ mt: "0.5px" }}>
            {covidPatientsByGuardian.map((item, index) => {
              return (
                <Grid key={index} item sm={6} xs={12}>
                  <Item
                    sx={{
                      background:
                        "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          mb: 1,
                          alignItems: "center",
                        }}
                      >
                        <Circle sx={{ color: "#305c88", fontSize: "14px" }} />
                        &nbsp;
                        <Typography fontSize="16px" fontWeight="bold">
                          {item?.status}
                        </Typography>
                      </Box>
                      <Typography fontSize="14px">
                        Patient Name: {item?.patientName}
                      </Typography>
                      <Typography fontSize="14px">
                        NIC Number: {item?.nicNumber}
                      </Typography>
                      <Typography fontSize="14px">
                        Confirmed Date: {item?.confirmedDate?.split("T")[0]}
                      </Typography>
                      <Typography fontSize="14px">
                        Healthcare Officer: {item?.healthcareProfessionalName}
                      </Typography>
                      <Typography fontSize="14px" sx={{ mb: 1 }}>
                        Contact Number: {item?.phoneNumber}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Typography fontSize="14px" fontWeight="bold">
                        Connect via WhatsApp&nbsp;
                      </Typography>
                      <div
                        onClick={() => {
                          window.open(
                            `https://wa.me/${"+94" + item?.phoneNumber}`
                          );
                        }}
                      >
                        <WhatsApp sx={{ color: "#108d08", fontSize: "30px" }} />
                      </div>
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

export default CovidPatientWeb;
