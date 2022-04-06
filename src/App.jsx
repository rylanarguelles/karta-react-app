import React from "react";
import { Divider, Typography, Radio, Col, Row, Space } from "antd";
import DetailsForm from "./DetailsForm";
import "antd/dist/antd.css";
import "./styles/app.css";

const { Title, Text } = Typography;

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUnitSystem: "Metric",
        };

        this.onUnitSystemChange = this.onUnitSystemChange.bind(this);
    }

    onUnitSystemChange = (e) => {
        this.setState({
            activeUnitSystem: e.target.value,
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
                        <DetailsForm isMetric={isMetric} />
                    </Col>
                </Row>
            </Space>
        );
    }
}
