import React from "react";
import { Button, InputNumber, Space, Typography } from "antd";

const { Text } = Typography;

export default class DetailsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: null,
            weight: null,
        };

        this.updateForm = this.updateForm.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    // Updates the appropriate detail in the state
    updateForm = (property) => (e) => {
        this.setState({
            [property]: e,
        });
    };

    // Triggers the BMI calculation to be done in the backend
    calculateBMI() {
        console.log(this.state);
    }

    render() {
        const { isMetric } = this.props;
        const incompleteForm =
            this.state.height === null || this.state.weight === null;
        const hasInvalidInput =
            this.state.height <= 0 || this.state.weight <= 0;
        return (
            <Space direction="vertical">
                <InputNumber
                    type="number"
                    size="large"
                    addonAfter={isMetric ? "cm" : "ft. & inches"}
                    placeholder="Enter height"
                    onChange={this.updateForm("height")}
                />
                <br />
                <InputNumber
                    type="number"
                    size="large"
                    addonAfter={isMetric ? "kg" : "lbs"}
                    placeholder="Enter weight"
                    onChange={this.updateForm("weight")}
                />
                <br />
                <Button
                    onClick={this.calculateBMI}
                    size="large"
                    type="primary"
                    disabled={incompleteForm || hasInvalidInput}
                >
                    Calculate
                </Button>
                <Text type="secondary">
                    Not working? Your input might be incorrect
                </Text>
            </Space>
        );
    }
}
