import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggler/DrawerToggle';

const Toolbar = (props) => {
    return (
       <header className="Toolbar">
           <DrawerToggle clicked={props.drawertoggleClicked} />
           <div className="Logo">
                <Logo />
           </div>
           <nav className="DesktopOnly">
               <NavigationItems />
           </nav>
       </header>
    );
}

export default Toolbar;
