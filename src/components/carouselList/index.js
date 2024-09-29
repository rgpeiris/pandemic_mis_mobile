import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import PropTypes from "prop-types";

import Loading from "../../components/loading";
import { Assets } from "../../assets/images";

const ANIMATION_DURATION = 1500;

const CarouselList = ({
  list,
  interval,
  loading,
  navButtonsAlwaysVisible,
  style,
}) => {
  const [isError, setIsError] = useState(false);

  const hanleError = () => {
    setIsError(true);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Carousel
          indicators={false}
          duration={ANIMATION_DURATION}
          interval={interval}
          navButtonsAlwaysVisible={navButtonsAlwaysVisible}
          navButtonsProps={{
            style: style,
          }}
        >
          {list.map((item) => (
            <img
              onError={hanleError}
              key={item.name}
              src={!isError ? item.url : Assets.dashboard.default_banner}
              alt={item.name}
              style={{
                width: "100%",
                height: "100px",
                borderRadius: "12px",
              }}
            />
          ))}
        </Carousel>
      )}
    </>
  );
};

CarouselList.propTypes = {
  list: PropTypes.array,
  duration: PropTypes.number,
  loading: PropTypes.bool,
};

export default CarouselList;
