import React, { useState } from 'react';
import './nav.styles.css';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BrushIcon from '@material-ui/icons/Brush';
import SpellCheckIcon from '@material-ui/icons/Spellcheck';
import MoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles({
    root: {
        // width: 500,
        width: '100vw',
        position: 'fixed',
        bottom: 0,
    }
});

function Navbar(props) {

    // console.log('Navbar: ', props)
    
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>

            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Colors" value="colors" icon={<BrushIcon />} />
                <BottomNavigationAction label="Money" value="money" icon={<MoneyIcon />} />
                <BottomNavigationAction label="Spelling" value="spelling" icon={<SpellCheckIcon />} />
            </BottomNavigation>


        </>
    );
}

export default Navbar;


