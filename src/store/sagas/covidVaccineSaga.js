import {
  CREATE_VACCINE_APPOINTMENT,
  CREATE_VACCINE_APPOINTMENT_SUCCESS,
  CREATE_VACCINE_APPOINTMENT_FAILED,
  GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO,
  GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO_SUCCESS,
  GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO_FAILED,
  GET_VACCINE_APPOINTMENTS_BY_INFO,
  GET_VACCINE_APPOINTMENTS_BY_INFO_SUCCESS,
  GET_VACCINE_APPOINTMENTS_BY_INFO_FAILED,
  GET_VACCINATION_CENTRE_BY_ID,
  GET_VACCINATION_CENTRE_BY_ID_SUCCESS,
  GET_VACCINATION_CENTRE_BY_ID_FAILED,
  GET_VACCINE_APPOINTMENTS_BY_CREATED_BY,
  GET_VACCINE_APPOINTMENTS_BY_CREATED_BY_SUCCESS,
  GET_VACCINE_APPOINTMENTS_BY_CREATED_BY_FAILED,
  GET_VACCINATION_BY_NIC,
  GET_VACCINATION_BY_NIC_SUCCESS,
  GET_VACCINATION_BY_NIC_FAILED,
  SUCCESS_TOAST,
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  createVaccineAppointmentRequest,
  getScheduledVaccinationCentresByInfoRequest,
  getVaccineAppointmentsByInfoRequest,
  getVaccinationCentreByIdRequest,
  getVaccineAppointmentsByCreatedByRequest,
  getVaccinationByNicRequest,
} from "../../services";
import { displayError } from "../../utils";

export function* createVaccineAppointment({ userData, callback }) {
  try {
    const receivedData = yield call(createVaccineAppointmentRequest, userData);
    yield put({
      type: SUCCESS_TOAST,
      successMsg: "COVID vaccination appointment created successfully",
    });
    yield put({
      type: CREATE_VACCINE_APPOINTMENT_SUCCESS,
      responseCreateVaccineAppointment: receivedData.data.result,
    });
    callback();
  } catch (error) {
    yield put({
      type: CREATE_VACCINE_APPOINTMENT_FAILED,
      error: displayError(error),
    });
  }
}

export function* watchCreateVaccineAppointment() {
  yield takeLatest(CREATE_VACCINE_APPOINTMENT, createVaccineAppointment);
}

export function* getScheduledVaccinationCentresByInfo({ userData, callback }) {
  try {
    const receivedData = yield call(
      getScheduledVaccinationCentresByInfoRequest,
      userData
    );
    yield put({
      type: GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO_SUCCESS,
      resScheduledVaccinationCentresByInfo: receivedData.data.result,
    });
    let receivedDataList = receivedData.data.result.map((element) => ({
      ...element,
      timeSelected: "Forenoon",
      checked: false,
    }));
    callback(receivedDataList);
  } catch (error) {
    yield put({
      type: GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO_FAILED,
      error,
    });
  }
}

export function* watchGetScheduledVaccinationCentresByInfo() {
  yield takeLatest(
    GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO,
    getScheduledVaccinationCentresByInfo
  );
}

export function* getVaccineAppointmentsByInfo({ userData }) {
  try {
    const receivedData = yield call(
      getVaccineAppointmentsByInfoRequest,
      userData
    );
    yield put({
      type: GET_VACCINE_APPOINTMENTS_BY_INFO_SUCCESS,
      resVaccineAppointmentsByInfo: receivedData.data.result,
    });
  } catch (error) {
    yield put({
      type: GET_VACCINE_APPOINTMENTS_BY_INFO_FAILED,
      error,
    });
  }
}

export function* watchGetVaccineAppointmentsByInfo() {
  yield takeLatest(
    GET_VACCINE_APPOINTMENTS_BY_INFO,
    getVaccineAppointmentsByInfo
  );
}

export function* getVaccinationCentreById({ centreId }) {
  try {
    const receivedData = yield call(getVaccinationCentreByIdRequest, centreId);
    yield put({
      type: GET_VACCINATION_CENTRE_BY_ID_SUCCESS,
      resVaccinationCentreById: receivedData.data.result,
    });
  } catch (error) {
    yield put({
      type: GET_VACCINATION_CENTRE_BY_ID_FAILED,
      error,
    });
  }
}

export function* watchGetVaccinationCentreById() {
  yield takeLatest(GET_VACCINATION_CENTRE_BY_ID, getVaccinationCentreById);
}

export function* getVaccineAppointmentsByCreatedBy({ createdBy }) {
  try {
    const receivedData = yield call(
      getVaccineAppointmentsByCreatedByRequest,
      createdBy
    );
    yield put({
      type: GET_VACCINE_APPOINTMENTS_BY_CREATED_BY_SUCCESS,
      resVaccineAppointmentsByCreatedBy: receivedData.data.result,
    });
  } catch (error) {
    yield put({
      type: GET_VACCINE_APPOINTMENTS_BY_CREATED_BY_FAILED,
      error,
    });
  }
}

export function* watchGetVaccineAppointmentsByCreatedBy() {
  yield takeLatest(
    GET_VACCINE_APPOINTMENTS_BY_CREATED_BY,
    getVaccineAppointmentsByCreatedBy
  );
}

export function* getVaccinationByNic({ nicNumber }) {
  try {
    const receivedData = yield call(getVaccinationByNicRequest, nicNumber);
    yield put({
      type: GET_VACCINATION_BY_NIC_SUCCESS,
      resVaccinationByNic: receivedData.data.result,
    });
  } catch (error) {
    yield put({
      type: GET_VACCINATION_BY_NIC_FAILED,
      error,
    });
  }
}

export function* watchGetVaccinationByNic() {
  yield takeLatest(GET_VACCINATION_BY_NIC, getVaccinationByNic);
}
