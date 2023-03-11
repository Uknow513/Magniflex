import React from 'react';

import { Container } from '../Common/Container';
import Materie_Img from '../../assets/Agency/materie-prime.jpg';

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        padding: '140px 0px',
        '@media (max-width:1280px)': {
            padding: '90px 0px'
        },
        '@media (max-width:768px)': {
            padding: '70px 0px'
        },
        "& img": {
            width: '100%'
        }
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '3rem',
        '@media (max-width:1000px)': {
            fontSize: '20px'
        }
    },
    desc: {
        fontSize: '20px',
        marginBottom: '24px',
        '@media (max-width:576px)': {
            fontSize: '17px'
        }
    }
}))

const AgencyQuality = () => {

    const classes = useStyles();

    const match = useMediaQuery('(min-width:1000px)');

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Grid container spacing={2}>
                        <Grid item xs={match ? 5 : 12}>
                            <Box className={classes.title}>
                                La qualità delle materie e delle capacità
                            </Box>
                            <Box className={classes.desc}>
                                Magniflex è sinonimo di eccellenza. Da sempre i prodotti dell'azienda si distinguono per il reale valore aggiunto offerto ai clienti. La qualità. Questo è possibile perché Magniflex utilizza materiali 100% italiani, avvalendosi della competenza di tecnici specializzati e di oltre 180 professionisti che lavorano a fianco a fianco, condividendo passione e know how.
                            </Box>
                        </Grid>
                        {
                            match &&
                            <Grid item xs={1}></Grid>
                        }
                        <Grid item xs={match ? 6 : 12}>
                            <img src={Materie_Img} />
                        </Grid>
                    </Grid>
                }
            >
            </Container>
        </Box>
    )
}

export default AgencyQuality;