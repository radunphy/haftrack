import React, { Component } from 'react';
import { MenuItems } from './MenuItems';

class Navbar extends Component {
    render() {
        return (
            <nav className='ht-navbar'>
                <h1 className='ht-nav-title'>Haftrack</h1>
                <div className='ht-menu-icon'>
                    <i className='fas fa-bars'></i>
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
