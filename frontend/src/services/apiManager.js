import axios from "axios";
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
            if (authStore.authToken) config.headers.Authorization = authStore.authToken;
            return config;
        });
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
window.am = APIManager;
export default APIManager;