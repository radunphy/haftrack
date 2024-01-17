import React, { Component } from 'react';
import './Navbar.css'
import { MenuItems } from './MenuItems';

class Navbar extends Component {
    render() {
        return (
            <nav className='ht-navbar'>
                <div className='ht-nav-logo'>
                    <h1 className='ht-nav-title'>Haftrack</h1>
                </div>
                <div className='ht-menu-items'>
                    <ul className="ht-menu-items-list">
                        {MenuItems.map((item, index) => {
                            return (
                                <li className='ht-menu-items-link' key={index}>
                                    <a className={item.className} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul> 
                </div>
               
            </nav>
        );
    }
}

export default Navbar;
