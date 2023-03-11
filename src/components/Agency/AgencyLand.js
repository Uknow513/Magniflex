import React from 'react';

import { Container } from '../Common/Container';
import Land_Img from '../../assets/Agency/bg-tuscany-banner.jpg';
import Paesaggio_Img from '../../assets/Agency/paesaggio-toscana.jpg';

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${Land_Img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        color: 'white',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        padding: '48px 12px'
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
        '@media (max-width:768px)': {
            fontSize: '17px'
        }
    },
    PaesImg: {
        margin: '80px 0 -30px'
    }
}))

const AgencyLand = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width:1000px)');
    const match2 = useMediaQuery('(min-width:768px)');

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Grid container className={classes.content}>
                        <Grid item xs={match1 ? 5 : match2 ? 6 : 12}>
                            <Box className={classes.title}>
                                La Toscana, una terra di incanti
                            </Box>
                            <Box className={classes.desc}>
                                Magniflex nasce in Toscana, una regione benedetta dalla natura, dove la bellezza dei paesaggi ha sempre ispirato arte e genio. È una ricchezza che non poteva non influenzare positivamente la cultura aziendale. Perché far svegliare bene il mondo è, senza dubbio, una forma d'arte.
                            </Box>
                        </Grid>
                        {
                            match1 &&
                            <Grid item xs={1}></Grid>
                        }
                        {
                            match2 &&
                            <Grid item xs={6}>
                                <img src={Paesaggio_Img} className={classes.PaesImg}/>
                            </Grid>
                        }
                    </Grid>
                }
            >
            </Container>
        </Box>
    )
}

export default AgencyLand;