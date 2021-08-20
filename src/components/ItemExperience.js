import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const ItemExperience = (props) => {

    return(
        
        <Grid container item alignItems="center">
            <Grid item md={3}>
                <img style={{borderRadius: '50%', height: 70, width: 70 ,border: '4px solid #03738C', marginRight: 30}} src={props.img} alt="logo company"/>
            </Grid>
            <Grid item md={9}>
                <Typography align="left" style={{fontSize: 24, marginBottom: 15}}>
                    {props.title}                    
                </Typography>
                <Typography align="left" style={{fontSize: 21, marginBottom: -5}}>
                    {props.year} - {props.company}                    
                </Typography>
                <Typography align="left" style={{fontSize: 21}}>
                    {props.province} - {props.country}                    
                </Typography>

            </Grid>
        </Grid>
       
    )
};

export default ItemExperience;