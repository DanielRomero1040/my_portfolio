import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ItemExperience from './ItemExperience';
import coder from '../assets/img.jpeg';
import freelance from '../assets/logo.png';

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

    return(
        <Grid container spacing={5} style={{height:"100vh", width: "100vw", padding: 90}} alignContent="center" alignItems="center">
            {
                experiences.map( (el) => (
                    <Grid item container xs={12} sm={12} md={6} spacing={6}>
                        <ItemExperience img={el.img} title={el.title} year={el.year} company={el.company} province={el.province} country={el.country} />
                    </Grid>
                ))
            }
        </Grid>
    )
};

export default Experience;