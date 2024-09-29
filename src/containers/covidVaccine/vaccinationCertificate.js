import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";
import { SpaceBetween } from "../../components/wrapper";
import { SimpleTable } from "../../components/dataTable";
import { AddButton } from "../../components/button";
import Loading from "../../components/loading";
import ErrorPage from "../../components/errorPage";

import { getVaccinationByNic } from "../../store/actions";

const VaccinationCertificate = ({ isMobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pdfRef = useRef();

  const { loggedInUser } = useSelector((state) => state.auth);
  const {
    isGettingVaccinationByNic,
    isErrorGettingVaccinationByNic,
    vaccinationByNic,
  } = useSelector((state) => state.covidVaccine);

  useEffect(() => {
    dispatch(getVaccinationByNic(loggedInUser?.nicNumber));
  }, []);

  const columnsWeb = [
    {
      field: "vaccineDose",
      columnName: "COVID-19 Vaccine",
      width: "20%",
    },
    {
      field: "vaccineName",
      columnName: "Name of the Vaccine",
      width: "30%",
    },
    {
      field: "centreName",
      columnName: "Place of Vaccination",
      width: "5%",
    },
    {
      field: "dateOfVaccination",
      columnName: "Date of Vaccination",
      width: "10%",
    },
    {
      field: "nextAppointmentDate",
      columnName: "Next Appointment Date",
      width: "10%",
    },
  ];

  const columnsMobile = [
    {
      field: "vaccineName",
      columnName: "COVID-19 Vaccine",
      width: "30%",
    },
    {
      field: "dateOfVaccination",
      columnName: "Date of Vaccination",
      width: "10%",
    },
  ];

  const onHandleDownload = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("vaccination-card.pdf");
    });
  };

  return (
    <CustomCard isMobile={isMobile}>
      {isGettingVaccinationByNic ? (
        <Loading />
      ) : isErrorGettingVaccinationByNic ? (
        <ErrorPage onHandleReload={() => navigate(0)} isMobile={true} />
      ) : (
        <>
          <SpaceBetween>
            <Heading
              title="Vaccination Record Card"
              isArrowBack={true}
              isMobile={isMobile}
            />
          </SpaceBetween>
          <CustomCard
            isMobile={isMobile}
            ref={pdfRef}
            style={{
              background:
                "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
            }}
          >
            <Box
              sx={{
                margin: "16px 8px",
              }}
            >
              <Typography
                fontSize={isMobile ? "18px" : "24px"}
                fontWeight="600"
              >
                COVID-19 Vaccination Record Card
              </Typography>
              <Divider sx={{ borderColor: "#000000", mt: 1, mb: 2 }} />
              <Typography
                fontSize={isMobile ? "14px" : "16px"}
                textAlign="justified"
              >
                Please keep this record card, which includes medical information
                about the vaccines you have received.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 2, mb: 1 }}>
                <Typography fontSize="14px" fontWeight="bold">
                  Name:
                </Typography>
                <Typography fontSize="14px">
                  &nbsp;{loggedInUser?.fullName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
                <Typography fontSize="14px" fontWeight="bold">
                  NIC Number:
                </Typography>
                <Typography fontSize="14px">
                  &nbsp;{loggedInUser?.nicNumber}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
                <Typography fontSize="14px" fontWeight="bold">
                  Address:
                </Typography>
                <Typography fontSize="14px">
                  &nbsp;{loggedInUser?.address}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mb: isMobile ? 3 : 5,
                }}
              >
                <Typography fontSize="14px" fontWeight="bold">
                  Phone Number:
                </Typography>
                <Typography fontSize="14px">
                  &nbsp;{loggedInUser?.phoneNumber}
                </Typography>
              </Box>
              <SimpleTable
                columns={isMobile ? columnsMobile : columnsWeb}
                rows={vaccinationByNic || []}
                isMobile={isMobile}
              />
            </Box>
          </CustomCard>
          <Box
            sx={{
              margin: "16px 8px",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <AddButton
              title={isMobile ? "Download" : "Download Vaccination Card"}
              onCreateClick={onHandleDownload}
            />
          </Box>
        </>
      )}
    </CustomCard>
  );
};

export default VaccinationCertificate;
