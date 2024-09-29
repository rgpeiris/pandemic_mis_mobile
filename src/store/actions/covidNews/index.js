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
} from "./types";

export const getCovidNews = () => ({
  type: GET_COVID_NEWS,
});

export const getCovidNewsSuccess = (response) => ({
  type: GET_COVID_NEWS_SUCCESS,
  response,
});

export const getCovidNewsFailed = (error) => ({
  type: GET_COVID_NEWS_FAILED,
  error,
});

export const createCovidNews = (userData, callback) => {
  return {
    type: CREATE_COVID_NEWS,
    userData,
    callback,
  };
};

export const createCovidNewsSuccess = (response) => ({
  type: CREATE_COVID_NEWS_SUCCESS,
  response,
});

export const createCovidNewsFailed = (error) => ({
  type: CREATE_COVID_NEWS_FAILED,
  error,
});

export const getCovidNewsById = (newsId) => ({
  type: GET_COVID_NEWS_BY_ID,
  newsId,
});

export const getCovidNewsByIdSuccess = (response) => ({
  type: GET_COVID_NEWS_BY_ID_SUCCESS,
  response,
});

export const getCovidNewsByIdFailed = (error) => ({
  type: GET_COVID_NEWS_BY_ID_FAILED,
  error,
});

export const updateCovidNews = (userData, callback) => {
  return {
    type: UPDATE_COVID_NEWS,
    userData,
    callback,
  };
};

export const updateCovidNewsSuccess = (response) => ({
  type: UPDATE_COVID_NEWS_SUCCESS,
  response,
});

export const updateCovidNewsFailed = (error) => ({
  type: UPDATE_COVID_NEWS_FAILED,
  error,
});

export const createComplaint = (userData, callback) => {
  return {
    type: CREATE_COMPLAINT,
    userData,
    callback,
  };
};

export const createComplaintSuccess = (response) => ({
  type: CREATE_COMPLAINT_SUCCESS,
  response,
});

export const createComplaintFailed = (error) => ({
  type: CREATE_COMPLAINT_FAILED,
  error,
});
