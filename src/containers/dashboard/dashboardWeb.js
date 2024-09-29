import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { CheckCircle } from "@mui/icons-material";

import { Assets } from "../../assets/images";

import Loading from "../../components/loading";
import CarouselList from "../../components/carouselList";
import CustomCard from "../../components/customCard";
import Account from "./collections/account";

import { getPatientsOverallStats } from "../../store/actions";

const DashboardWeb = () => {
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

  return (
    <>
      <CarouselList
        list={[
          { name: "Banner 1", url: Assets.dashboard.banner1 },
          { name: "Banner 2", url: Assets.dashboard.banner2 },
          { name: "Banner 3", url: Assets.dashboard.banner3 },
        ]}
        interval={5000}
        loading={false}
        // list={banners}
        // interval={parseInt(bannerTime)}
        // loading={isGettingBannerData}
        navButtonsAlwaysVisible={true}
        style={{ opacity: "0.2" }}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "200px",
          minWidth: "850px",
          marginTop: "16px",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#60707B",
          }}
        >
          COVID-19 TRACKER | SRI LANKA
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            color: "#333333",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Overall Statistics
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {covidPatientsOverallStats.map((item) => (
              <Account key={item.type} item={item} />
            ))}
          </div>
        )}
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "18px",
          minWidth: "850px",
          minHeight: "370px",
        }}
      >
        <CustomCard style={{ width: "100%" }}>
          <CardMedia
            sx={{ height: 220 }}
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
            <Typography fontSize="14px" color="text.secondary">
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
        </CustomCard>
        <CustomCard
          style={{
            width: "500px",
            marginLeft: "18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            COVID-19 TRACKER | GLOBAL
          </Typography>
          <Divider sx={{ mt: 1 }} />
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
            width={400}
            height={200}
          />
          <Divider sx={{ mb: 1 }} />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#60707B",
              textAlign: "center",
            }}
          >
            Stay Home, Stay Safe!
          </Typography>
        </CustomCard>
      </div>
    </>
  );
};

export default DashboardWeb;
