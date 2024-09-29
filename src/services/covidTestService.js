import { httpCovidTest } from "./httpClient";

export const createTestAppointmentRequest = (userData) => {
  return httpCovidTest.post(`viral-test-appointment`, userData);
};

export const getScheduledTestCentresByInfoRequest = (userData) => {
  return httpCovidTest.get(
    `scheduled-viral-test-centres?district=${userData.district}&city=${userData.city}&date=${userData.date}`
  );
};

export const getTestAppointmentsByInfoRequest = (userData) => {
  return httpCovidTest.get(
    `viral-test-appointments?testCentreId=${userData.testCentreId}&createdBy=${userData.createdBy}&date=${userData.date}`
  );
};

export const getTestCentreByIdRequest = (centreId) => {
  return httpCovidTest.get(`viral-test-centre/${centreId}`);
};

export const getTestAppointmentsByCreatedByRequest = (createdBy) => {
  return httpCovidTest.get(`viral-test-appointments/${createdBy}`);
};
