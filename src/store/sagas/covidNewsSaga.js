import {
  GET_COVID_NEWS,
  GET_COVID_NEWS_SUCCESS,
  GET_COVID_NEWS_FAILED,
  CREATE_COVID_NEWS,
  CREATE_COVID_NEWS_SUCCESS,
  CREATE_COVID_NEWS_FAILED,
  GET_COVID_NEWS_BY_ID,
  GET_COVID_NEWS_BY_ID_SUCCESS,
  GET_COVID_NEWS_BY_ID_FAILED,
  UPDATE_COVID_NEWS,
  UPDATE_COVID_NEWS_SUCCESS,
  UPDATE_COVID_NEWS_FAILED,
  CREATE_COMPLAINT,
  CREATE_COMPLAINT_SUCCESS,
  CREATE_COMPLAINT_FAILED,
  SUCCESS_TOAST,
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  getCovidNewsRequest,
  postCovidNewsRequest,
  getCovidNewsByIdRequest,
  putCovidNewsRequest,
  postComplaintRequest,
} from "../../services";
import { displayError } from "../../utils";

export function* getCovidNews() {
  try {
    const receivedData = yield call(getCovidNewsRequest);
    yield put({
      type: GET_COVID_NEWS_SUCCESS,
      response: receivedData.data.result,
    });
  } catch (error) {
    yield put({ type: GET_COVID_NEWS_FAILED, error });
  }
}

export function* watchGetCovidNews() {
  yield takeLatest(GET_COVID_NEWS, getCovidNews);
}

export function* createCovidNews({ userData, callback }) {
  try {
    yield call(postCovidNewsRequest, userData);
    yield put({
      type: SUCCESS_TOAST,
      successMsg: "News created successfully",
    });
    yield put({ type: GET_COVID_NEWS });
    yield put({
      type: CREATE_COVID_NEWS_SUCCESS,
    });
    callback();
  } catch (error) {
    yield put({ type: CREATE_COVID_NEWS_FAILED, error: displayError(error) });
  }
}

export function* watchCreateCovidNews() {
  yield takeLatest(CREATE_COVID_NEWS, createCovidNews);
}

export function* getCovidNewsById({ newsId }) {
  try {
    const receivedData = yield call(getCovidNewsByIdRequest, newsId);
    yield put({
      type: GET_COVID_NEWS_BY_ID_SUCCESS,
      resCovidNewsById: receivedData.data.result,
    });
  } catch (error) {
    yield put({ type: GET_COVID_NEWS_BY_ID_FAILED, error });
  }
}

export function* watchGetCovidNewsById() {
  yield takeLatest(GET_COVID_NEWS_BY_ID, getCovidNewsById);
}

export function* updateCovidNews({ userData, callback }) {
  try {
    yield call(putCovidNewsRequest, userData);
    yield put({
      type: SUCCESS_TOAST,
      successMsg: "News updated successfully",
    });
    yield put({ type: GET_COVID_NEWS });
    yield put({
      type: UPDATE_COVID_NEWS_SUCCESS,
    });
    callback();
  } catch (error) {
    yield put({ type: UPDATE_COVID_NEWS_FAILED, error: displayError(error) });
  }
}

export function* watchUpdateCovidNews() {
  yield takeLatest(UPDATE_COVID_NEWS, updateCovidNews);
}

export function* createComplaint({ userData, callback }) {
  try {
    yield call(postComplaintRequest, userData);
    yield put({
      type: SUCCESS_TOAST,
      successMsg: "Complaint created successfully",
    });

    yield put({
      type: CREATE_COMPLAINT_SUCCESS,
    });
    callback();
  } catch (error) {
    yield put({ type: CREATE_COMPLAINT_FAILED, error: displayError(error) });
  }
}

export function* watchCreateComplaint() {
  yield takeLatest(CREATE_COMPLAINT, createComplaint);
}
