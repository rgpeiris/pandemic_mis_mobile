import { httpAuth } from "./httpClient";

export const loginRequest = (userData) => {
  return httpAuth.post(`login/public`, userData);
};

export const userRegisterRequest = (userData) => {
  return httpAuth.post(`register`, userData);
};

export const updateUserRequest = (userId, userData) => {
  return httpAuth.put(`system-user/${userId}`, userData);
};

export const getUserByIdRequest = (username) => {
  return httpAuth.get(`system-user/${username}`);
};
