import {
  CREATE_TEST_APPOINTMENT,
  CREATE_TEST_APPOINTMENT_SUCCESS,
  CREATE_TEST_APPOINTMENT_FAILED,
  GET_SCHEDULED_TEST_CENTRES_BY_INFO,
  GET_SCHEDULED_TEST_CENTRES_BY_INFO_SUCCESS,
  GET_SCHEDULED_TEST_CENTRES_BY_INFO_FAILED,
  GET_TEST_APPOINTMENTS_BY_INFO,
  GET_TEST_APPOINTMENTS_BY_INFO_SUCCESS,
  GET_TEST_APPOINTMENTS_BY_INFO_FAILED,
  GET_TEST_CENTRE_BY_ID,
  GET_TEST_CENTRE_BY_ID_SUCCESS,
  GET_TEST_CENTRE_BY_ID_FAILED,
  GET_TEST_APPOINTMENTS_BY_CREATED_BY,
  GET_TEST_APPOINTMENTS_BY_CREATED_BY_SUCCESS,
  GET_TEST_APPOINTMENTS_BY_CREATED_BY_FAILED,
  SUCCESS_TOAST,
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  createTestAppointmentRequest,
  getScheduledTestCentresByInfoRequest,
  getTestAppointmentsByInfoRequest,
  getTestCentreByIdRequest,
  getTestAppointmentsByCreatedByRequest,
} from "../../services";
import { displayError } from "../../utils";

export function* createTestAppointment({ userData, callback }) {
  try {
    const receivedData = yield call(createTestAppointmentRequest, userData);
    yield put({
      type: SUCCESS_TOAST,
      successMsg: "COVID viral test appointment created successfully",
    });
    yield put({
      type: CREATE_TEST_APPOINTMENT_SUCCESS,
      resCreateTestAppointment: receivedData.data.result,
    });
    callback();
  } catch (error) {
    yield put({
      type: CREATE_TEST_APPOINTMENT_FAILED,
      error: displayError(error),
    });
  }
}

export function* watchCreateTestAppointment() {
  yield takeLatest(CREATE_TEST_APPOINTMENT, createTestAppointment);
}

export function* getScheduledTestCentresByInfo({ userData, callback }) {
  try {
    const receivedData = yield call(
      getScheduledTestCentresByInfoRequest,
      userData
    );
    yield put({
      type: GET_SCHEDULED_TEST_CENTRES_BY_INFO_SUCCESS,
      resScheduledTestCentresByInfo: receivedData.data.result,
    });
    let receivedDataList = receivedData.data.result.map((element) => ({
      ...element,
      timeSelected: "Forenoon",
      checked: false,
    }));
    callback(receivedDataList);
  } catch (error) {
    yield put({
      type: GET_SCHEDULED_TEST_CENTRES_BY_INFO_FAILED,
      error,
    });
  }
}

export function* watchGetScheduledTestCentresByInfo() {
  yield takeLatest(
    GET_SCHEDULED_TEST_CENTRES_BY_INFO,
    getScheduledTestCentresByInfo
  );
}

export function* getTestAppointmentsByInfo({ userData }) {
  try {
    const receivedData = yield call(getTestAppointmentsByInfoRequest, userData);
    yield put({
      type: GET_TEST_APPOINTMENTS_BY_INFO_SUCCESS,
      resTestAppointmentsByInfo: receivedData.data.result,
    });
  } catch (error) {
    yield put({
      type: GET_TEST_APPOINTMENTS_BY_INFO_FAILED,
      error,
    });
  }
}

export function* watchGetTestAppointmentsByInfo() {
  yield takeLatest(GET_TEST_APPOINTMENTS_BY_INFO, getTestAppointmentsByInfo);
}

export function* getTestCentreById({ centreId }) {
  try {
    const receivedData = yield call(getTestCentreByIdRequest, centreId);
    yield put({
      type: GET_TEST_CENTRE_BY_ID_SUCCESS,
      resTestCentreById: receivedData.data.result,
    });
  } catch (error) {
    yield put({
      type: GET_TEST_CENTRE_BY_ID_FAILED,
      error,
    });
  }
}

export function* watchGetTestCentreById() {
  yield takeLatest(GET_TEST_CENTRE_BY_ID, getTestCentreById);
}

export function* getTestAppointmentsByCreatedBy({ createdBy }) {
  try {
    const receivedData = yield call(
      getTestAppointmentsByCreatedByRequest,
      createdBy
    );
    yield put({
      type: GET_TEST_APPOINTMENTS_BY_CREATED_BY_SUCCESS,
      resTestAppointmentsByCreatedBy: receivedData.data.result,
    });
  } catch (error) {
    yield put({
      type: GET_TEST_APPOINTMENTS_BY_CREATED_BY_FAILED,
      error,
    });
  }
}

export function* watchGetTestAppointmentsByCreatedBy() {
  yield takeLatest(
    GET_TEST_APPOINTMENTS_BY_CREATED_BY,
    getTestAppointmentsByCreatedBy
  );
}
