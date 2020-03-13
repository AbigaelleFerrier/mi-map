import React, { useState } from 'react';
import {
	BrowserRouter as Router,
		Switch,
		Route,
		Link
} from "react-router-dom";

// Material UI
import BottomNavigation       from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import { Home , LocationOn }  from '@material-ui/icons'


const Nav = ({setTheme, theme}) => {
    return (
        <BottomNavigation>
            <h1 onClick={() => { setTheme(prev => !prev)}}>
                {theme ? 'DarkTheme' : 'WhiteTheme'}
            </h1>

            <Link to="/">
                <BottomNavigationAction icon={<Home />}>
                    Accueil
                </BottomNavigationAction>
            </Link>

            <Link to="/map">
                <BottomNavigationAction icon={<LocationOn/>}>
                    Map
                </BottomNavigationAction>
            </Link>

        </BottomNavigation>
    )
}

export default Nav;
