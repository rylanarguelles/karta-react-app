const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/result/", (req, res) => {
    const { unitSystem, height, weight } = req.body;
    let result = 0;
    if (unitSystem === "Metric") {
        result = calculateBMI(weight, height / 100);
    } else {
        result = calculateBMI(weight / 2.2, height / 3.281);
    }
    res.send(result + "");
});

// Calculates the user's BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

app.listen(port, () => console.log("Running on Port " + port));
