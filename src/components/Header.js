import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import hello from '../assets/hello.svg';
import { gsap } from 'gsap';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Header = () => {
    const classes = useStyles();


    // const el = useRef();
    // const q = gsap.utils.selector(el);

    // useEffect(()=>{
    //     gsap.to(q('.hello'), {x:100});
    // },[])

    return(
        <Grid container id="header" className={classes.root} style={{height:'85vh'}} alignContent="center" alignItems="center">
            <Grid  item className={classes.paper} xs={12} sm={12} md={6}  >
                <Typography className={classes.paper} variant="h3" component="h1" align="left" gutterBottom>
                    ¡Hola!
                </Typography>
                <Typography className={classes.paper} variant="h3" component="h1" align="left" gutterBottom>
                    Soy <span style={{color:"#049DD9"}}>Daniel,</span>
                </Typography>
                <Typography className={classes.paper} variant="h3" component="h1" align="left" gutterBottom>
                    Jr. Frontend Developer
                </Typography>
            </Grid>
            <Grid item  className={classes.paper}xs={12} sm={12} md={6} >
                <img className='hello' src={hello} alt="hello" />
            </Grid>
        </Grid>
    )
};

export default Header;