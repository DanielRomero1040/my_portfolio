import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import skills from '../assets/skills.png'
import Box from '@material-ui/core/Box';

const Skills = () => {

    return(
        <Grid container style={{height:"100vh"}} alignContent="center" alignItems="center">
            
                <img src={skills} alt="skills" style={{width: "100vw"}}/>
                        
        </Grid>
    )
};

export default Skills;