import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

function Header() {


    const onSearch = (value) => console.log(value);


    return (
        <div className="header">
            <div className="header-left">
                <div className="left-logo">
                    <img src="./img/logo-removebg-preview.png" alt="" />
                </div>
            </div>

            <div className="header-right">
                <div className="input-search">
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        style={{
                            width: 200,
                        }}
                    />
                </div>
                <div className="btn-change">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </div>
                <ul className="nav">
                    <li>Blog</li>
                    <li>About</li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/content'}>Note</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header