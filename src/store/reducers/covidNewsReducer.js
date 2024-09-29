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
} from "../actions";

export const initialState = {
  isGettingCovidNews: false,
  isErrorGettingCovidNews: false,
  covidNews: [],
  isCreatingCovidNews: false,
  isErrorCreatingCovidNews: false,
  isGettingCovidNewsById: false,
  isErrorGettingCovidNewsById: false,
  covidNewsById: {},
  isUpdatingCovidNews: false,
  isErrorUpdatingCovidNews: false,
  isCreatingComplaint: false,
  isErrorCreatingComplaint: false,
};

const covidNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_NEWS:
      return {
        ...state,
        isGettingCovidNews: true,
        isErrorGettingCovidNews: false,
      };

    case GET_COVID_NEWS_SUCCESS:
      const { response } = action;
      return {
        ...state,
        isGettingCovidNews: false,
        covidNews: response,
      };

    case GET_COVID_NEWS_FAILED:
      return {
        ...state,
        isGettingCovidNews: false,
        isErrorGettingCovidNews: true,
      };

    case CREATE_COVID_NEWS:
      return {
        ...state,
        isCreatingCovidNews: true,
        isErrorCreatingCovidNews: false,
      };

    case CREATE_COVID_NEWS_SUCCESS:
      return {
        ...state,
        isCreatingCovidNews: false,
      };

    case CREATE_COVID_NEWS_FAILED:
      return {
        ...state,
        isCreatingCovidNews: false,
        isErrorCreatingCovidNews: true,
      };

    case GET_COVID_NEWS_BY_ID:
      return {
        ...state,
        isGettingCovidNewsById: true,
        isErrorGettingCovidNewsById: false,
      };

    case GET_COVID_NEWS_BY_ID_SUCCESS:
      const { resCovidNewsById } = action;
      return {
        ...state,
        isGettingCovidNewsById: false,
        covidNewsById: resCovidNewsById,
      };

    case GET_COVID_NEWS_BY_ID_FAILED:
      return {
        ...state,
        isGettingCovidNewsById: false,
        isErrorGettingCovidNewsById: true,
      };

    case UPDATE_COVID_NEWS:
      return {
        ...state,
        isUpdatingCovidNews: true,
        isErrorUpdatingCovidNews: false,
      };

    case UPDATE_COVID_NEWS_SUCCESS:
      return {
        ...state,
        isUpdatingCovidNews: false,
      };

    case UPDATE_COVID_NEWS_FAILED:
      return {
        ...state,
        isUpdatingCovidNews: false,
        isErrorUpdatingCovidNews: true,
      };

    case CREATE_COMPLAINT:
      return {
        ...state,
        isCreatingComplaint: true,
        isErrorCreatingComplaint: false,
      };

    case CREATE_COMPLAINT_SUCCESS:
      return {
        ...state,
        isCreatingComplaint: false,
      };

    case CREATE_COMPLAINT_FAILED:
      return {
        ...state,
        isCreatingComplaint: false,
        isErrorCreatingComplaint: true,
      };

    default:
      return state;
  }
};

export default covidNewsReducer;
