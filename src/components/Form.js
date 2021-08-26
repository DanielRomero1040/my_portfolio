import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import logo from '../assets/logo.png'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Form = () => {
    const classes = useStyles();

    return(
        <Grid container id="contact" className={classes.root}>
            <Grid container item xs={12} md={4} justifyContent="center">
                <div className={classes.paper} style={{width: 250, paddingLeft: 50, paddingRight: 50}}>
                    <h1>
                        CONTACTOS
                    </h1>
                    <p>
                        ¿En qué te puedo ayudar?
                    </p>
                    <p>
                        Déjame tu mensaje y estaré
                        respondiendo a la brevedad.
                    </p>
                    <img style={{marginTop: 35}} src={logo} alt="logo"/>
                </div>

            </Grid>
            <Grid container item xs={12} md={8} style={{paddingTop: 60, textAlign:'center'}}>
                <form className={classes.paper} >
                    <div className="inputs" >
                        <input
                        required
                        id="outlined-number"
                        placeholder="Nombre"
                        type="text"
                        />
                        <input
                        required
                        id="outlined-number"
                        placeholder="Apellido"
                        type="text"
                        />     
                        <input
                        required
                        id="outlined-number"
                        placeholder="email"
                        type="email"
                        />                             
                    </div>
                    <div style={{width: '99.5%'}}>
                        <textarea
                        id="outlined-multiline-static"
                        rows={10}
                        placeholder="Deja tu mensaje acá"
                        
                        />
                    </div>
                
                    
                </form>
            </Grid>
        </Grid>
    )
}

export default Form;