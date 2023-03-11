import React, { useEffect , useRef, useState  } from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

import Routing from './Routes';

import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        height: '100vh',
        overflowX: 'auto', 
        overflowY: 'scroll',
    }
}))

AOS.init({
    once: true,
    duration: 2000
});

const Main = (props) => {
    const classes = useStyles() ;

    const scrollTop = useRef({                
        current : {
            innerText : "efefef"
        }
    }) ;

    return (
        <Box className={classes.root} ref={scrollTop}>
            <Header />
            <Routing />
            <Footer />
        </Box>
    )
}

Main.propTypes = {
}

export default Main ;