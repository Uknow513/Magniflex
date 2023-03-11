import React from 'react';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { Container } from '../Common/Container';

const useStyles = makeStyles(() => ({
    root: {
        color: '#8C8C8C',
        padding: '140px 0px',
        '@media (max-width:1280px)': {
            padding: '90px 0px'
        },
        '@media (max-width:768px)': {
            padding: '70px 0px'
        }
    },
    title: {
        color: '#B09987',
        fontSize: '20px',
        marginBottom: '24px',
        '@media (max-width:768px)': {
            fontSize: '17px'
        }
    },
    desc: {
        fontSize: '30px',
        fontWeight: 'bold',
        '@media (max-width:1000px)': {
            fontSize: 'calc(20px + 0.6vw)'
        }
    }
}))

const HistoryPannel = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Box sx={{flexDirection: 'column'}}>
                        <Box className={classes.title}>
                            SHOWROOM
                        </Box>
                        <Box className={classes.desc}>
                            Florence - Tokyo - Cyprus - Dubai - Prague - Kiev - Milan - Manila - Sofia - Miami Bangalore - Osaka - Bucarest - Moscow - Nanjing - Dongguan - Shanghai - Bijing Shenzhen - Sidney - Rome - Abidjan - Belgrade - Budapest - Bogota - Medellin - Accra Zagreb - Santo Domingo - Punta del Este - Buenos Aires - Johannesburg - Cape Town
                        </Box>
                    </Box>
                }
            >
            </Container>
        </Box>
    )
}

export default HistoryPannel;