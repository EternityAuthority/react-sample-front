import React, { Component } from 'react';
import { RiGlobalLine } from 'react-icons/ri';
import { BiHelpCircle } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { BiPhoneCall } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Menu, Divider, message } from 'antd';
import '../App.css';
import logo from '../assets/images/logo-big-rentals-black-white 1.png'
// import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import { BrowserRouter, NavLink, Link } from 'react-router-dom';

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

const lang = (
    
    <Menu
      onClick={onClick}
      items={[
        {
          label: 'Eng',
          key: '1',
        },
        {
          label: 'Jap',
          key: '2',
        },
        {
          label: 'Che',
          key: '3',
        },
      ]}
    />
  );

const Equipment = (
    
    <Menu  className='dropdown'
      onClick={onClick}
      items={[
        {
          label: 'All Equipment',
          key: '1',
        },
        {
          label: 'Scissor Lifts',
          key: '2',
        },
        {
          label: 'Boom Lifts',
          key: '3',
        },
          {
            label: 'Forklifts & Material Handling',
            key: '4',
          },
          {
            label: 'Single Man Lifts',
            key: '5',
          },
          {
            label: 'Construction Site Services',
            key: '6',
          },
          {
            label: 'Earthmoving Equipment',
            key: '7',
          },
          {
            label: 'Air Equipment',
            key: '8',
          },
          {
            label: 'Cranes',
            key: '9',
          },
          {
            label: 'Compaction Equipment',
            key: '10',
          },
          {
            label: 'Construction Vehicles',
            key: '11',
          },
      ]}
    />
  );
class Header extends Component {
    state = {
        color: 'white',
        background: 'none'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({ background: '#1D1D1D' })
        } else {
            this.setState({ background: 'none' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (

            <div id="header" style={{ background: this.state.background }}>
                <div className='display' style={{ background: this.state.background }}>
                    <div className='display-header' style={{ background: this.state.background }}>
                        <div>
                            <RiGlobalLine style={{marginRight: 10}}/>

                            <Dropdown overlay={lang}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space style={{color:'white'}}>
                                        Eng
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>

                        </div>
                        <div>
                            <NavLink to="/help" style={{ marginRight: 10, color: 'white' }}>Help</NavLink><BiHelpCircle style={{ marginRight: 20 }} />
                            <NavLink to="/help" style={{ marginRight: 10, color: 'white' }}>Location</NavLink><IoLocationOutline style={{ marginRight: 20 }} />
                            <NavLink to="/help" style={{ marginRight: 10, color: 'white' }}>ContactUs</NavLink><BiPhoneCall style={{ marginRight: 0 }} />
                        </div>
                    </div>
                    <Divider />
                    <div className='display-header'>
                        <div className='display-menu-sapce'>
                            <img className='App-logo' src={logo} />
                            <Dropdown overlay={Equipment}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space style={{color:'white'}}>
                                        Equipment
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>

                            <NavLink to="/help" style={{ color: 'white' }}>Service Areas</NavLink>
                            <NavLink to="/help" style={{ color: 'white', marginLeft: 10 }}>Rental Resources</NavLink>
                            <NavLink to="/help" style={{ color: 'white', marginLeft: 10 }}>About</NavLink>
                            <NavLink to="/help" style={{ color: 'white', marginLeft: 10 }}>Blogs</NavLink>

                        </div>
                        <FiShoppingCart />
                        <div>
                            <Button type="primary" className='roundedbutton button1'>Login</Button>
                            <Button type="primary" className='roundedbutton button1 pull-right'>SignUp</Button>
                        </div>
                    </div>
                </div>

                {/* 
                <Row justify='start' align="middle" style={{ color: 'white', background: this.state.background, paddingBottom: 10 }}>
                    <Col style={{ marginLeft: 50, marginTop: 10 }}><img className='App-logo' src={logo} alt="" /></Col>

                    <Col style={{ background: 'transparent', marginLeft: 30 }}>
                        <Form.Select
                            style={{ background: 'transparent', border: 'none', color: 'white' }}
                            value={this.state.applied}
                            onChange={(e) => this.setState({ applied: e.target.value })}
                        >
                            <option style={{ backgroundColor: 'transparent' }}>Equipment</option>
                            <option style={{ color: 'transparent' }} value="1">Chi</option>
                        </Form.Select>
                    </Col>
                    <Col><NavLink to="/help" style={{ color: 'white' }}>Service Areas</NavLink></Col>
                    <Col span={3}><NavLink to="/help" style={{ color: 'white', marginLeft: 20 }}>Rental Resources</NavLink></Col>
                    <Col span={1}><NavLink to="/help" style={{ color: 'white', marginLeft: 20 }}>About</NavLink></Col>
                    <Col span={1}><NavLink to="/help" style={{ color: 'white', marginLeft: 20 }}>Blogs</NavLink></Col>
                    <Col span={1} offset={4}><FiShoppingCart /></Col>
                    <Col span={2} offset={1}><Button type="primary" className='roundedbutton button1'>Login</Button></Col>
                    <Col span={2}><Button type="primary" className='roundedbutton button1 pull-right'>SignUp</Button></Col>

                </Row> */}

            </div>

        )
    }
}

export default Header;
