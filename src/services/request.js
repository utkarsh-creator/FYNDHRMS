import axios from 'axios';
export const BASE_URL = window.location.origin;
//export const BASE_URL = "https://store-sell.extensions.jiox0.de/";

const client = axios.create({
  baseURL: BASE_URL,
  responseType: 'text/plain',
  withCredentials: false,
  timeout: 50000,
  headers: {}
});

const request = function ({ method, url, headers = {}, data = {}, responseType = 'text/plain' }) {
  const onSuccess = function (response) {
    if (response.status === 200) {
      return response;
    }

    return response;
  };

  const onError = function (error) {
    let message = 'Something Went Wrong';
    let errorObject = error?.response?.data ? JSON.parse(error?.response?.data) : null;

    if (errorObject && errorObject.data && errorObject.data.errorMessage) {
      message = errorObject.data.errorMessage;
    }

    return Promise.reject(message);
  };

  const payload = {
    method,
    url,
    headers: {
      ...headers
    },
    data: data,
    responseType
  };
  // console.log(payload);
  return client(payload).then(onSuccess).catch(onError);
};

export default request;
