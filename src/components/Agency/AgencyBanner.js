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
        background: '#F7F7F7',
        fontSize: '20px',
        padding: '140px 0px',
        '@media (max-width:1280px)': {
            padding: '90px 0px'
        },
        '@media (max-width:768px)': {
            padding: '70px 0px'
        },
        '@media (max-width:586px)': {
            fontSize: '17px'
        }
    },
    title: {
        color: '#B09987'
    }
}))

const AgencyBanner = () => {

    const classes = useStyles();

    const match = useMediaQuery('(min-width:1000px)');

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Grid container spacing={2}>
                        <Grid item xs={match ? 4 : 12} className={classes.title}>
                            I NUMERI
                        </Grid>
                        <Grid item xs={match ? 4 : 12}>
                            <strong> 60 anni </strong> di storia.<br/>
                            Un catalogo di <strong> 170 prodotti.</strong><br/>
                            Presente in <strong> 99 paesi.</strong><br/>
                            Più di <strong> 4.000 rivenditori.</strong><br/>
                        </Grid>
                        <Grid item xs={match ? 4 : 12}>
                            Oltre <strong> 40 milioni di clienti</strong> nel mondo.<br/>
                            <strong> 10.000 materassi</strong> prodotti al giorno.<br/>
                            Presenti in oltre <strong> 500 alberghi.</strong><br/>
                        </Grid>
                    </Grid>
                }
            >

            </Container>
        </Box>
    )
}

export default AgencyBanner;