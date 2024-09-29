import { all } from "redux-saga/effects";

import {
  watchUserLogin,
  watchUserLogout,
  watchUserRegisterMobile,
  watchUpdateUser,
  watchGetUserById,
} from "./authSaga";
import {
  watchCreateTestAppointment,
  watchGetScheduledTestCentresByInfo,
  watchGetTestAppointmentsByInfo,
  watchGetTestCentreById,
  watchGetTestAppointmentsByCreatedBy,
} from "./covidTestSaga";
import {
  watchCreateVaccineAppointment,
  watchGetScheduledVaccinationCentresByInfo,
  watchGetVaccineAppointmentsByInfo,
  watchGetVaccinationCentreById,
  watchGetVaccineAppointmentsByCreatedBy,
  watchGetVaccinationByNic,
} from "./covidVaccineSaga";
import {
  watchGetCovidNews,
  watchCreateCovidNews,
  watchGetCovidNewsById,
  watchUpdateCovidNews,
  watchCreateComplaint,
} from "./covidNewsSaga";

import {
  watchGetPatientsOverallStats,
  watchGetPatientsByGuardian,
} from "./covidPatientSaga";

export default function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserLogout(),
    watchCreateTestAppointment(),
    watchCreateVaccineAppointment(),
    watchGetScheduledVaccinationCentresByInfo(),
    watchGetScheduledTestCentresByInfo(),
    watchGetTestAppointmentsByInfo(),
    watchGetVaccineAppointmentsByInfo(),
    watchGetTestCentreById(),
    watchGetVaccinationCentreById(),
    watchUserRegisterMobile(),
    watchGetCovidNews(),
    watchCreateCovidNews(),
    watchGetCovidNewsById(),
    watchUpdateCovidNews(),
    watchGetTestAppointmentsByCreatedBy(),
    watchGetVaccineAppointmentsByCreatedBy(),
    watchUpdateUser(),
    watchGetUserById(),
    watchGetVaccinationByNic(),
    watchGetPatientsOverallStats(),
    watchGetPatientsByGuardian(),
    watchCreateComplaint(),
  ]);
}
