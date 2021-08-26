import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const ItemExperience = (props) => {

    return(
        
        <Grid container item alignContent="center" alignItems="center" className="experience">
            <Grid item md={3}>
                <img src={props.img} alt="logo company"/>
            </Grid>
            <Grid item md={9} className="job-info">
                <Typography align="left" className="job-title">
                    {props.title}                    
                </Typography>
                <Typography align="left" style={{marginBottom: -5}}>
                    {props.year} - {props.company}                    
                </Typography>
                <Typography align="left">
                    {props.province} - {props.country}                    
                </Typography>

            </Grid>
        </Grid>
       
    )
};

export default ItemExperience;