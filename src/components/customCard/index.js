import React from "react";
import PropTypes from "prop-types";

const CustomCard = React.forwardRef((props, ref) => {
  const { isMobile, children, style, onClick } = props;
  return (
    <div
      ref={ref}
      style={{
        borderRadius: isMobile ? "4px" : "12px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 8px #0000001D",
        padding: isMobile ? "16px 8px" : "20px 20px 20px 20px",
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

CustomCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
};

CustomCard.defaultProps = {
  isMobile: false,
};

export default CustomCard;
