import {
  SUCCESS_TOAST,
  ERROR_TOAST,
  INFO_TOAST,
  WARNING_TOAST,
  HIDE_TOAST,
} from "./types";

export const successToast = (successMsg) => ({
  type: SUCCESS_TOAST,
  successMsg,
});

export const errorToast = (errorMsg) => ({
  type: ERROR_TOAST,
  errorMsg,
});

export const infoToast = (infoMsg) => ({
  type: INFO_TOAST,
  infoMsg,
});

export const warningToast = (warningMsg) => ({
  type: WARNING_TOAST,
  warningMsg,
});

export const hideToast = () => ({
  type: HIDE_TOAST,
});
