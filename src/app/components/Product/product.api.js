import axiosInstance from '../../config/axios';

let productApi = {
    getAll: (page) => {
        return axiosInstance.get(axiosInstance.baseURL, {
            params: {
                page: page,
            }
        }).then(function (response) {
            return response;
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                return error;
            } else if (error.request) {
                // The request was made but no response was received
                return error.request;
            } else {
                // Something happened in setting up the request that triggered an Error
                return error.message;
            }
        });
    },

    getOne: (id) => {
        return axiosInstance.get('endpoint', {
        }).then(function (response) {
            return response;
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                return error;
            } else if (error.request) {
                // The request was made but no response was received
                return error.request;
            } else {
                // Something happened in setting up the request that triggered an Error
                return error.message;
            }
        });
    },
};

export default productApi;