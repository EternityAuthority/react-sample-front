import React, { Component } from 'react';
import MyCard from '../components/Card';
import { Col, Row, Button } from 'antd';
import {FiArrowRight} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';
class BrowseByCategory extends Component {
    render() {
        return (
            <>
            <div className='display'>
                <div className='display-header'>
                <h2>Browse By Category</h2>
                    
                </div>
                <div className='display-header'>
                    <div className='display-filter'>
                    <Button type="primary" ghost shape="round" >Material Handling</Button>
                    <Button type="primary" ghost shape="round" >AeialWork Platforms</Button>
                    <Button type="primary" ghost shape="round" >Site Services</Button>
                    <Button type="primary" ghost shape="round" >Earthmoving</Button>
                    </div>
                
                    <NavLink to='/' >Browse All Equipment<FiArrowRight /></NavLink>
                </div>
            
                <div className='product-display-grid'>
                    <MyCard/>
                    <MyCard/>
                    <MyCard/>
                    <MyCard/>
                    <MyCard/>
                    <MyCard/>
                </div>
                    
            </div>
                
            </>
        )
    }
}

export default BrowseByCategory;
