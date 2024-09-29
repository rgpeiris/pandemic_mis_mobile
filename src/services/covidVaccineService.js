import { httpCovidVaccine } from "./httpClient";

export const createVaccineAppointmentRequest = (userData) => {
  return httpCovidVaccine.post(`vaccination-appointment`, userData);
};

export const getScheduledVaccinationCentresByInfoRequest = (userData) => {
  return httpCovidVaccine.get(
    `scheduled-vaccination-centres?district=${userData.district}&city=${userData.city}&date=${userData.date}`
  );
};

export const getVaccineAppointmentsByInfoRequest = (userData) => {
  return httpCovidVaccine.get(
    `vaccination-appointments?vaccinationCentreId=${userData.vaccinationCentreId}&createdBy=${userData.createdBy}&date=${userData.date}`
  );
};

export const getVaccinationCentreByIdRequest = (centreId) => {
  return httpCovidVaccine.get(`vaccination-centre/${centreId}`);
};

export const getVaccineAppointmentsByCreatedByRequest = (createdBy) => {
  return httpCovidVaccine.get(`vaccination-appointments/${createdBy}`);
};

export const getVaccinationByNicRequest = (nicNumber) => {
  return httpCovidVaccine.get(`vaccination/${nicNumber}`);
};
