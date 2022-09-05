import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { Input, Button } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);
const suffix = (
  <Button className="roundedbutton"
    style={{
      color: 'black',
      background: '#F6CC08'
    }}
  >Search</Button>
);

const SearchBar = () => (
  <Input
    placeholder="Search"
    className="search"
    suffix={suffix}
  />
);

export default SearchBar;
