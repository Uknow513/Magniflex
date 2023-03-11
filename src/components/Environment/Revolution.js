import React from 'react';

import { Container } from '../Common/Container';
import Sottovuoto_Img from '../../assets/Environment/bg-sottovuoto.jpg';
import Signor_Img from '../../assets/Environment/signor-magniflex.jpg';

import {
    Box,
    Grid,
    Button,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: '#F7F7F7',
        fontSize: '20px',
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
        marginBottom: '1.5rem'
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        "@media (max-width:1000px)": {
            fontSize: '20px'
        }
    },
    desk: {
        "@media (max-width:1000px)": {
            fontSize: '17px'
        }
    },
    stripe: {
        position: 'relative',
        overflow: 'hidden',
        marginTop: '30px'
    },
    span: {
        backgroundImage: `url(${Sottovuoto_Img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'absolute',
        top: 'auto',
        bottom: 0,
        width: '100%',
        height: '70%'
    },
    signorImg: {
        width: '100%',
        height: '100%'
    }
}))

const Revolution = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width:1400px)');
    const match2 = useMediaQuery('(min-width:1200px)');
    const match3 = useMediaQuery('(min-width:1000px)');

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Grid container>
                        {
                            match1 &&
                            <Grid item xs={1}></Grid>
                        }
                        <Grid item xs={match1 ? 3 : match2 ? 4 : match3 ? 5 : 12}>
                            <Box className={classes.topic}>
                                SOTTOVUOTO
                            </Box>
                            <Box className={classes.title}>
                                Una rivoluzione targata Magniflex
                            </Box>
                        </Grid>
                        {
                            match3 &&
                            <Grid item xs={match2 ? 2 : 1}></Grid>
                        }
                        <Grid item xs={match3 ? 6 : 12} className={classes.desc}>
                            A Prato, capitale mondiale dei tessuti, la forte competenza artigianale si sposava con idee innovative sul riposo e sul benessere.
                            Da allora Magniflex ha fatto dormire oltre 50 milioni di persone, grazie a un'offerta di soluzioni e modelli studiati per soddisfare le più varie esigenze di comfort, relax e salute. Nel corso degli ultimi 60 anni, la passione per la ricerca e i grandi investimenti nell'innovazione, nel design e nello sviluppo di sistemi produttivi all'avanguardia hanno reso Magniflex sinonimo universale di comfort e benessere.
                        </Grid>
                    </Grid>
                }
            >
            </Container>

            <Box className={classes.stripe}>
                <Box className={classes.span} />
                <Container
                    children={
                        <Grid container
                            sx={{
                                position: 'relative !important',
                                zIndex: '1000 !important'
                            }}
                        >
                            <Grid item xs={match3 ? 5 : 6}>
                                <img src={Signor_Img} className={classes.signorImg}/>
                            </Grid>
                        </Grid>
                    }
                >
                </Container>
            </Box>
        </Box>
    )
}

export default Revolution;