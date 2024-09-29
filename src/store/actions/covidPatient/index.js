import {
  GET_PATIENTS_OVERALL_STATS,
  GET_PATIENTS_OVERALL_STATS_SUCCESS,
  GET_PATIENTS_OVERALL_STATS_FAILED,
  GET_PATIENTS_BY_GUARDIAN,
  GET_PATIENTS_BY_GUARDIAN_SUCCESS,
  GET_PATIENTS_BY_GUARDIAN_FAILED,
} from "./types";

export const getPatientsOverallStats = () => ({
  type: GET_PATIENTS_OVERALL_STATS,
});

export const getPatientsOverallStatsSuccess = (response) => ({
  type: GET_PATIENTS_OVERALL_STATS_SUCCESS,
  response,
});

export const getPatientsOverallStatsFailed = (error) => ({
  type: GET_PATIENTS_OVERALL_STATS_FAILED,
  error,
});

export const getPatientsByGuardian = (userName) => ({
  type: GET_PATIENTS_BY_GUARDIAN,
  userName,
});

export const getPatientsByGuardianSuccess = (response) => ({
  type: GET_PATIENTS_BY_GUARDIAN_SUCCESS,
  response,
});

export const getPatientsByGuardianFailed = (error) => ({
  type: GET_PATIENTS_BY_GUARDIAN_FAILED,
  error,
});
