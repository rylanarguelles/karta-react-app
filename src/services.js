// Performs Axios requests to the backend

import api from "./api";

export default class AppService {
    static async calculateBMI(form) {
        return api.post("/result/", form);
    }
}
