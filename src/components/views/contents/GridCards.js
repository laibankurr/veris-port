import React from "react";
import { Col, Button } from "antd";

function GridCards(props) {
  if (props.landingPage) {
    return (
      <Col lg={8} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <a href="/">
            <Button style={{ width: "100%" }} type="primary">
              button
            </Button>
          </a>
        </div>
      </Col>
    );
  }
}

export default GridCards;
