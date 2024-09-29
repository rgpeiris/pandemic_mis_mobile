import React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Mail, Cottage, Call } from "@mui/icons-material";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";
import { SpaceBetween } from "../../components/wrapper";

const ContactUsMobile = ({ isMobile }) => {
  return (
    <CustomCard>
      <SpaceBetween>
        <Heading title="Contact Information" isMobile={isMobile} />
      </SpaceBetween>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item sm={12} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Cottage sx={{ mb: 1, ml: 1, color: "#50485b" }} fontSize="large" />
            <Typography sx={{ fontSize: "17px", color: "#50485b" }}>
              ADDRESS
            </Typography>
            <Divider sx={{ mr: 2, mt: 2 }} />
            <Typography
              sx={{ fontSize: "14px", mt: 3, mb: 1, color: "#666666" }}
            >
              {"Epidemiology Unit, Ministry of Health, "}
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1, color: "#666666" }}>
              {"231, De Saram Place,"}
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#666666" }}>
              {"Colombo 10"}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Call
              sx={{ mb: 1, ml: 1, mt: 2, color: "#50485b" }}
              fontSize="large"
            />
            <Typography sx={{ fontSize: "17px", color: "#50485b" }}>
              TELEPHONE
            </Typography>
            <Divider sx={{ mr: 2, mt: 2 }} />
            <Typography
              sx={{ fontSize: "14px", mt: 3, mb: 1, color: "#666666" }}
            >
              {"(+94) 112 695 112"}
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1, color: "#666666" }}>
              {"(+94) 112 681 548"}
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#666666" }}>
              {"(+94) 112 696 583"}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Mail
              sx={{ mb: 1, ml: 1, mt: 2, color: "#50485b" }}
              fontSize="large"
            />
            <Typography sx={{ fontSize: "17px", color: "#50485b" }}>
              EMAIL
            </Typography>
            <Divider sx={{ mr: 2, mt: 2 }} />
            <Typography
              sx={{ fontSize: "14px", mt: 3, mb: 1, color: "#666666" }}
            >
              {"chepid@sltnet.lk (Chief Epidemiologist)"}
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1, color: "#666666" }}>
              {"epidunit@sltnet.lk (Epidemiology Unit)"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default ContactUsMobile;
