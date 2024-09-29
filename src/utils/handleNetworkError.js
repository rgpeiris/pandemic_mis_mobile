import { errorToast } from "../store/actions";

/**
 * Util function to display error of network request
 * @param {Object} error
 * @param {String} errorMsg
 * @returns An action creator
 */
export const displayError = (error, errorMsg) => {
  if (error?.response?.data?.message) {
    return errorToast(error.response.data.message);
  } else if (error?.response?.data?.error_description) {
    return errorToast(error.response.data.error_description);
  } else if (errorMsg) {
    return errorToast(errorMsg);
  } else {
    return errorToast("Oops something went wrong!");
  }
};

/**
 * Util function to display error in login
 * @param {Object} error
 * @returns {String}
 */
export const loginError = (error) => {
  const err = error?.response?.data?.error;

  if (err === "invalid_grant") {
    return "Invalid user credentials";
  } else if (err === "0000") {
    return "Server Failed";
  } else if (err === "0001") {
    return "Password policy is not found";
  } else if (err === "0002") {
    return "Please change the password";
  } else if (err === "0003") {
    return "Your account has blocked. Please contact administrator";
  } else if (err === "0004") {
    const str = error?.response?.data?.error_description;
    let count = str.charAt(str.length - 1);
    return `Invalid Login. You have ${count} attempts remaining`;
  } else if (err === "0005") {
    return "Your account has expired. Please contact administrator";
  } else if (err === "0006") {
    return "Super user is not activated. Please contact administrator";
  } else if (err === "0007") {
    return "The company is not in active status. Please contact administrator";
  } else {
    return "Login failed, please try again";
  }
};
