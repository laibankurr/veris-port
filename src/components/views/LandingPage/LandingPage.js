import React, { useState } from "react";
import { Row, Col, Button, Carousel } from "antd";
import infos from "../contents/ExampleData";
import styled from "styled-components";

const Desc = styled.div`
  position: absolute;
  z-index: 999999;
  max-width: 500px;
  bottom: 2rem;
  margin-left: 7rem;
  margin-bottom: 5rem;
  background-color: #0552ed;
  border-radius: 8px;
  padding: 2rem;
  opacity: 0.7;
  color: white;
  font-size: 16px;
`;

const LandingPage = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const [desc, setDesc] = useState("");

  const showImage = (event) => {
    infos
      .filter((info) => info.title === event.target.name)
      .map((info) => {
        return setImageUrl(info.images);
      });
  };

  const carouselImg = imageUrl.map((img, index) => {
    return (
      <div key={index}>
        <img src={process.env.PUBLIC_URL + `/img/${img}`} alt={"img"} />
      </div>
    );
  });

  const showDescription = (event) => {
    infos
      .filter((info) => info.title === event.target.name)
      .map((info) => {
        return setDesc(info.description);
      });
  };

  const buttons = infos.map((info, index) => (
    <Col lg={8} md={8} xs={24} key={info._id}>
      <div style={{ position: "relative" }}>
        <a href={`https://${info.link}`}>
          <Button
            name={info.title}
            style={{ width: "100%" }}
            type="primary"
            onMouseOver={showImage}
            onMouseEnter={showDescription}
            onMouseLeave={() => setDesc("")}
          >
            {info.title}
          </Button>
        </a>
      </div>
    </Col>
  ));

  return (
    <div style={{ position: "relative" }}>
      {desc && <Desc>{desc}</Desc>}

      <Carousel
        style={{ width: "65%", height: "auto", margin: "1rem auto" }}
        autoplay
      >
        {" "}
        {carouselImg}
      </Carousel>

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Projects</h2>
        <br />
        <Row gutter={[16, 16]}>{buttons}</Row>
      </div>
    </div>
  );
};

export default LandingPage;
