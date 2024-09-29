import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { CheckCircle, Circle } from "@mui/icons-material";
import { PieChart } from "@mui/x-charts/PieChart";

import Loading from "../../components/loading";
import CustomCard from "../../components/customCard";
import { SpaceBetween } from "../../components/wrapper";

import { Assets } from "../../assets/images";

import { getPatientsOverallStats } from "../../store/actions";

const DashboardMobile = ({ isMobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPatientsOverallStats());
  }, [dispatch]);

  const {
    isGettingPatientsOverallStats,
    isErrorGettingPatientsOverallStats,
    covidPatientsOverallStats,
  } = useSelector((state) => state.covidPatient);

  const setTitle = (type) => {
    if (type == "TOTAL CONFIRMED") {
      return "Total Confirmed";
    } else if (type == "ACTIVE") {
      return "Active";
    } else if (type == "RECOVERED") {
      return "Recovered";
    } else if (type == "DEATHS") {
      return "Deaths";
    } else {
      return "";
    }
  };

  const setColor = (type) => {
    if (type == "TOTAL CONFIRMED") {
      return "#9f9b9b";
    } else if (type == "ACTIVE") {
      return "#108d08";
    } else if (type == "RECOVERED") {
      return "#2169b4";
    } else if (type == "DEATHS") {
      return "#af1b49";
    } else {
      return "";
    }
  };

  return (
    <CustomCard isMobile={isMobile}>
      <Box
        sx={{
          margin: "16px 8px",
        }}
      >
        <Card
          sx={{
            background: "transparent linear-gradient(94deg, #bfd8f2, #eeeeee)",
            mt: 2,
          }}
        >
          <CardMedia
            sx={{ height: 110 }}
            image={Assets.covidVaccine.you_are_vaccinated}
            title="Schedule an Appointment"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <CheckCircle sx={{ color: "#07AA00" }} />
              <Typography
                gutterBottom
                fontSize="17px"
                fontWeight="bold"
                component="div"
              >
                YOU ARE VACCINATED
              </Typography>
            </div>
            <Typography fontSize="12px" color="text.secondary">
              Being fully vaccinated will help your body develop and maintain
              protection against serious illness and death. It will also help
              reduce the likelihood of new variants emerging.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="12px"
              onClick={() => {
                navigate("/covid-vaccination-certificate");
              }}
            >
              Download Certificate
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            background: "transparent linear-gradient(94deg, #c9eac7, #eeeeee)",
            mt: 2,
            p: 2,
            display: "flex",
            flexDirection: "column",
            minHeight: "200px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#000000",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            COVID-19 TRACKER | SRI LANKA
          </Typography>
          {isGettingPatientsOverallStats ? (
            <Loading />
          ) : isErrorGettingPatientsOverallStats ? (
            <Typography
              variant="string"
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                color: "#8D8D8D",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {"No Data Available"}
            </Typography>
          ) : (
            <>
              {covidPatientsOverallStats.map((item) => (
                <SpaceBetween key={item?.type}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Circle sx={{ color: setColor(item?.type) }} />
                    &nbsp;
                    <Typography fontSize="14px">
                      {setTitle(item?.type)}
                    </Typography>
                  </Box>
                  <Typography fontSize="14px">{item?.count}</Typography>
                </SpaceBetween>
              ))}
            </>
          )}
        </Card>
        <Card
          sx={{
            background: "transparent linear-gradient(94deg, #f3cdd5, #eeeeee)",
            mt: 2,
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#000000",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            COVID-19 TRACKER | GLOBAL
          </Typography>
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: 22121550,
                    label: "Active",
                    color: "#108d08",
                  },
                  {
                    id: 1,
                    value: 7006139,
                    label: "Deaths",
                    color: "#af1b49",
                  },
                  {
                    id: 2,
                    value: 675108072,
                    label: "Recovered",
                    color: "#2169b4",
                  },
                ],
              },
            ]}
            width={300}
            height={150}
          />
          <Divider sx={{ mb: 1, mt: 2 }} />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#60707B",
              textAlign: "center",
            }}
          >
            Stay Home, Stay Safe!
          </Typography>
        </Card>
      </Box>
    </CustomCard>
  );
};

export default DashboardMobile;
