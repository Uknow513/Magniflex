import React from 'react';

import { Container } from '../Common/Container';

import {
    Box,
    Grid,
    useMediaQuery
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '1320px',
        display: 'flex',
        padding: '48px 0px',
        margin: 'auto',
        marginTop: '48px'
    },
    title: {
        fontSize: '20px',
        color: '#B09987',
        marginBottom: '24px',
        '@media (max-width:1000px)': {
            fontSize: '17px'
        }
    },
    text1: {
        color: '#174860',
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '20px',
        '@media (max-width:1000px)': {
            fontSize: 'calc(20px + 0.6vw)'
        }
    },
    text2: {
        color: '#174860',
        fontSize: '20px',
        marginBottom: '20px',
        '@media (max-width:1000px)': {
            fontSize: '17px'
        }
    }
}))

const Laboratory = () => {

    const classes = useStyles();

    const match = useMediaQuery('(min-width : 1000px)');

    return (
        <Box className={classes.root}>
            <Container
                children = {
                    <Grid container>
                        <Grid item xs={match ? 4 : 12}>
                            <Box className={classes.title}>
                                1962
                            </Box>
                            <Box className={classes.text1}>
                                Negli anni '60 Giuliano Magni creava i suoi primi materassi in un piccolo laboratorio.
                                Era l'inizio di un percorso che si sarebbe trasformato in una rivoluzione.
                            </Box>
                        </Grid>
                        <Grid item xs={match ? 8 : 12} sx={{paddingLeft: match ? '110px' : '0px'}}>
                                <Box className={classes.title}>
                                    LE ORIGINI
                                </Box>
                                <Box className={classes.text2}>
                                    A Prato, capitale mondiale dei tessuti, la forte competenza artigianale si sposava con idee innovative sul riposo e sul benessere.<br/><br/>
        
                                    Da allora Magniflex ha fatto dormire bene, e risvegliare ancora meglio, oltre 50 milioni di persone, grazie a un'offerta di soluzioni e modelli studiati per soddisfare le più varie esigenze di comfort, relax e salute.<br/><br/>
        
                                    Nel corso degli ultimi 60 anni, la passione per la ricerca e i grandi investimenti nell'innovazione, nel design e nello sviluppo di sistemi produttivi all'avanguardia hanno reso Magniflex sinonimo universale di comfort e benessere.
                                </Box>
                        </Grid>
                    </Grid>
                }
            >
            </Container>
        </Box>
    )
}

export default Laboratory;