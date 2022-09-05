import React, { Component, useState } from "react";
// import MyVerticallyCenteredModal from "./cardModal";
// import Card from "react-bootstrap/Card";
import cardimg from "../assets/images/5000-lbs-cushion-tire-warehouse-forklift-11-105.png";
import { Row, Col, Card, Button } from "antd";
import { MdBolt } from "react-icons/md";
// import "./cardModal";
// import Avatar from "@mui/material/Avatar";
// import { deepOrange } from "@mui/material/colors";
// import CardModal from "./cardModal";
import { render } from "@testing-library/react";
const {Meta} = Card ; 
class MyCard extends Component {
 
   
    render() {

        return (
            <>
            
            <Card
            hoverable
            style={{
              width: '100%', borderRadius: 16
            }}
            cover={<img alt="example" src={cardimg} />}
          >
            <Button className="popular" shape="round"><MdBolt/>Popular</Button>
            <Meta title="Europe Street beat"/>
            <Button shape="round" style={{width:'100%', background: '#F6CC08', marginTop: 10}}>Explor All</Button>
          </Card>
          </>
        );

    }
}

export default MyCard;
