import React from "react";
import { Button, Input, Space } from "antd";

export default class DetailsForm extends React.Component {
    render() {
        const { isMetric } = this.props;
        return (
            <Space direction="vertical">
                <Input
                    size="large"
                    addonAfter={isMetric ? "cm" : "ft. & inches"}
                    placeholder="Enter height"
                />
                <br />
                <Input
                    size="large"
                    addonAfter={isMetric ? "kg" : "lbs"}
                    placeholder="Enter weight"
                />
            </Space>
        );
    }
}
