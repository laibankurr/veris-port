import React from "react";
import { Menu, Icon } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">
          <Icon type="home" theme="twoTone" />
          HOME
        </a>
      </Menu.Item>
      <Menu.Item key="favoritePage">
        <a href="/favoritePage">
          <Icon type="pushpin" theme="twoTone" />
          FAVORITE
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
