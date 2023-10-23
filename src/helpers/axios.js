import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import {
    getAccessToken,
    getRefreshToken,
    getUser,
} from "../hooks/user.actions";


const axiosService = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});


axiosService.interceptors.request.use(async (config) => {
    /**
   * Retrieving the access and refresh tokens from the local storage
   */
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
});

axiosService.interceptors.response.use(
    (res) => Promise.resolve(res),
    (err) => Promise.reject(err)
);

const refreshAuthLogic = async (failedRequest) => {
    return axios
    .post(
            "/api/auth/refresh/",
            {
            refresh: getRefreshToken(),
            },
            {
            baseURL: "",
            }
        )
    .then((resp) => {
            const { access } = resp.data;
            failedRequest.response.config.headers["Authorization"] =
            "Bearer " + access;
            localStorage.setItem(
            "auth",
            JSON.stringify({ access, refresh: getRefreshToken(), user: getUser() })
        );
    })
    .catch(() => {
        localStorage.removeItem("auth");
    });
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export function fetcher(url) {

    return axiosService.get(url).then((res) => res.data);
}

export function fetcher_no_auth(url) {
    return axios.get(url).then((res) => res.data);
}

// test x x


export default axiosService;
