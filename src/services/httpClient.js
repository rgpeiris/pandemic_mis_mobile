import axios from "axios";
import store from "../store";
import { userLogout, userLoginSuccess } from "../store/actions";

/**
 * Common config
 */
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 60000;

/**
 * Create an Instance
 */
const httpAuth = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
  headers: {
    "content-type": "application/json",
  },
});

const httpCovidNews = axios.create({
  baseURL: process.env.REACT_APP_COVID_NEWS_URL,
});

const httpCovidContact = axios.create({
  baseURL: process.env.REACT_APP_COVID_CONTACT_URL,
});

const httpCovidVaccine = axios.create({
  baseURL: process.env.REACT_APP_COVID_VACCINE_URL,
});

const httpCovidTest = axios.create({
  baseURL: process.env.REACT_APP_COVID_TEST_URL,
});

const httpCovidPatient = axios.create({
  baseURL: process.env.REACT_APP_COVID_PATIENT_URL,
});

/**
 * interceptor for requests
 * @param request
 */
const requestInterceptor = (request) => {
  const { access_token } = store.getState().auth;
  if (access_token) {
    request.headers = {
      Authorization: `Bearer ${access_token}`,
    };
  }
  return request;
};

/**
 * interceptor for responses
 * @param response
 */
const responseInterceptor = (response) => {
  // console.log(response.status);
  return response;
};

/**
 * interceptor to catch all response errors
 * @param error
 */
const errorInterceptor = async (err) => {
  // store the original request
  const originalReq = err.config;
  // access Token was expired
  if (
    /**
     * check if the response is having error code as 401 Unauthorized
     * not a retry (to avoid infinite retries)
     * avoid checking on the authenticate URL
     */
    err.response.status === 401 &&
    !originalReq._retry &&
    err.response.config.baseURL !== process.env.REACT_APP_AUTH_URL
  ) {
    // set the retry flag to true
    originalReq._retry = true;
    try {
      const { refresh_token } = store.getState().login;

      const params = new URLSearchParams();
      params.append("grant_type", "refresh_token");
      params.append("scope", "openid");
      params.append("client_id", "smeClient");
      params.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);
      params.append("refresh_token", refresh_token);

      // call the refresh_token API
      const response = await httpAuth.post("/token", params);

      const { access_token } = response.data;
      // save access token
      store.dispatch(userLoginSuccess(response.data));

      // set new authorization header
      originalReq.headers.Authorization = "Bearer " + access_token;

      // return the original request
      return axios(originalReq);
    } catch (_error) {
      store.dispatch(userLogout(true));
      return Promise.reject(_error);
    }
  }
  return Promise.reject(err);
};

httpAuth.interceptors.response.use(responseInterceptor, errorInterceptor);

httpCovidNews.interceptors.request.use(requestInterceptor);
httpCovidNews.interceptors.response.use(responseInterceptor, errorInterceptor);

httpCovidContact.interceptors.request.use(requestInterceptor);
httpCovidContact.interceptors.response.use(
  responseInterceptor,
  errorInterceptor
);

httpCovidVaccine.interceptors.request.use(requestInterceptor);
httpCovidVaccine.interceptors.response.use(
  responseInterceptor,
  errorInterceptor
);

httpCovidTest.interceptors.request.use(requestInterceptor);
httpCovidTest.interceptors.response.use(responseInterceptor, errorInterceptor);

httpCovidPatient.interceptors.request.use(requestInterceptor);
httpCovidPatient.interceptors.response.use(
  responseInterceptor,
  errorInterceptor
);

export {
  httpAuth,
  httpCovidNews,
  httpCovidContact,
  httpCovidVaccine,
  httpCovidTest,
  httpCovidPatient,
};
