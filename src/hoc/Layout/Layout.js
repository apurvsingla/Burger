import React, {useState} from 'react';
import Aux from '../Auxillary';
import './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)
    
    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer((prevState) => {
            return setShowSideDrawer(!prevState.showSideDrawer)
        });
    }
    
    return (
        <Aux>
            <Toolbar drawertoggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;
