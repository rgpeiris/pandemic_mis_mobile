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
} from "@mui/material";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";

import { Assets } from "../../assets/images";

const CovidVaccineMenuMobile = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <CustomCard isMobile={isMobile}>
      <Box
        sx={{
          margin: "16px 8px",
        }}
      >
        <Heading isMobile={isMobile} title={"COVID Vaccination"} />
        <Card
          sx={{
            background: "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
            mt: 2,
          }}
        >
          <CardMedia
            sx={{ height: 100 }}
            image={Assets.covidVaccine.schedule_vaccine}
            title="Schedule an Appointment"
          />
          <CardContent>
            <Typography gutterBottom fontSize="16px" component="div">
              Schedule an Appointment
            </Typography>
            <Typography fontSize="12px" color="text.secondary">
              Now you can schedule vaccination appointments for you and your
              loved ones through Aarogya
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="12px" onClick={() => navigate(`/covid-vaccination`)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            background: "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
            mt: 1.5,
          }}
        >
          <CardMedia
            sx={{ height: 100 }}
            image={Assets.covidVaccine.vaccine_appointments}
            title="Vaccination Appointments"
          />
          <CardContent>
            <Typography gutterBottom fontSize="16px" component="div">
              Vaccination Appointments
            </Typography>
            <Typography fontSize="12px" color="text.secondary">
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
      </Box>
    </CustomCard>
  );
};

export default CovidVaccineMenuMobile;
