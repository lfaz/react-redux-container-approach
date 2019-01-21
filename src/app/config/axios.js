import axios from 'axios';

// Set config defaults when creating the instance
const axiosInstance = axios.create({
    // url: '/users',
    baseURL: 'http://winnova-lb-593685308.eu-west-1.elb.amazonaws.com/hallinta/api/v1/companies',
    // `transformRequest` allows changes to the request data before it is sent to the server
    // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
    // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
    // FormData or Stream
    // You may modify the headers object.
    transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        return data;
    }],

    // `transformResponse` allows changes to the response data to be made before
    // it is passed to then/catch
    transformResponse: [function (data) {
        // Do whatever you want to transform the data

        return data;
    }],
    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false, // default,
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 1000,

    // `responseType` indicates the type of data that the server will respond with
    // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default

    // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
    xsrfCookieName: 'XSRF-TOKEN', // default

    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    xsrfHeaderName: 'X-XSRF-TOKEN', // default

    // `onUploadProgress` allows handling of progress events for uploads
    onUploadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
    },

    // `onDownloadProgress` allows handling of progress events for downloads
    onDownloadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
    },

    // `maxContentLength` defines the max size of the http response content allowed
    maxContentLength: 2000,
});


    // Add a request interceptor
    axiosInstance.interceptors.request.use(function (config) {
        // Do something before request is sent
        // console.log('Do something before request is sent');
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosInstance.interceptors.response.use(function (response) {
        // Do something with response data
        // console.log('Do something with response data');
        return response;
    }, function (error) {
        // Do something with response error
        return Promise.reject(error);
    });

export default axiosInstance;