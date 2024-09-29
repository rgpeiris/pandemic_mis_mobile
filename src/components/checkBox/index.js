import * as React from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const CheckBox = ({ label, checked, onChange, labelStyle, ...props }) => {
  return (
    <FormControlLabel
      label={
        <Typography sx={{ fontSize: "14px", color: "#333333", ...labelStyle }}>
          {label}
        </Typography>
      }
      control={
        <Checkbox
          size="small"
          checkedIcon={<CheckBoxOutlinedIcon />}
          checked={checked}
          onChange={onChange}
          {...props}
          sx={{
            color: "#707070",
            "&.Mui-checked": {
              color: "#DC3545",
            },
          }}
        />
      }
    />
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default CheckBox;
