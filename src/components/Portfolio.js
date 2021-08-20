import React from 'react';
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
        projectName: 'name1',
        src: portfolio1
    },
    {
        projectName: 'name2',
        src: portfolio2
    },
    {
        projectName: 'name3',
        src: portfolio3
    },
    {
        projectName: 'name4',
        src: portfolio4
    },
    {
        projectName: 'name5',
        src: portfolio5
    },
    {
        projectName: 'name6',
        src: portfolio6
    }
]

const Portfolio = () => {
    return(
        <Grid container spacing={0} style={{padding:'4%', flexGrow:1}}>
            {
                projects.map((el) => (
                    <Grid container item xs={10} md={4} >
                        <ItemPortfolio src={el.src} name={el.projectName}/>
                    </Grid>
                ))
            }

        </Grid>
    )
}

export default Portfolio