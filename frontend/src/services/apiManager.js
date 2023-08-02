import axios from "axios";
import logManager from "./logManager.js";
import authStore from "../stores/AuthStore.js";

class API {
    #instance;

    constructor() {
        this.#instance = axios.create({
            timeout: 3000,
            headers: {
                "Content-Type": "application/json"
            },
            validateStatus: () => true
        });

        this.#instance.interceptors.request.use((config) => {
            console.log("reqeust", authStore.authToken);
            if (authStore.authToken) config.headers.Authorization = authStore.authToken;
            return config;
        });

        logManager.log("[API] initlizaed api instance");
    }

    get(endpoint) {
        return new Promise((resolve, reject) => {
            this.#instance.get(endpoint)
                .then((response) => resolve({
                    status: response.status,
                    data: response.data,
                    headers: response.headers
                }))
                .catch((error) => reject(error));
        });
    }

    async post(endpoint, data = {}) {
        return new Promise((resolve, reject) => {
            this.#instance.post(endpoint, data)
                .then((response) => resolve({
                    status: response.status,
                    data: response.data,
                    headers: response.headers
                }))
                .catch((error) => reject(error));
        });
    }

    async put(endpoint, data = {}) {
        return new Promise((resolve, reject) => {
            this.#instance.put(endpoint, data)
                .then((response) => resolve({
                    status: response.status,
                    data: response.data,
                    headers: response.headers
                }))
                .catch((error) => reject(error));
        });
    }

    async delete(endpoint) {
        return new Promise((resolve, reject) => {
            this.#instance.delete(endpoint)
                .then((response) => resolve({
                    status: response.status,
                    data: response.data,
                    headers: response.headers
                }))
                .catch((error) => reject(error));
        });
    }
}

const APIManager = new API();
window.apimng = APIManager;
export default APIManager;