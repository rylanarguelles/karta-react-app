import React from "react";
import { Card, Typography } from "antd";

const { Text, Title } = Typography;

export default class ResultCard extends React.Component {
    render() {
        const { result } = this.props;
        return (
            <Card
                title={<Title level={3}>BMI Result</Title>}
                style={{ width: 300 }}
            >
                {result !== "" ? (
                    <Title level={5}>Your BMI is {result}</Title>
                ) : (
                    <Text type="secondary">
                        Enter your values and click on calculate
                    </Text>
                )}
            </Card>
        );
    }
}
