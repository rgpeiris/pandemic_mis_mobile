import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";

import { Assets } from "../../assets/images";

const CovidVaccineMenuWeb = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <CustomCard isMobile={isMobile}>
      <Box
        sx={{
          margin: "16px 8px",
        }}
      >
        <Heading isMobile={isMobile} title={"COVID Vaccination"} />
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item sm={6} xs={12}>
            <Card
              sx={{
                background:
                  "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
              }}
            >
              <CardMedia
                sx={{ height: 250 }}
                image={Assets.covidVaccine.schedule_vaccine}
                title="Schedule an Appointment"
              />
              <CardContent>
                <Typography gutterBottom fontSize="17px" component="div">
                  Schedule an Appointment
                </Typography>
                <Typography fontSize="14px" color="text.secondary">
                  Now you can schedule vaccination appointments for you and your
                  loved ones through Aarogya
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="12px"
                  onClick={() => navigate(`/covid-vaccination`)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card
              sx={{
                background:
                  "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
              }}
            >
              <CardMedia
                sx={{ height: 250 }}
                image={Assets.covidVaccine.vaccine_appointments}
                title="Vaccination Appointments"
              />
              <CardContent>
                <Typography gutterBottom fontSize="17px" component="div">
                  Vaccination Appointments
                </Typography>
                <Typography
                  fontSize="14px"
                  color="text.secondary"
                  sx={{ mb: 2.5 }}
                >
                  Search your scheduled vaccination appointments through Aarogya
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="12px"
                  onClick={() => navigate(`/covid-vaccination-appointments`)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </CustomCard>
  );
};

export default CovidVaccineMenuWeb;
