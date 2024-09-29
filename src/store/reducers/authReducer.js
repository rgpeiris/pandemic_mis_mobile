import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REGISTER_MOBILE,
  USER_REGISTER_MOBILE_SUCCESS,
  USER_REGISTER_MOBILE_FAILED,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILED,
  USER_LOGOUT,
  CLEAR_ERROR,
} from "../actions";

export const initialState = {
  isUserLogging: false,
  isErrorUserLogging: false,
  error: "",
  isLoggedIn: false,
  access_token: "",
  refresh_token: "",
  loggedInUser: {},
  isUserRegisteringMobile: false,
  isErrorUserRegisteringMobile: false,
  isUpdatingUser: false,
  isErrorUpdatingUser: false,
  isGettingUserById: false,
  isErrorGettingUserById: false,
  systemUserById: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        error: "",
        isUserLogging: true,
        isErrorUserLogging: false,
      };

    case USER_LOGIN_SUCCESS:
      const { response } = action;
      return {
        ...state,
        isUserLogging: false,
        access_token: response.token,
        refresh_token: response.token,
        loggedInUser: response.user,
        isLoggedIn: true,
      };

    case USER_LOGIN_FAILED:
      const { error } = action;
      return {
        ...state,
        isUserLogging: false,
        isErrorUserLogging: true,
        error: error.errorMsg,
      };

    case USER_REGISTER_MOBILE:
      return {
        ...state,
        isUserRegisteringMobile: true,
        isErrorUserRegisteringMobile: false,
      };

    case USER_REGISTER_MOBILE_SUCCESS:
      return {
        ...state,
        isUserRegisteringMobile: false,
      };

    case USER_REGISTER_MOBILE_FAILED:
      return {
        ...state,
        isUserRegisteringMobile: false,
        isErrorUserRegisteringMobile: true,
      };

    case UPDATE_USER:
      return {
        ...state,
        isUpdatingUser: true,
        isErrorUpdatingUser: false,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdatingUser: false,
      };

    case UPDATE_USER_FAILED:
      return {
        ...state,
        isUpdatingUser: false,
        isErrorUpdatingUser: true,
      };

    case GET_USER_BY_ID:
      return {
        ...state,
        isGettingUserById: true,
        isErrorGettingUserById: false,
      };

    case GET_USER_BY_ID_SUCCESS:
      const { resSystemUserById } = action;
      return {
        ...state,
        isGettingUserById: false,
        systemUserById: resSystemUserById,
      };

    case GET_USER_BY_ID_FAILED:
      return {
        ...state,
        isGettingUserById: false,
        isErrorGettingUserById: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        access_token: "",
        refresh_token: "",
        loggedInUser: {},
      };

    case CLEAR_ERROR:
      return {
        ...state,
        isErrorUserLogging: false,
        error: "",
      };

    default:
      return state;
  }
};

export default authReducer;
