import React from 'react';

import logo from '../../assets/img/download.png';

import icon from '../../assets/img/icon.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return ( 
        <>
                        <div id="ny-sidebar">
                    <div id="ny-sidebar-wrapper" className="d-flex align-items-start flex-column h-100 w-100">
                        
                        <div id="ny-logo-cell" className="w-100">
                            <a className="ny-logo-link" href="index.html">
                                <img src={logo} className="ny-logo" alt="ny" />
                            </a>
                        </div>
                        
                        <div id="ny-sidebar-cell" className="w-100">
                            
                            <div id="ny-menu-toggle"><NavLink exact to="/" >Home</NavLink></div>
                            
                            <nav id="ny-main-menu" className="menu-main-menu-container">
                                <ul className="ny-menu-ul">
                                    <li><NavLink exact to="/" >Home</NavLink>
                                        
                                    </li>
                                    
                                    
                                    <li><NavLink exact to="/search" >Search</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <ul className="ny-top-icons">
                    <li id="ny-search-icon">
                        <NavLink id="ny-open-search" exact to="/search" ><img src={icon} alt=""/></NavLink>
                    </li>
                </ul>
                <div className="clearfix"></div>
        </>
     );
}
 
export default Header;