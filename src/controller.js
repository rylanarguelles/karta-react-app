// Connects the interface to the Axios services
import AppService from "./services";

export default class AppController {
    static async calculateBMI(unitSystem, height, weight) {
        return await AppService.calculateBMI({
            unitSystem,
            height,
            weight,
        });
    }
}
