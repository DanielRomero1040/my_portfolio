import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logoNombre from '../assets/logoNombre.png'

const NavBar = () => {

    return(
        <AppBar position="static" color="inherit" >
            <Toolbar variant="dense" style={{display: "flex", justifyContent: "space-evenly", paddingLeft: 100, paddingRight: 200}}>
                <Typography variant="h6" color="default">
                    <img src={logoNombre} alt="logo nombre" style={{paddingTop: 10}} />
                </Typography>
                <Typography variant="h6" color="inherit">
                    Daniel Romero
                </Typography>
                <Typography variant="h6" color="inherit">
                    Habilidades
                </Typography>
                <Typography variant="h6" color="inherit">
                    Portfolio
                </Typography>
                <Typography variant="h6" color="inherit">
                    Contacto
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;