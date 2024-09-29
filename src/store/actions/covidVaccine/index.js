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
} from "./types";

export const createVaccineAppointment = (userData, callback) => {
  return {
    type: CREATE_VACCINE_APPOINTMENT,
    userData,
    callback,
  };
};

export const createVaccineAppointmentSuccess = (response) => ({
  type: CREATE_VACCINE_APPOINTMENT_SUCCESS,
  response,
});

export const createVaccineAppointmentFailed = (error) => ({
  type: CREATE_VACCINE_APPOINTMENT_FAILED,
  error,
});

export const getScheduledVaccinationCentresByInfo = (userData, callback) => ({
  type: GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO,
  userData,
  callback,
});

export const getScheduledVaccinationCentresByInfoSuccess = (response) => ({
  type: GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO_SUCCESS,
  response,
});

export const getScheduledVaccinationCentresByInfoFailed = (error) => ({
  type: GET_SCHEDULED_VACCINATION_CENTRES_BY_INFO_FAILED,
  error,
});

export const getVaccineAppointmentsByInfo = (userData) => ({
  type: GET_VACCINE_APPOINTMENTS_BY_INFO,
  userData,
});

export const getVaccineAppointmentsByInfoSuccess = (response) => ({
  type: GET_VACCINE_APPOINTMENTS_BY_INFO_SUCCESS,
  response,
});

export const getVaccineAppointmentsByInfoFailed = (error) => ({
  type: GET_VACCINE_APPOINTMENTS_BY_INFO_FAILED,
  error,
});

export const getVaccinationCentreById = (centreId) => ({
  type: GET_VACCINATION_CENTRE_BY_ID,
  centreId,
});

export const getVaccinationCentreByIdSuccess = (response) => ({
  type: GET_VACCINATION_CENTRE_BY_ID_SUCCESS,
  response,
});

export const getVaccinationCentreByIdFailed = (error) => ({
  type: GET_VACCINATION_CENTRE_BY_ID_FAILED,
  error,
});

export const getVaccineAppointmentsByCreatedBy = (createdBy) => ({
  type: GET_VACCINE_APPOINTMENTS_BY_CREATED_BY,
  createdBy,
});

export const getVaccineAppointmentsByCreatedBySuccess = (response) => ({
  type: GET_VACCINE_APPOINTMENTS_BY_CREATED_BY_SUCCESS,
  response,
});

export const getVaccineAppointmentsByCreatedByFailed = (error) => ({
  type: GET_VACCINE_APPOINTMENTS_BY_CREATED_BY_FAILED,
  error,
});

export const getVaccinationByNic = (nicNumber) => ({
  type: GET_VACCINATION_BY_NIC,
  nicNumber,
});

export const getVaccinationByNicSuccess = (response) => ({
  type: GET_VACCINATION_BY_NIC_SUCCESS,
  response,
});

export const getVaccinationByNicFailed = (error) => ({
  type: GET_VACCINATION_BY_NIC_FAILED,
  error,
});
