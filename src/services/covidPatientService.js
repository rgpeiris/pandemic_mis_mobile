import { httpCovidPatient } from "./httpClient";

export const getCovidPatientsOverallStatsRequest = () => {
  return httpCovidPatient.get(`pandemic-patients-overall-stats`);
};

export const getCovidPatientsByGuardianRequest = (userName) => {
  return httpCovidPatient.get(
    `pandemic-patient-by-guardian?username=${userName}`
  );
};
