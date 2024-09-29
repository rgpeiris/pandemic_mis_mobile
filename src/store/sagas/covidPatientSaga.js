import {
  GET_PATIENTS_OVERALL_STATS,
  GET_PATIENTS_OVERALL_STATS_SUCCESS,
  GET_PATIENTS_OVERALL_STATS_FAILED,
  GET_PATIENTS_BY_GUARDIAN,
  GET_PATIENTS_BY_GUARDIAN_SUCCESS,
  GET_PATIENTS_BY_GUARDIAN_FAILED,
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  getCovidPatientsOverallStatsRequest,
  getCovidPatientsByGuardianRequest,
} from "../../services";

export function* getPatientsOverallStats() {
  try {
    const receivedData = yield call(getCovidPatientsOverallStatsRequest);
    var overallStatus = [
      { type: "TOTAL CONFIRMED", count: 0 },
      { type: "ACTIVE", count: 0 },
      { type: "RECOVERED", count: 0 },
      { type: "DEATHS", count: 0 },
    ];

    for (var key in receivedData.data.result) {
      var obj = receivedData.data.result[key];

      if (
        obj.status === "Registration Completed" ||
        obj.status === "Home Quarantined" ||
        obj.status === "Hospitalized" ||
        obj.status === "Approval Pending"
      ) {
        overallStatus[1].count += obj.count;
      }
      if (obj.status === "Released") {
        overallStatus[2].count += obj.count;
      }
      if (obj.status === "Deceased" || obj.type === "Deceased After Realease") {
        overallStatus[3].count += obj.count;
      }
    }

    overallStatus[0].count =
      overallStatus[1].count + overallStatus[2].count + overallStatus[3].count;

    yield put({
      type: GET_PATIENTS_OVERALL_STATS_SUCCESS,
      resCovidPatientsOverallStats: overallStatus,
    });
  } catch (error) {
    yield put({ type: GET_PATIENTS_OVERALL_STATS_FAILED, error });
  }
}

export function* watchGetPatientsOverallStats() {
  yield takeLatest(GET_PATIENTS_OVERALL_STATS, getPatientsOverallStats);
}

export function* getPatientsByGuardian({ userName }) {
  try {
    const receivedData = yield call(
      getCovidPatientsByGuardianRequest,
      userName
    );
    yield put({
      type: GET_PATIENTS_BY_GUARDIAN_SUCCESS,
      resCovidPatientsByGuardian: receivedData.data.result,
    });
  } catch (error) {
    yield put({ type: GET_PATIENTS_BY_GUARDIAN_FAILED, error });
  }
}

export function* watchGetPatientsByGuardian() {
  yield takeLatest(GET_PATIENTS_BY_GUARDIAN, getPatientsByGuardian);
}
