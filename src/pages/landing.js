import backgroundimg from '../assets/images/izzuddin-azzam-HKBtu2w52DA-unsplash 1.png';
import React, { Component } from 'react';
import MyCard from '../components/Card';
import Header from '../components/Header';
import WhyChoose from '../components/WhyChoose';
import Reviews from '../components/Reviews';
import {Row, Col, Input} from 'antd';
import SearchBar from '../components/search';
import BrowseByCategory from '../components/BrowseByCategory';
import BestDeals from '../components/BestDeals';
import '../assets/css/custom.css';
const { Search } = Input;
class Categories extends Component {
    render() {
        return (
            <>
                <Header />
                <img className="img" src={backgroundimg} />
                <Row justify='center'>
                    <SearchBar style={{width:200}}/>
                </Row>
                <Row justify='center' style={{padding:30}}>
                    <p>Most serched <a href='/'>tractor</a> warehouse, excuvator</p>
                </Row>
                <BrowseByCategory />
                <BestDeals />
                <WhyChoose />
                <Reviews />
               
                
            </>
        )
    }
}

export default Categories;