import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import profile from '../assets/profile.png'
import Box from '@material-ui/core/Box';

const Profile = () => {

    return(
        <Grid container spacing={5} style={{height:"100vh", width: "100vw", padding: 90}} alignContent="center" alignItems="center">
            <Grid item xs={12} sm={12} md={6} spacing={3}>
                <img src={profile} alt="profile" style={{width: "40vw"}}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}  spacing={3}>
                <Typography variant="h4" component="h1" align="left" gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        PERFIL PROFESIONAL
                    </Box>
                </Typography>
                <Typography variant="h6" component="p" align="justify" gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        Lorem ipsum dolor sit <span style={{color:"#A9BF04"}}>amet</span>, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet
                        dolore magna <span style={{color:"#049DD9"}}>aliquam</span> erat volutLorem
                        ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore.
                    </Box>
                </Typography>
                <Typography variant="h6" component="p" align="justify" fontWeight="fontWeightBold" gutterBottom>
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