import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import hello from '../assets/hello.svg'

const Header = () => {

    return(
        <Grid container spacing={5} style={{height:"100vh", width: "100vw", padding: 90}} alignContent="center" alignItems="center">
            <Grid item xs={12} sm={12} md={6}  spacing={3}>
                <Typography variant="h3" component="h1" align="left" gutterBottom>
                    ¡Hola!
                </Typography>
                <Typography variant="h3" component="h1" align="left" gutterBottom>
                    Soy <span style={{color:"#049DD9"}}>Daniel,</span>
                </Typography>
                <Typography variant="h3" component="h1" align="left" gutterBottom>
                    Jr. Frontend Developer
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} spacing={3}>
                <img src={hello} alt="hello" style={{width: "40vw"}}/>
            </Grid>
        </Grid>
    )
};

export default Header;