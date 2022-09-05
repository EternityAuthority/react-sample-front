import React from 'react';
import { Row, Col } from 'antd';
import icon from '../assets/images/icon.png';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import { BiCheckCircle } from 'react-icons/bi';
import { FiArrowRight } from 'react-icons/fi'; 
import { NavLink } from 'react-router-dom';
import GridLines from 'react-gridlines';

const WhyChoose = () => {
  return (
    <div className="whychoose">
      <GridLines  className="grid-area" cellWidth={200} strokeWidth={2} lineColor='rgba(255, 255, 255, 0.1)'>
      <Row justify='center' style={{ paddingTop: 50 }}>
        <Col><h1>Why Choose Bigrentals</h1></Col>
      </Row>

      <Row justify='center'>
        <Col><p>Our big trailer rental solution makes it easy for our customers who need<br /> a trailer for a short time but don't want to pay thousands of dollars.</p></Col>
      </Row>

      <Row justify='space-evenly' style={{padding:50}}>
        <Col>
          <Row >
            <img src={icon} style={{marginBottom: 15}} />
          </Row>
          <Row style={{ display: 'block', marginTop: 20}}>
            <h3>Easy Online Rental</h3>
            <p>Our big trailer rental solution makes it easy <br /> for our customers who need a trailer for a <br /> short time but don't want to pay <br /> thousands of dollars.</p>
          </Row>
        </Col>
        <Col>
          <Row>
            <img src={icon1} />
          </Row>
          <Row style={{ display: 'block', marginTop: 20 }}>
            <h3>Easy Online Rental</h3>
            <p>Our big trailer rental solution makes it easy <br /> for our customers who need a trailer for a <br /> short time but don't want to pay <br /> thousands of dollars.</p>
          </Row>
        </Col>
        <Col>
          <Row>
            <img src={icon2} />
          </Row>
          <Row style={{ display: 'block', marginTop: 20 }}>
            <h3>Easy Online Rental</h3>
            <p>Our big trailer rental solution makes it easy <br /> for our customers who need a trailer for a <br /> short time but don't want to pay <br /> thousands of dollars.</p>
          </Row>
        </Col>
      </Row>

      <Row style={{marginTop:50, padding:50}}>
        <Col span={6} offset={2}>
          <h1>Industry Solutions</h1>
          <p>BigRentz serves customers in a variety of industries. Whatever the nature of your next project, we have the equipment you'll need-when and where you'll need it. Every time.</p>
        </Col>

        <Col span={4} offset={4}>
          <Row>
            <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Agriculture</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Engineering</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>General Contractor</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>IT Services</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Plumbing</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Roofing and Wall Covering</h4></Col>
          </Row>
          <NavLink to='/' style={{color:'#F6CC08'}}>View all solution <FiArrowRight /></NavLink>

        </Col>
        <Col span={4} offset={2}>
        <Row>
            <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Electrical Contracting</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Facilities Maintenance</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Government Solutions</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Media and Entertainment</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Retail Construction</h4></Col>
          </Row>
          <Row>
          <Col><BiCheckCircle /></Col>
            <Col offset={1}><h4>Telecommunications</h4></Col>
          </Row>
        </Col>
      </Row>
      </GridLines>
    </div>
  );
};

export default WhyChoose;
