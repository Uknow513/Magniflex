import React from 'react';

import { Container } from '../Common/Container';
import Magniflex_Img from '../../assets/StoriaBlock/magniflex-family.jpg'

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: '#F7F7F7',
        padding: '140px 0px',
        '@media (max-width:1280px)': {
            padding: '90px 0px'
        },
        '@media (max-width:768px)': {
            padding: '70px 0px'
        }
    },
    center: {
        display: 'flex',
        alignItems: 'center'
    },
    title : {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '3rem',
        "@media (max-width:1000px)": {
            fontSize: 'calc(20px + 0.6vw)'
        }
    },
    desc: {
        fontSize: '20px',
        "@media (max-width:1000px)": {
            fontSize: '17px'
        }
    },
    imageContent: {
        padding: '0px 12px',
    },
    familyImg: {
        width: '100%',
        verticalAlign: 'middle',
    }
}))

const HistoryCompany = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width:1200px)');
    const match2 = useMediaQuery('(min-width:1000px)');

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Grid container spacing={3} className={classes.center}>
                        <Grid item xs={match1 ? 4 : match2 ? 6 : 12} className={classes.imageContent}>
                            <Box className={classes.title}>
                                Magniflex oggi
                            </Box>
                            <Box className={classes.desc}>
                                L'azienda è presente in tutto il mondo con oltre 4000 rivenditori in 99 mercati internazionali, ed è fornitore di oltre 500 grandi alberghi. Un management giovane e determinato prosegue lo sviluppo del brand lungo la strada tracciata dal presidente Giuliano Magni, gestendo un sistema imprenditoriale con profonde radici territoriali, sempre più orientato all'espansione worldwide.
                            </Box>
                        </Grid>
                        <Grid item xs={match1 ? 8 : match2 ? 6 : 12}>
                            <img src={Magniflex_Img} className={classes.familyImg}/>
                        </Grid>
                    </Grid>
                    }
            >
            </Container>
        </Box>
    )
}

export default HistoryCompany;