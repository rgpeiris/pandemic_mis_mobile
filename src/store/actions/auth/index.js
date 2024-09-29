import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_REGISTER_MOBILE,
  USER_REGISTER_MOBILE_SUCCESS,
  USER_REGISTER_MOBILE_FAILED,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILED,
  CLEAR_ERROR,
} from "./types";

export const userLogin = (userData, navigate) => {
  return {
    type: USER_LOGIN,
    userData,
    navigate,
  };
};

export const userLoginSuccess = (response) => ({
  type: USER_LOGIN_SUCCESS,
  response,
});

export const userLoginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  error,
});

export const userRegisterMobile = (userData, navigate) => {
  return {
    type: USER_REGISTER_MOBILE,
    userData,
    navigate,
  };
};

export const userRegisterMobileSuccess = (response) => ({
  type: USER_REGISTER_MOBILE_SUCCESS,
  response,
});

export const userRegisterMobileFailed = (error) => ({
  type: USER_REGISTER_MOBILE_FAILED,
  error,
});

export const userLogout = (isSessionExpired) => ({
  type: USER_LOGOUT,
  isSessionExpired,
});

export const clearLoginError = () => ({
  type: CLEAR_ERROR,
});

export const updateUser = (userId, userData, callback) => {
  return {
    type: UPDATE_USER,
    userId,
    userData,
    callback,
  };
};

export const updateUserSuccess = (response) => ({
  type: UPDATE_USER_SUCCESS,
  response,
});

export const updateUserFailed = (error) => ({
  type: UPDATE_USER_FAILED,
  error,
});

export const getUserById = (username) => {
  return {
    type: GET_USER_BY_ID,
    username,
  };
};

export const getUserByIdSuccess = (response) => ({
  type: GET_USER_BY_ID_SUCCESS,
  response,
});

export const getUserByIdFailed = (error) => ({
  type: GET_USER_BY_ID_FAILED,
  error,
});
