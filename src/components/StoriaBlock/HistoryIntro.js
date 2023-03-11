import React from 'react';

import { Container } from '../Common/Container';
import Logo_Img from '../../assets/StoriaBlock/historyIntro.svg';
import Fir_Img from '../../assets/StoriaBlock/storia-1.jpg';
import Sec_Img from '../../assets/StoriaBlock/storia-2.jpg';
import Thi_Img from '../../assets/StoriaBlock/storia-3.jpg';

import {
    Box,
    Grid,
    useMediaQuery
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        color: '#174860',
        fontSize: '20px',
        '@media (max-width:586px)': {
            fontSize: '17px'
        }
    },
    banner: {
        padding: '140px 0px',
        '@media (max-width:1280px)': {
            padding: '90px 0px'
        },
        '@media (max-width:768px)': {
            padding: '70px 0px'
        }
    },
    title: {
        position: 'relative',
        fontSize: '40px',
        fontWeight: 'bold',
        '@media (max-width:1000px)': {
            fontSize: 'calc(22px + 0.9vw)',
            marginBottom: '24px'
        }
    },
    logo: {
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(-50%, -50%) !important'
    },
    padding: {
        paddingRight: '48px !important',
        '@media (max-width:1400px)': {
            paddingRight: '0px !important'
        }
    }
}))

const HistoryIntro = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width : 1200px)');
    const match2 = useMediaQuery('(min-width : 1000px)');
    const match3 = useMediaQuery('(min-width : 586px)');

    return (
        <Box className={classes.root}>
            <Box className={classes.banner}>
                <Container
                    children={
                        <Grid container spacing={1}>
                            <Grid item xs={match1 ? 3 : match2 ? 4 : 12}>
                                <Box className={classes.title}>
                                    La nostra essenza
                                    <img src={Logo_Img} className={classes.logo}/>
                                </Box>
                            </Grid>
                            <Grid item xs={match1 ? 4 : match2 ? 4 : 12} className={classes.padding}>
                                <Box>
                                    Nel DNA di Magniflex ci sono la ricerca della migliore qualità del sonno, una propensione naturale all’innovazione, il rispetto dell’ambiente.
                                </Box>
                            </Grid>
                            <Grid item xs={match1 ? 5 : match2 ? 4 : 12}>
                                Elementi fondamentali, senza i quali non potremmo realizzare il nostro sogno: offrirvi un’esperienza di riposo in grado di ricaricarvi mentre dormite. Per affrontare la giornata, e la vita, con il massimo benessere possibile.
                            </Grid>
                        </Grid>
                    }
                >
                </Container>
            </Box>
            <Grid container spacing={2} sx={{padding: '0px 12px'}}>
                <Grid item xs={match3 ? 4 : 12}>
                    <img src={Fir_Img} width={'100%'}/>
                </Grid>
                <Grid item xs={match3 ? 4 : 12}>
                    <img src={Sec_Img} width={'100%'}/>
                </Grid>
                <Grid item xs={match3 ? 4 : 12}>
                    <img src={Thi_Img} width={'100%'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HistoryIntro;