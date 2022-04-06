// Connects the interface to the Axios services
import AppService from "./services";

export default class AppController {
    static calculateBMI(unitSystem, height, weight) {
        AppService.calculateBMI({ unitSystem, height, weight }).then((response) =>
            console.log(response.data)
        );
    }
}
