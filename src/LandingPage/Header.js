import React from "react";
import { useHistory, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message, Space, Button, Col, Row, Avatar } from "antd";
import logo from "../../assets/logo.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  } from '../Navbar/NavbarElements';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        label: "1st menu item",
        key: "1",
      },
      {
        label: "2nd menu item",
        key: "2",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);
function Logotitle() {
  // const history = useHistory();
  return (
    <div className="header">
      <>
        <Row>
          <Col>
            <Avatar src={logo} />
          </Col>
          <Col offset={1}>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  For Organization
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Col>
          <Col offset={1}>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Solution
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Col>
          <Col offset={10}>
          
          <Button type="primary" onClick={event =>  window.location.href='/login'}>Login</Button>
          </Col>
          <Col offset={1}>
            <Button type="primary" onClick={event =>  window.location.href='/signup'}>SignUp</Button>
          </Col>
        </Row>
      </>
    </div>
  );
}
// const Home = () => (

// );

export default Logotitle;
