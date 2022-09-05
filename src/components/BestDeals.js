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
                    <h2>Best Deals</h2>
                    <NavLink to='/' >Browse All Equipment<FiArrowRight /></NavLink>
                </div>
            
                <div className='product-display-grid'>
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
