import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

import CustomCard from "../../components/customCard";
import { AddButton } from "../../components/button";
import { BasicTable } from "../../components/dataTable";
import Loading from "../../components/loading";
import ErrorPage from "../../components/errorPage";

import AddBeneficiaryMobile from "./addBeneficiaryMobile";

import {
  getVaccineAppointmentsByInfo,
  getVaccinationCentreById,
} from "../../store/actions";

const CovidVaccineAddBeneficiariesMobile = ({ isMobile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state: selectedData } = useLocation();

  const zoom = 16;
  const [currentPage, setCurrentPage] = useState(0);
  const [isShowAdd, setShowAdd] = useState(false);

  const {
    vaccineAppointmentsByInfo,
    isGettingVaccineAppointmentsByInfo,
    isErrorGettingVaccineAppointmentsByInfo,
    vaccinationCentreById,
    isGettingVaccinationCentreById,
    isErrorGettingVaccinationCentreById,
  } = useSelector((state) => state.covidVaccine);

  const columns = [
    {
      field: "vaccineAppointmentId",
      columnName: "Appointment No.",
      width: "30%",
    },
    {
      field: "name",
      columnName: "Name",
      width: "30%",
    },
  ];

  useEffect(() => {
    const userData = {
      vaccinationCentreId: selectedData?.vaccinationCentreId,
      createdBy: selectedData?.createdBy,
      date: selectedData?.dateScheduled,
    };
    dispatch(getVaccineAppointmentsByInfo(userData));
    dispatch(getVaccinationCentreById(selectedData?.vaccinationCentreId));
  }, [dispatch]);

  const onHandleAddBeneficiary = () => {
    setShowAdd(true);
  };

  const changeCurrentPage = (data) => {
    setCurrentPage(data);
  };

  return (
    <CustomCard isMobile={isMobile}>
      {isGettingVaccineAppointmentsByInfo || isGettingVaccinationCentreById ? (
        <Loading />
      ) : isErrorGettingVaccineAppointmentsByInfo ||
        isErrorGettingVaccinationCentreById ? (
        <ErrorPage onHandleReload={() => navigate(0)} isMobile={true} />
      ) : (
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Typography fontSize="15px" fontWeight="bold" color="#681f6e">
              Vaccination appointment scheduled with the Reference No{" "}
              {selectedData?.vaccineAppointmentId}.
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
                {vaccinationCentreById?.centreName}
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
                src={`https://maps.google.com/maps?q=${vaccinationCentreById?.latitude},${vaccinationCentreById?.longitude}&z=${zoom}&output=embed`}
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
              rows={vaccineAppointmentsByInfo || []}
              recordsPerPage={10}
              handleChangeCurrentPage={(data) => changeCurrentPage(data)}
              handleEdit={null}
              isMobile={isMobile}
            />
          </Grid>

          {/* Add Beneficiary */}
          <AddBeneficiaryMobile
            isOpen={isShowAdd}
            handleClose={() => setShowAdd(false)}
            selectedData={selectedData}
          />
        </Grid>
      )}
    </CustomCard>
  );
};

export default CovidVaccineAddBeneficiariesMobile;
