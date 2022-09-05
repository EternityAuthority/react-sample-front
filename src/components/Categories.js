import backgroundimg from '../assets/images/izzuddin-azzam-HKBtu2w52DA-unsplash 1.png';
import React, { Component } from 'react';
import MyCard from './Card';
import {Row, Col, Input} from 'antd';
import SearchBar from './search';
const { Search } = Input;
class Categories extends Component {
    render() {
        return (
            <>
                <img className="img" src={backgroundimg} />
                <SearchBar />
               
                <Row justify="center" style={{ marginRight: 80, marginLeft: 80, marginBottom: 20, marginTop: 20 }}>
                        <Col style={{ margin: 10 }}>
                            <MyCard />
                        </Col>                       
                </Row>
            </>
        )
    }
}

export default Categories;