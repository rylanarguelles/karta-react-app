import React from "react";
import { Divider, Typography, Radio, Col, Row, Space } from "antd";
import DetailsForm from "./DetailsForm";
import "antd/dist/antd.css";
import "./styles/app.css";
import AppController from "./controller";

const { Title, Text } = Typography;

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUnitSystem: "Metric",
            result: "",
        };

        this.onUnitSystemChange = this.onUnitSystemChange.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    // Updates the unit system being used
    onUnitSystemChange = (e) => {
        this.setState({
            activeUnitSystem: e.target.value,
        });
    };

    calculateBMI = (height, weight) => {
        const result = AppController.calculateBMI(
            this.state.activeUnitSystem,
            height,
            weight
        );
        this.setState({
            result: result,
        });
    };

    render() {
        const isMetric = this.state.activeUnitSystem === "Metric";
        return (
            <Space
                className="app"
                direction="vertical"
                style={{ display: "flex" }}
            >
                <Title>Body Mass Index Calculator</Title>
                <Divider />
                <Row>
                    <Col span={8}>
                        <Row>
                            <Radio.Group
                                onChange={this.onUnitSystemChange}
                                defaultValue={this.state.activeUnitSystem}
                                size="large"
                            >
                                <Radio.Button value="Metric">
                                    Metric
                                </Radio.Button>
                                <Radio.Button value="Imperial">
                                    Imperial (US)
                                </Radio.Button>
                            </Radio.Group>
                        </Row>
                        <br />
                        <Row>
                            <Text type="secondary">
                                Units used:{" "}
                                {isMetric ? "cm / kg" : "ft. & inches / lbs"}
                            </Text>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <DetailsForm calculateBMI={this.calculateBMI} isMetric={isMetric} />
                    </Col>
                </Row>
            </Space>
        );
    }
}
