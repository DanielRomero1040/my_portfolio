import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logoNombre from '../assets/logoNombre.png';
import '../App.css';

const NavBar = () => {

    return(
        <AppBar className="navBar" position="static" color="inherit" >
            <Toolbar  variant="dense" style={{display: "flex", justifyContent: "space-evenly", paddingLeft: 100, paddingRight: 200}}>
                <Typography variant="h6" color="inherit">
                    <a href="#header">
                        <img src={logoNombre} alt="logo nombre" style={{paddingTop: 10}} />
                    </a>
                </Typography>
                <Typography variant="h6" color="inherit">
                    <a href="#profile">
                        Daniel Romero
                    </a>
                </Typography>
                <Typography variant="h6" color="inherit">
                    <a href="#skills">
                        Habilidades
                    </a>
                </Typography>
                <Typography variant="h6" color="inherit">
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </Typography>
                <Typography variant="h6" color="inherit">
                    <a href="#contact">
                        Contacto
                    </a>
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;