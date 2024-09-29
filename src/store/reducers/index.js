import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage/session";

import authReducer from "./authReducer";
import toastReducer from "./toastReducer";
import covidTestReducer from "./covidTestReducer";
import covidVaccineReducer from "./covidVaccineReducer";
import covidNewsReducer from "./covidNewsReducer";
import covidPatientReducer from "./covidPatientReducer";

import { USER_LOGOUT } from "../actions";

const rootReducer = combineReducers({
  auth: authReducer,
  toast: toastReducer,
  covidTest: covidTestReducer,
  covidVaccine: covidVaccineReducer,
  covidNews: covidNewsReducer,
  covidPatient: covidPatientReducer,
});

const reducers = (state, action) => {
  if (action.type === USER_LOGOUT) {
    storage.removeItem("persist:keys");
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export default reducers;
