import React from 'react';

import Background_Img from '../../assets/Agency/background.jpg';

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { Container } from '../Common/Container';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${Background_Img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        marginTop: '-35px',
        minHeight: '360px',
        height: `calc(100vh - 150px) !important`,
        maxHeight: '770px',
        position: 'sticky',
        zIndex: 100,
        "@media (max-width:1000px)": {
            marginTop: '-20px',
        },
        "@media (max-width:768px)": {
            marginTop: '-15px',
        }
    },
    align: {
        height: '100%',
        display: 'flex !important',
        alignItems: 'flex-end !important'
    },
    content: {
        backgroundColor: 'white',
        width: '100%',
        padding: '3rem',
        paddingBottom: '1.5rem',
        "@media (max-width:768px)": {
            padding: '16px 24px'
        }
    },
    mainContent: {
        margin: '48px',
        "@media (max-width:1000px)": {
            margin: '48px 0px 0px'
        }
    },
    title: {
        color: '#B09987',
        fontSize: '20px',
        marginBottom: '1.5rem',
        "@media (max-width:576px)": {
            fontSize: '17px'
        }
    },
    desc: {
        fontSize: '30px',
        fontWeight: 'bold',
        lineHeight: 1.2,
        "@media (max-width:1000px)": {
            fontSize: 'calc(20px + 0.6vw)'
        },
        "@media (max-width:576px)": {
            fontSize: 'calc(20px)'
        }
    },
}))

const BigBanner = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width:1200px)');
    const match2 = useMediaQuery('(min-width:1000px)');

    return (
        <Box className={classes.root}>
            <Container 
                children={
                    <Grid container>
                        <Grid item xs={match1 ? 6 : match2 ? 10 : 12} className={classes.align}>
                            <Box className={classes.content}>
                                <Box className={classes.mainContent}>
                                    <Box className={classes.title}>
                                        MADE IN ITALY
                                    </Box>
                                    <Box className={classes.desc}>
                                        La sensibilità artigianale e il genio italiano danno vita a prodotti unici, è solo così che il Made in Italy diventa garanzia di qualità a livello mondiale.
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                }
            >
            </Container>
        </Box>
    )
}

export default BigBanner;