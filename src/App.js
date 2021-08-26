import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './components/NavBar';
import NavBarMobile from './components/NavBarMobile';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Form from './components/Form';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <NavBar/>
      <Header className={classes.offset}/>
      <Profile/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Form/>
      <Footer/>
      <NavBarMobile/>
    </div>
  );
}

export default App;
