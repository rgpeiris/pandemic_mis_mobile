import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";
import Loading from "../../components/loading";
import ErrorPage from "../../components/errorPage";

import { getCovidNews } from "../../store/actions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f3f9ff",
  padding: theme.spacing(1),
  textAlign: "left",
}));

const CovidNewsWeb = ({ isMobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isGettingCovidNews, isErrorGettingCovidNews, covidNews } =
    useSelector((state) => state.covidNews);

  useEffect(() => {
    dispatch(getCovidNews());
  }, []);

  return (
    <CustomCard isMobile={isMobile}>
      {isGettingCovidNews ? (
        <Loading />
      ) : isErrorGettingCovidNews ? (
        <ErrorPage onHandleReload={() => navigate(0)} isMobile={true} />
      ) : (
        <Box
          sx={{
            margin: "16px 8px",
          }}
        >
          <Heading
            isMobile={isMobile}
            title={"COVID Updates"}
            isArrowBack={true}
          />
          <Grid container spacing={2} sx={{ mt: "0.5px" }}>
            {covidNews
              ?.filter((x) => x.isActive === true)
              .map((item, index) => {
                return (
                  <Grid key={index} item sm={12} xs={12}>
                    <Item
                      sx={{
                        background:
                          "transparent linear-gradient(94deg, #cadbee, #eeeeee)",
                      }}
                    >
                      <Box>
                        <Typography
                          fontSize="18px"
                          fontWeight="bold"
                          sx={{ mb: 1 }}
                        >
                          {item.title}
                        </Typography>
                        <Typography fontSize="14px">
                          {item.description}
                        </Typography>
                        <Box
                          sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                          <Typography
                            fontSize="12px"
                            color="#86858f"
                            fontStyle="italic"
                            sx={{
                              mt: 1,
                            }}
                          >
                            {"Posted on: " +
                              moment(item?.createdDate).format("DD-MMM-YYYY")}
                          </Typography>
                        </Box>
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

export default CovidNewsWeb;
