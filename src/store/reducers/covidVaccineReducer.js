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
} from "../actions";

export const initialState = {
  isCreatingVaccineAppointment: false,
  isErrorCreatingVaccineAppointment: false,
  createdVaccineAppointment: {},
  isGettingScheduledVaccinationCentresByInfo: false,
  isErrorGettingScheduledVaccinationCentresByInfo: false,
  scheduledVaccinationCentresByInfo: [],
  isGettingVaccineAppointmentsByInfo: false,
  isErrorGettingVaccineAppointmentsByInfo: false,
  vaccineAppointmentsByInfo: [],
  isGettingVaccinationCentreById: false,
  isErrorGettingVaccinationCentreById: false,
  vaccinationCentreById: [],
  isGettingVaccineAppointmentsByCreatedBy: false,
  isErrorGettingVaccineAppointmentsByCreatedBy: false,
  vaccineAppointmentsByCreatedBy: [],
  isGettingVaccinationByNic: false,
  isErrorGettingVaccinationByNic: false,
  vaccinationByNic: [],
};

const covidVaccineReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_VACCINE_APPOINTMENT:
      return {
        ...state,
        isCreatingVaccineAppointment: true,
        isErrorCreatingVaccineAppointment: false,
      };

    case CREATE_VACCINE_APPOINTMENT_SUCCESS:
      const { responseCreateVaccineAppointment } = action;
      return {
        ...state,
        isCreatingVaccineAppointment: false,
        createdVaccineAppointment: responseCreateVaccineAppointment,
      };

    case CREATE_VACCINE_APPOINTMENT_FAILED:
      return {
        ...state,
        isCreatingVaccineAppointment: false,
        isErrorCreatingVaccineAppointment: true,
      };

    case GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO:
      return {
        ...state,
        isGettingScheduledVaccinationCentresByInfo: true,
        isErrorGettingScheduledVaccinationCentresByInfo: false,
      };

    case GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO_SUCCESS:
      const { resScheduledVaccinationCentresByInfo } = action;
      return {
        ...state,
        isGettingScheduledVaccinationCentresByInfo: false,
        scheduledVaccinationCentresByInfo: resScheduledVaccinationCentresByInfo,
      };

    case GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO_FAILED:
      return {
        ...state,
        isGettingScheduledVaccinationCentresByInfo: false,
        isErrorGettingScheduledVaccinationCentresByInfo: true,
      };

    case GET_VACCINE_APPOINTMENTS_BY_INFO:
      return {
        ...state,
        isGettingVaccineAppointmentsByInfo: true,
        isErrorGettingVaccineAppointmentsByInfo: false,
      };

    case GET_VACCINE_APPOINTMENTS_BY_INFO_SUCCESS:
      const { resVaccineAppointmentsByInfo } = action;
      return {
        ...state,
        isGettingVaccineAppointmentsByInfo: false,
        vaccineAppointmentsByInfo: resVaccineAppointmentsByInfo,
      };

    case GET_VACCINE_APPOINTMENTS_BY_INFO_FAILED:
      return {
        ...state,
        isGettingVaccineAppointmentsByInfo: false,
        isErrorGettingVaccineAppointmentsByInfo: true,
      };

    case GET_VACCINATION_CENTRE_BY_ID:
      return {
        ...state,
        isGettingVaccinationCentreById: true,
        isErrorGettingVaccinationCentreById: false,
      };

    case GET_VACCINATION_CENTRE_BY_ID_SUCCESS:
      const { resVaccinationCentreById } = action;
      return {
        ...state,
        isGettingVaccinationCentreById: false,
        vaccinationCentreById: resVaccinationCentreById,
      };

    case GET_VACCINATION_CENTRE_BY_ID_FAILED:
      return {
        ...state,
        isGettingVaccinationCentreById: false,
        isErrorGettingVaccinationCentreById: true,
      };

    case GET_VACCINE_APPOINTMENTS_BY_CREATED_BY:
      return {
        ...state,
        isGettingVaccineAppointmentsByCreatedBy: true,
        isErrorGettingVaccineAppointmentsByCreatedBy: false,
      };

    case GET_VACCINE_APPOINTMENTS_BY_CREATED_BY_SUCCESS:
      const { resVaccineAppointmentsByCreatedBy } = action;
      return {
        ...state,
        isGettingVaccineAppointmentsByCreatedBy: false,
        vaccineAppointmentsByCreatedBy: resVaccineAppointmentsByCreatedBy,
      };

    case GET_VACCINE_APPOINTMENTS_BY_CREATED_BY_FAILED:
      return {
        ...state,
        isGettingVaccineAppointmentsByCreatedBy: false,
        isErrorGettingVaccineAppointmentsByCreatedBy: true,
      };

    case GET_VACCINATION_BY_NIC:
      return {
        ...state,
        isGettingVaccinationByNic: true,
        isErrorGettingVaccinationByNic: false,
      };

    case GET_VACCINATION_BY_NIC_SUCCESS:
      const { resVaccinationByNic } = action;
      return {
        ...state,
        isGettingVaccinationByNic: false,
        vaccinationByNic: resVaccinationByNic,
      };

    case GET_VACCINATION_BY_NIC_FAILED:
      return {
        ...state,
        isGettingVaccinationByNic: false,
        isErrorGettingVaccinationByNic: true,
      };

    default:
      return state;
  }
};

export default covidVaccineReducer;
