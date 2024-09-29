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
} from "./types";

export const createTestAppointment = (userData, callback) => {
  return {
    type: CREATE_TEST_APPOINTMENT,
    userData,
    callback,
  };
};

export const createTestAppointmentSuccess = (response) => ({
  type: CREATE_TEST_APPOINTMENT_SUCCESS,
  response,
});

export const createTestAppointmentFailed = (error) => ({
  type: CREATE_TEST_APPOINTMENT_FAILED,
  error,
});

export const getScheduledTestCentresByInfo = (userData, callback) => ({
  type: GET_SCHEDULED_TEST_CENTRES_BY_INFO,
  userData,
  callback,
});

export const getScheduledTestCentresByInfoSuccess = (response) => ({
  type: GET_SCHEDULED_TEST_CENTRES_BY_INFO_SUCCESS,
  response,
});

export const getScheduledTestCentresByInfoFailed = (error) => ({
  type: GET_SCHEDULED_TEST_CENTRES_BY_INFO_FAILED,
  error,
});

export const getTestAppointmentsByInfo = (userData) => ({
  type: GET_TEST_APPOINTMENTS_BY_INFO,
  userData,
});

export const getTestAppointmentsByInfoSuccess = (response) => ({
  type: GET_TEST_APPOINTMENTS_BY_INFO_SUCCESS,
  response,
});

export const getTestAppointmentsByInfoFailed = (error) => ({
  type: GET_TEST_APPOINTMENTS_BY_INFO_FAILED,
  error,
});

export const getTestCentreById = (centreId) => ({
  type: GET_TEST_CENTRE_BY_ID,
  centreId,
});

export const getTestCentreByIdSuccess = (response) => ({
  type: GET_TEST_CENTRE_BY_ID_SUCCESS,
  response,
});

export const getTestCentreByIdFailed = (error) => ({
  type: GET_TEST_CENTRE_BY_ID_FAILED,
  error,
});

export const getTestAppointmentsByCreatedBy = (createdBy) => ({
  type: GET_TEST_APPOINTMENTS_BY_CREATED_BY,
  createdBy,
});

export const getTestAppointmentsByCreatedBySuccess = (response) => ({
  type: GET_TEST_APPOINTMENTS_BY_CREATED_BY_SUCCESS,
  response,
});

export const getTestAppointmentsByCreatedByFailed = (error) => ({
  type: GET_TEST_APPOINTMENTS_BY_CREATED_BY_FAILED,
  error,
});
