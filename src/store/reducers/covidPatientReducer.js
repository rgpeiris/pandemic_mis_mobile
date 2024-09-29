import {
  GET_PATIENTS_OVERALL_STATS,
  GET_PATIENTS_OVERALL_STATS_SUCCESS,
  GET_PATIENTS_OVERALL_STATS_FAILED,
  GET_PATIENTS_BY_GUARDIAN,
  GET_PATIENTS_BY_GUARDIAN_SUCCESS,
  GET_PATIENTS_BY_GUARDIAN_FAILED,
} from "../actions";

export const initialState = {
  isGettingPatientsOverallStats: false,
  isErrorGettingPatientsOverallStats: false,
  covidPatientsOverallStats: [],
  isGettingPatientsByGuardian: false,
  isErrorGettingPatientsByGuardian: false,
  covidPatientsByGuardian: [],
};

const covidPatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS_OVERALL_STATS:
      return {
        ...state,
        isGettingPatientsOverallStats: true,
        isErrorGettingPatientsOverallStats: false,
      };

    case GET_PATIENTS_OVERALL_STATS_SUCCESS:
      const { resCovidPatientsOverallStats } = action;
      return {
        ...state,
        isGettingPatientsOverallStats: false,
        covidPatientsOverallStats: resCovidPatientsOverallStats,
      };

    case GET_PATIENTS_OVERALL_STATS_FAILED:
      return {
        ...state,
        isGettingPatientsOverallStats: false,
        isErrorGettingPatientsOverallStats: true,
      };

    case GET_PATIENTS_BY_GUARDIAN:
      return {
        ...state,
        isGettingPatientsByGuardian: true,
        isErrorGettingPatientsByGuardian: false,
      };

    case GET_PATIENTS_BY_GUARDIAN_SUCCESS:
      const { resCovidPatientsByGuardian } = action;
      return {
        ...state,
        isGettingPatientsByGuardian: false,
        covidPatientsByGuardian: resCovidPatientsByGuardian,
      };

    case GET_PATIENTS_BY_GUARDIAN_FAILED:
      return {
        ...state,
        isGettingPatientsByGuardian: false,
        isErrorGettingPatientsByGuardian: true,
      };

    default:
      return state;
  }
};

export default covidPatientReducer;
