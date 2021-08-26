import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logoNombre from '../assets/logoNombre.png';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CodeIcon from '@material-ui/icons/Code';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ChatIcon from '@material-ui/icons/Chat';
import '../App.css';

import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
    appBar: {
        top: 'auto',
        bottom: 0,        
      },
  }));

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }
  
  const NavBarMobile = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    
    
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return(
        <div className={classes.root}>
            <AppBar id='navbar-mobile' position="fixed" color="default" className={classes.appBar}>
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="off"
                aria-label="scrollable prevent tabs example"
                >
                    <a href="#header">
                        <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
                    </a>
                    <a href="#profile">
                        <Tab label="Perfil" icon={<AccountBoxIcon />} {...a11yProps(1)} />
                    </a>
                    <a href="#skills">
                        <Tab label="Skills" icon={<CodeIcon />} {...a11yProps(2)} />
                    </a>
                    <a href="#portfolio">
                        <Tab label="Portfolio" icon={<PhotoLibraryIcon />} {...a11yProps(3)} />
                    </a>
                    <a href="#contact">
                        <Tab label="Contacto" icon={<ChatIcon />} {...a11yProps(4)} />
                    </a>

                </Tabs>
            </AppBar>
        </div>
    )
};

export default NavBarMobile;