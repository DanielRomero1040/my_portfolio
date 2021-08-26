import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import ItemPortfolio from './ItemPortfolio';
import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import portfolio3 from '../assets/portfolio-3.png';
import portfolio4 from '../assets/portfolio-4.png';
import portfolio5 from '../assets/portfolio-5.png';
import portfolio6 from '../assets/portfolio-6.png';

const projects = [
    {
        projectName: 'Mapa de Cortes',
        src: portfolio1,
        url: 'https://danielromero1040.github.io/Mapa_de_cortes/'
    },
    {
        projectName: 'Estudiemos Violin',
        src: portfolio2,
        url:'https://estudiemosviolin.000webhostapp.com/'
    },
    {
        projectName: 'Barbería - Prueba de maquetado',
        src: portfolio3,
        url: 'https://danielromero1040.github.io/Prueba_maquetado/'
    },
    {
        projectName: 'Imitación Mercado Libre ',
        src: portfolio4,
        url:'https://danielromero1040.github.io/ecommerce-romero/'
    },
    {
        projectName: 'Proyecyo E-commerce',
        src: portfolio5,
        url: 'https://danielromero1040.github.io/work_space_ecommerce_beginner/'
    },
    {
        projectName: 'Arismendi Car Audio',
        src: portfolio6,
        url: 'https://arismendicaraudio.000webhostapp.com/'
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Portfolio = () => {
    const classes = useStyles();

    return(
        <Grid container id="portfolio" spacing={0} className={classes.root} justifyContent="center" style={{marginBottom:80}}>
            {
                projects.map((el) => (
                    <Grid container item xs={12} md={4} className={classes.paper} justifyContent="center" key={el.projectName}>
                        <ItemPortfolio src={el.src} name={el.projectName} url={el.url} />
                    </Grid>
                ))
            }

        </Grid>
    )
}

export default Portfolio