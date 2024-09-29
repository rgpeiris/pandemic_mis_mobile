import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

import CustomCard from "../../components/customCard";
import { AddButton } from "../../components/button";
import { BasicTable } from "../../components/dataTable";
import Loading from "../../components/loading";
import ErrorPage from "../../components/errorPage";

import AddTestsBeneficiaryMobile from "./addTestsBeneficiaryMobile";

import {
  getTestAppointmentsByInfo,
  getTestCentreById,
} from "../../store/actions";

const CovidTestAddBeneficiariesMobile = ({ isMobile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state: selectedData } = useLocation();

  const zoom = 16;
  const [currentPage, setCurrentPage] = useState(0);
  const [isShowAdd, setShowAdd] = useState(false);

  const {
    testAppointmentsByInfo,
    isGettingTestAppointmentsByInfo,
    isErrorGettingTestAppointmentsByInfo,
    testCentreById,
    isGettingTestCentreById,
    isErrorGettingTestCentreById,
  } = useSelector((state) => state.covidTest);

  const columns = [
    {
      field: "testsAppointmentId",
      columnName: "Appointment No.",
      width: "30%",
    },
    {
      field: "name",
      columnName: "Beneficiary Name",
      width: "30%",
    },
  ];

  useEffect(() => {
    const userData = {
      testCentreId: selectedData?.testCentreId,
      createdBy: selectedData?.createdBy,
      date: selectedData?.dateScheduled,
    };
    dispatch(getTestAppointmentsByInfo(userData));
    dispatch(getTestCentreById(selectedData?.testCentreId));
  }, [dispatch]);

  const onHandleAddBeneficiary = () => {
    setShowAdd(true);
  };

  const changeCurrentPage = (data) => {
    setCurrentPage(data);
  };

  return (
    <CustomCard isMobile={isMobile}>
      {isGettingTestAppointmentsByInfo || isGettingTestCentreById ? (
        <Loading />
      ) : isErrorGettingTestAppointmentsByInfo ||
        isErrorGettingTestCentreById ? (
        <ErrorPage onHandleReload={() => navigate(0)} isMobile={true} />
      ) : (
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Typography fontSize="15px" fontWeight="bold" color="#681f6e">
              Viral test appointment scheduled with the Reference No{" "}
              {selectedData?.testsAppointmentId}.
            </Typography>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Typography fontSize="12px" textAlign="center">
              Scheduled Date: {selectedData?.dateScheduled?.split("T")[0]} (
              {selectedData?.timeScheduled})
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LocationOn fontSize="12px" />
              <Typography fontSize="12px">
                {testCentreById?.centreName}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${testCentreById?.latitude},${testCentreById?.longitude}&z=${zoom}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map"
              ></iframe>
            </Box>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Typography fontSize="12px">
              You can register maximum 4 beneficiaries. Click here.
            </Typography>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AddButton
                title="Add Beneficiary"
                onCreateClick={onHandleAddBeneficiary}
              />
            </Box>
          </Grid>
          <Grid item sm={12} xs={12}>
            <BasicTable
              currentPage={currentPage}
              columns={columns}
              rows={testAppointmentsByInfo || []}
              recordsPerPage={10}
              handleChangeCurrentPage={(data) => changeCurrentPage(data)}
              handleEdit={null}
              isMobile={isMobile}
            />
          </Grid>

          {/* Add Beneficiary */}
          <AddTestsBeneficiaryMobile
            isOpen={isShowAdd}
            handleClose={() => setShowAdd(false)}
            selectedData={selectedData}
          />
        </Grid>
      )}
    </CustomCard>
  );
};

export default CovidTestAddBeneficiariesMobile;
