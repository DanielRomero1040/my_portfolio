import React from 'react';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import logo from '../assets/logo.png'

const styleInput = {
    margin: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#049DD9' // terminar estilo del formulario, parece que no toma el border radius para los textareas de material ui
};

const Form = () => {
    return(
        <Grid container>
            <Grid item>
                <div style={{width: 250, paddingLeft: 50, paddingRight: 50}}>
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
                    <img src={logo} alt="logo"/>
                </div>

            </Grid>
            <Grid item xs={12} md={8}>
                <form style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Grid>
                        <input
                        required
                        id="outlined-number"
                        placeholder="Nombre"
                        type="text"
                       
                        style={styleInput}
                        />
                        <input
                        required
                        id="outlined-number"
                        placeholder="Apellido"
                        type="text"
                        style={styleInput}
                        />     
                        <input
                        required
                        id="outlined-number"
                        placeholder="email"
                        type="email"
                        style={styleInput}
                        />                             
                    </Grid>
                    <textarea
                    id="outlined-multiline-static"
                    rows={7}
                    placeholder="       Deja tu mensaje acá"
                    style={{
                        width:"55vw", 
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: '#049DD9'}}
                    />
                
                    
                </form>
            </Grid>
        </Grid>
    )
}

export default Form;