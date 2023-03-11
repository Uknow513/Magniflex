import React from 'react';

import { Container } from '../Common/Container';
import Champion_Img from '../../assets/Sport/bg-campioni.jpg';

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        background: '#F7F7F7',
        fontSize: '20px',
        "& img" : {
            marginBottom: '0.25rem'
        },
        "@media (max-width:576px)": {
            fontSize: '17px'
        }
    },
    container: {
        padding: '140px 0px',
        '@media (max-width:1280px)': {
            padding: '90px 0px'
        },
        '@media (max-width:768px)': {
            padding: '70px 0px'
        },
    },
    topic: {
        color: '#B09987',
        marginBottom: '3rem'
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        lineHeight: 1.2,
        marginBottom: '3rem',
        "@media (max-width:1000px)": {
            fontSize: '20px'
        }
    },
    rightBlock: {
        backgroundImage: `url(${Champion_Img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        width: '33%',
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        "@media (max-width:768px)": {
            width: '100%',
            height: '270px',
            position: 'unset'
        }
    }
}))

const Champion = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width:1000px)')
    const match2 = useMediaQuery('(min-width:768px)')

    return (
            <Box className={classes.root}>
                <Box className={classes.container}>
                    <Container
                        children={
                            <>
                                <Grid container>
                                    <Grid item xs={match1 ? 7 : match2 ? 8 : 12}>
                                        <Box className={classes.title}>
                                            Conquistiamo i campioni di tutto il mondo.
                                        </Box>
                                        <Box className={classes.desc}>
                                            Tra gli atleti di talento e Magniflex c’è un legame che fa parte di una lunga tradizione, che va dalle storiche sponsorizzazioni nel mondo del ciclismo, alle più recenti collaborazioni con stelle del rugby, fino ad arrivare alla sponsorizzazione della nazionale di calcio italiana.<br/><br/>
                                            Lo sport, come un sonno ristoratore, è una passione senza confini, in Italia come nel resto del mondo. I 20 anni di presenza in Giappone, hanno spinto l’azienda a legarsi ai più importanti eventi sportivi del paese, tanto che alcuni dei più celebri campioni giapponesi sono diventati importanti testimonial.
                                        </Box>
                                    </Grid>
                                </Grid>
                            </>
                        }
                    >
                    </Container>
                </Box>
                <Box className={classes.rightBlock} />
            </Box>
    )
}

export default Champion;