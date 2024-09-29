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
} from "../actions";

export const initialState = {
  isCreatingTestAppointment: false,
  isErrorCreatingTestAppointment: false,
  createdTestAppointment: {},
  isGettingScheduledTestCentresByInfo: false,
  isErrorGettingScheduledTestCentresByInfo: false,
  scheduledTestCentresByInfo: [],
  isGettingTestAppointmentsByInfo: false,
  isErrorGettingTestAppointmentsByInfo: false,
  testAppointmentsByInfo: [],
  isGettingTestCentreById: false,
  isErrorGettingTestCentreById: false,
  testCentreById: [],
  isGettingTestAppointmentsByCreatedBy: false,
  isErrorGettingTestAppointmentsByCreatedBy: false,
  testAppointmentsByCreatedBy: [],
};

const covidTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TEST_APPOINTMENT:
      return {
        ...state,
        isCreatingTestAppointment: true,
        isErrorCreatingTestAppointment: false,
      };

    case CREATE_TEST_APPOINTMENT_SUCCESS:
      const { resCreateTestAppointment } = action;
      return {
        ...state,
        isCreatingTestAppointment: false,
        createdTestAppointment: resCreateTestAppointment,
      };

    case CREATE_TEST_APPOINTMENT_FAILED:
      return {
        ...state,
        isCreatingTestAppointment: false,
        isErrorCreatingTestAppointment: true,
      };

    case GET_SCHEDULED_TEST_CENTRES_BY_INFO:
      return {
        ...state,
        isGettingScheduledTestCentresByInfo: true,
        isErrorGettingScheduledTestCentresByInfo: false,
      };

    case GET_SCHEDULED_TEST_CENTRES_BY_INFO_SUCCESS:
      const { resScheduledTestCentresByInfo } = action;
      return {
        ...state,
        isGettingScheduledTestCentresByInfo: false,
        scheduledTestCentresByInfo: resScheduledTestCentresByInfo,
      };

    case GET_SCHEDULED_TEST_CENTRES_BY_INFO_FAILED:
      return {
        ...state,
        isGettingScheduledTestCentresByInfo: false,
        isErrorGettingScheduledTestCentresByInfo: true,
      };

    case GET_TEST_APPOINTMENTS_BY_INFO:
      return {
        ...state,
        isGettingTestAppointmentsByInfo: true,
        isErrorGettingTestAppointmentsByInfo: false,
      };

    case GET_TEST_APPOINTMENTS_BY_INFO_SUCCESS:
      const { resTestAppointmentsByInfo } = action;
      return {
        ...state,
        isGettingTestAppointmentsByInfo: false,
        testAppointmentsByInfo: resTestAppointmentsByInfo,
      };

    case GET_TEST_APPOINTMENTS_BY_INFO_FAILED:
      return {
        ...state,
        isGettingTestAppointmentsByInfo: false,
        isErrorGettingTestAppointmentsByInfo: true,
      };

    case GET_TEST_CENTRE_BY_ID:
      return {
        ...state,
        isGettingTestCentreById: true,
        isErrorGettingTestCentreById: false,
      };

    case GET_TEST_CENTRE_BY_ID_SUCCESS:
      const { resTestCentreById } = action;
      return {
        ...state,
        isGettingTestCentreById: false,
        testCentreById: resTestCentreById,
      };

    case GET_TEST_CENTRE_BY_ID_FAILED:
      return {
        ...state,
        isGettingTestCentreById: false,
        isErrorGettingTestCentreById: true,
      };

    case GET_TEST_APPOINTMENTS_BY_CREATED_BY:
      return {
        ...state,
        isGettingTestAppointmentsByCreatedBy: true,
        isErrorGettingTestAppointmentsByCreatedBy: false,
      };

    case GET_TEST_APPOINTMENTS_BY_CREATED_BY_SUCCESS:
      const { resTestAppointmentsByCreatedBy } = action;
      return {
        ...state,
        isGettingTestAppointmentsByCreatedBy: false,
        testAppointmentsByCreatedBy: resTestAppointmentsByCreatedBy,
      };

    case GET_TEST_APPOINTMENTS_BY_CREATED_BY_FAILED:
      return {
        ...state,
        isGettingTestAppointmentsByCreatedBy: false,
        isErrorGettingTestAppointmentsByCreatedBy: true,
      };

    default:
      return state;
  }
};

export default covidTestReducer;
