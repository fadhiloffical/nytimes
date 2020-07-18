import React from 'react';

import logo from '../../assets/img/download.png';

import icon from '../../assets/img/icon.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return ( 
        <>
                        <div id="eskimo-sidebar">
                    <div id="eskimo-sidebar-wrapper" className="d-flex align-items-start flex-column h-100 w-100">
                        
                        <div id="eskimo-logo-cell" className="w-100">
                            <a className="eskimo-logo-link" href="index.html">
                                <img src={logo} className="eskimo-logo" alt="eskimo" />
                            </a>
                        </div>
                        
                        <div id="eskimo-sidebar-cell" className="w-100">
                            
                            <div id="eskimo-menu-toggle"><NavLink exact to="/" >Home</NavLink></div>
                            
                            <nav id="eskimo-main-menu" className="menu-main-menu-container">
                                <ul className="eskimo-menu-ul">
                                    <li><NavLink exact to="/" >Home</NavLink>
                                        
                                    </li>
                                    
                                    
                                    <li><NavLink exact to="/search" >Search</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <ul className="eskimo-top-icons">
                    <li id="eskimo-search-icon">
                        <NavLink id="eskimo-open-search" exact to="/search" ><img src={icon} alt=""/></NavLink>
                    </li>
                </ul>
                <div className="clearfix"></div>
        </>
     );
}
 
export default Header;