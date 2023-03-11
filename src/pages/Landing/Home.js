import React from 'react';

import Background_Img from '../../assets/home.jpg'
import BadgeLogo_Img from '../../assets/badge-logo.png'

import {
    Box,
    Container
} from '@mui/material';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${Background_Img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: 'calc(100vh - 150px) !important',
        maxHeight: '770px'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100% !important'
    },
    mainContent: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
    },
    subTitle: {
        fontSize: 'calc(20px + .3vw)',
        marginBottom: '24px'
    },
    mainTitle: {
        fontSize: 'calc(22px + 1.5vw)',
        fontWeight: 'bold',
        marginBottom: '8px'
    }
}))

const Home = () => {

    const classes = useStyles();
    
    return (
        <Box className={classes.root} data-aos="fade" data-aos-duration='2000'>
            <Container sx={{height: '100%'}}>
                <Box className={classes.container}>
                    <Box className={classes.mainContent}>
                        <Box className={classes.subTitle}>
                            LA NOSTRA ESSENZA
                        </Box>
                        <Box className={classes.mainTitle}>
                            Di notte diamo vita ai tuoi giorni.<br/>
                            Da oltre 60 anni.
                        </Box>
                        <img src={BadgeLogo_Img} width={'110px'}/>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Home;