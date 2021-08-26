import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemExperience from './ItemExperience';
import coder from '../assets/img.jpeg';
import freelance from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const experiences = [
    {
        img: coder,
        title: 'TUTOR DESARROLLO WEB',
        year: '2021',
        company: 'CODERHOUSE',
        province: 'Buenos Aires',
        country: 'Argentina'
    },
    {
        img: freelance,
        title: 'DESARROLLADOR WEB FREELANCE',
        year: '2020',
        company: 'PROYECTOS VARIOS',
        province: 'Buenos Aires',
        country: 'Argentina'
    }

]


const Experience = () => {
    const classes = useStyles();

    return(
        <Grid container alignContent="center" alignItems="center" className={classes.root} style={{marginBottom:80}}>
            {
                experiences.map( (el) => (
                    <Grid item container xs={12} sm={12} md={6} alignContent="center" alignItems="center" key={el.title} className={classes.paper}>
                        <ItemExperience img={el.img} title={el.title} year={el.year} company={el.company} province={el.province} country={el.country}/>
                    </Grid>
                ))
            }
        </Grid>
    )
};

export default Experience;