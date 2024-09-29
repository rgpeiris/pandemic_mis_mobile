import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { Clear } from "@mui/icons-material";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "60%",
    },
  },
};

const CustomSelect = ({
  label,
  selectData,
  menuItemValue,
  menuItemText,
  isShowPlaceholder,
  isValid,
  isClear,
  handleClear,
  formFullWith,
  ...props
}) => {
  return (
    <FormControl fullWidth={formFullWith} error={!isValid}>
      <InputLabel shrink={isShowPlaceholder}>{label}</InputLabel>
      <Select
        {...props}
        MenuProps={MenuProps}
        defaultValue=""
        displayEmpty={isShowPlaceholder}
        input={<OutlinedInput notched={isShowPlaceholder} label={label} />}
        startAdornment={
          <IconButton
            sx={{ display: isClear === true ? "" : "none" }}
            onClick={handleClear}
          >
            <Clear />
          </IconButton>
        }
      >
        <MenuItem disabled value="">
          <em>
            {selectData.length === 0
              ? "No Data Available"
              : isShowPlaceholder && "Select"}
          </em>
        </MenuItem>

        {selectData.map((item) => {
          let key = menuItemValue ? item[menuItemValue] : item.key;
          let description = menuItemText
            ? item[menuItemText]
            : item.description;
          return (
            <MenuItem key={key} value={key}>
              {description}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText style={{ display: isValid ? "none" : "block" }}>
        {"* Required Field"}
      </FormHelperText>
    </FormControl>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  selectData: PropTypes.array.isRequired,
  menuItemValue: PropTypes.string,
  menuItemText: PropTypes.string,
  isShowPlaceholder: PropTypes.bool,
  isValid: PropTypes.bool,
  isClear: PropTypes.bool,
  handleClear: PropTypes.func,
  formFullWith: PropTypes.bool,
};

CustomSelect.defaultProps = {
  isValid: true,
  isClear: false,
  formFullWith: true,
};

export default CustomSelect;
