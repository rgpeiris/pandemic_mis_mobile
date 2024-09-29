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
  SUCCESS_TOAST,
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  userRegisterRequest,
  updateUserRequest,
  getUserByIdRequest,
} from "../../services";
import { displayError } from "../../utils";

export function* userLogin({ userData, navigate }) {
  try {
    const recievedData = yield call(loginRequest, userData);
    yield put({ type: SUCCESS_TOAST, successMsg: "Login successful" });
    yield put({
      type: USER_LOGIN_SUCCESS,
      response: recievedData.data.result,
    });
    navigate("/", { replace: true });
  } catch (error) {
    yield put({ type: USER_LOGIN_FAILED, error: displayError(error) });
  }
}

export function* watchUserLogin() {
  yield takeLatest(USER_LOGIN, userLogin);
}

export function* userLogout({ isSessionExpired }) {
  try {
    if (isSessionExpired) {
      const error = new Error("refresh token has expired");
      yield put(displayError(error, "Your session has expired!"));
      yield put({ type: USER_LOGOUT });
    } else {
      yield put({
        type: SUCCESS_TOAST,
        successMsg: "Logout successful",
      });
    }
  } catch (error) {
    yield put(displayError(error, "Logout failed"));
  }
}

export function* watchUserLogout() {
  yield takeLatest(USER_LOGOUT, userLogout);
}

export function* userRegisterMobile({ userData, navigate }) {
  try {
    yield call(userRegisterRequest, userData);
    yield put({
      type: SUCCESS_TOAST,
      successMsg: "User registered successfully",
    });
    yield put({
      type: USER_REGISTER_MOBILE_SUCCESS,
    });
    navigate("/login", { replace: true });
  } catch (error) {
    yield put({
      type: USER_REGISTER_MOBILE_FAILED,
      error: displayError(error),
    });
  }
}

export function* watchUserRegisterMobile() {
  yield takeLatest(USER_REGISTER_MOBILE, userRegisterMobile);
}

export function* updateUser({ userId, userData, callback }) {
  try {
    yield call(updateUserRequest, userId, userData);
    yield put({
      type: SUCCESS_TOAST,
      successMsg: "Profile updated successfully",
    });
    yield put({
      type: UPDATE_USER_SUCCESS,
    });
    callback();
  } catch (error) {
    yield put({ type: UPDATE_USER_FAILED, error: displayError(error) });
  }
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER, updateUser);
}

export function* getUserById({ username }) {
  try {
    const receivedData = yield call(getUserByIdRequest, username);
    yield put({
      type: GET_USER_BY_ID_SUCCESS,
      resSystemUserById: receivedData.data.result,
    });
  } catch (error) {
    yield put({ type: GET_USER_BY_ID_FAILED, error });
  }
}

export function* watchGetUserById() {
  yield takeLatest(GET_USER_BY_ID, getUserById);
}
