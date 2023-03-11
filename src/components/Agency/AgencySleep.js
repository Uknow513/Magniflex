import React from 'react';

import { Container } from '../Common/Container';
import Mattress_Img from '../../assets/Agency/design-mattress.jpg';

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        "& img": {
            width: '100%'
        }
    },
    desc: {
        fontSize: '20px',
        padding: '0px 12px'
    }
}))

const AgencySleep = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width:1200px)');
    const match2 = useMediaQuery('(min-width:1000px)');

    return (
        <Box>
            <Container
                children={
                    <Grid container spacing={2} className={classes.root}>
                        <Grid item xs={match1 ? 6 : match2 ? 10 : 12}>
                            <img src={Mattress_Img} />
                        </Grid>
                        {
                            match2 &&
                            <Grid item xs={1}></Grid>
                        }
                        <Grid item xs={match2 ? 5 : 12} className={classes.desc}>
                            Oggi Magniflex è una
                            grande realtà internazionale, considerata portavoce del sonno ristoratore Made in Italy nel mondo.
                        </Grid>
                    </Grid>
                }
            >
            </Container>
        </Box>
    )
}

export default AgencySleep;