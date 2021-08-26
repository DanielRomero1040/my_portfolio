import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import profile from '../assets/profile.png'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Profile = () => {
    const classes = useStyles();

    return(
        <Grid container  id="profile" className={classes.root} alignContent="center" alignItems="center">
            <Grid className={classes.paper} item xs={12} sm={12} md={6} >
                <img src={profile} alt="profile" style={{width: "40vw"}}/>
            </Grid>
            <Grid className={classes.paper} item xs={12} sm={12} md={6} >
                <Typography className={classes.paper} variant="h4" component="h1" align="left" gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        PERFIL PROFESIONAL
                    </Box>
                </Typography>
                <Typography className={classes.paper} variant="h6" component="div" align="justify" gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        Lorem ipsum dolor sit <span style={{color:"#A9BF04"}}>amet</span>, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet
                        dolore magna <span style={{color:"#049DD9"}}>aliquam</span> erat volutLorem
                        ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore.
                    </Box>
                </Typography>
                <Typography className={classes.paper} variant="h6" component="div" align="justify" fontWeight="fontWeightBold" gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut <span style={{color:"#049DD9"}}>aliquip</span> ex ea commodo
                        consequat. Duis autem vel eum iriure
                        dolor in hendrerit in vulputate <span style={{color:"#A9BF04"}}>velit</span>
                    </Box>
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Profile;