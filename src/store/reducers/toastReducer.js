import {
  SUCCESS_TOAST,
  ERROR_TOAST,
  INFO_TOAST,
  WARNING_TOAST,
  HIDE_TOAST,
} from "../actions";

const initialState = {
  isOpen: false,
  severity: "success",
  message: "",
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_TOAST:
      const { successMsg } = action;
      return {
        ...state,
        isOpen: true,
        severity: "success",
        message: successMsg,
      };

    case ERROR_TOAST:
      const { errorMsg } = action;
      return {
        ...state,
        isOpen: true,
        severity: "error",
        message: errorMsg,
      };

    case INFO_TOAST:
      const { infoMsg } = action;
      return {
        ...state,
        isOpen: true,
        severity: "info",
        message: infoMsg,
      };

    case WARNING_TOAST:
      const { warningMsg } = action;
      return {
        ...state,
        isOpen: true,
        severity: "warning",
        message: warningMsg,
      };

    case HIDE_TOAST:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};

export default toastReducer;
