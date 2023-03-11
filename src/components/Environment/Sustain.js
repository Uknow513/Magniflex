import React from 'react';

import { Container } from '../Common/Container';
import Nature_Img from '../../assets/Environment/rispetto-natura.jpg';
import Logo_Img from '../../assets/Environment/logo.png';

import {
    Box,
    Grid,
    Button,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        fontSize: '20px',
        padding: '140px 0px',
        '@media (max-width:1280px)': {
            padding: '90px 0px'
        },
        '@media (max-width:768px)': {
            padding: '70px 0px'
        },
        "@media (max-width:576px)": {
            fontSize: '17px'
        }
    },
    mainContent: {
        display: 'flex',
        alignItems: 'center',
        "& img": {
            width: '100%'
        }
    },
    topic: {
        color: '#B09987',
        marginBottom: '1.5rem'
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '3rem',
        marginBottom: '1.5rem',
        paddinTop: '1rem',
        "@media (max-width:1000px)": {
            fontSize: '20px'
        }
    },
    desc: {
        marginBottom: '0.5rem'
    },
    footerContent: {
        marginTop: '50px !important'
    },
    logoImg: {
        maxWidth: '100%',
        marginBottom: '3rem'
    },
    linkBtn: {
        fontSize: '12px !important',
        fontWeight: 'bold !important',
        letterSpacing: '0.12em !important',
        borderColor: '#174860 !important',
        padding: '12px 30px !important',

        "&:hover": {
            backgroundColor: '#2f88b1 !important',
            borderColor: '#2f88b1 !important',
            color: 'white',
        }
    }
}))

const Sustain = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width : 1200px)');
    const match2 = useMediaQuery('(min-width : 1000px)');
    const match3 = useMediaQuery('(min-width : 768px)');

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Box>
                        <Grid container spacing={3} className={classes.mainContent}>
                            <Grid item xs={match2 ? 6 : 12}>
                                <Box className={classes.topic}>
                                    SUSTAINABILITY
                                </Box>
                                <img src={Nature_Img} />
                            </Grid>
                            {
                                match1 &&
                                <Grid item xs={1}></Grid>
                            }
                            <Grid item xs={match1 ? 5 : match2 ? 6 : 12}>
                                <Box className={classes.title}>
                                    In a better world we wake up better
                                </Box>
                                <Box className={classes.desc}>
                                    Magniflex has always operated in the name of environmental responsibility, the company has reduced CO2 emissions also thanks to the use of photovoltaic panels. The constant ecological commitment is also recognized by two certifications: OEKO-TEX ® CLASS I, which guarantees the absence of toxic and harmful substances for humans and the environment within each component of the final product, and GOTS, which certifies the creation of fabrics made with 100% organic materials.
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className={classes.footerContent}>
                            {
                                match1 &&
                                <Grid item xs={1}></Grid>
                            }
                            <Grid item xs={match1 ? 5 : match2 ? 6 : match3 ? 8 : 10}>
                                Magniflex ha inoltre deciso di abbracciare il progetto SDG's dell'ONU, per guidare una strategia di miglioramento ambientale chiara e misurabile in tutta la sua impresa.
                            </Grid>
                            {
                                match1 &&
                                <Grid item xs={1}></Grid>
                            }
                            <Grid item xs={match1 ? 3 : match2 ? 5 : match3 ? 8 : 10}>
                                <img src={Logo_Img} className={classes.logoImg}/>
                                <Button variant='outlined' className={classes.linkBtn}>
                                    Find out more
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                }
            >
            </Container>
        </Box>
    )
}

export default Sustain;