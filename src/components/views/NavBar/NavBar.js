import React, { useState } from "react";
import { Drawer, Button, Row, Col } from "antd";
import {
  DownOutlined,
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
  HomeTwoTone,
} from "@ant-design/icons";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <a href="/">
          <HomeTwoTone />
        </a>
      </div>
      <div className="menu__container">
        <Button className="drawer_button" type="primary" onClick={showDrawer}>
          <DownOutlined />
        </Button>
        <Drawer
          title="ABOUT"
          placement="top"
          className="menu_drawer"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <div>
            <Row>
              <Col span={16} style={{ padding: 20 }}>
                <h2>veris is...</h2>
                <h4>
                  Junior Full Stack Developer with the experience in developing
                  and practicing small scale web applications. Largely spending
                  days on experimenting around nodejs, express, React, mongoDB
                  and other web technologies. Enjoying challenging tasks and
                  completing them on time. Dedicated to contributing to an
                  innovative culture to produce maximum productivity while
                  fostering a strong team environment with professional work
                  ethic and quality of work.
                </h4>
              </Col>
              <Col span={8}>
                <h2>Contact</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="mailto:veris1975@outlook.com">
                      <MailOutlined />
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/youngseok-ahn-b0609b167/">
                      <LinkedinOutlined />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/laibankurr">
                      <GithubOutlined />
                      GitHub
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
