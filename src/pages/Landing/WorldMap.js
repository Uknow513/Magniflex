import React from 'react';

import { Container } from '../../components/Common/Container';
import WorldMap_Img from '../../assets/world-map.jpg';

import {
    Box,
    Button,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${WorldMap_Img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100%',
        height: 'calc(100vh - 150px)',
        paddingBottom: '140px',
        marginTop: '50px',

        "@media (max-width:1000px)": {
            paddingBottom: '90px'
        },
        "@media (max-width:768px)": {
            height: 'unset',
            paddingBottom: '70px'
        }
    },
    content: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '20px',
        color: '#B09987',
        padding: '20px 0px',
        marginBottom: '1rem'
    },
    desc: {
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        "@media (max-width:1000px)": {
            fontSize: 'calc(20px + 0.9vw)'
        },
        "@media (max-width:768px)": {
            fontSize: 'calc(20px)'
        }
    },
    btn: {
        fontSize: '12px !important',
        fontWeight: 'bold !important',
        letterSpacing: '0.12em !important',
        borderColor: '#174860 !important',
        padding: '12px 30px !important',
        marginTop: '24px !important',

        "&:hover": {
            backgroundColor: '#2f88b1 !important',
            borderColor: '#2f88b1 !important',
            color: 'white',
        }
    }
}))

const WorldMap = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Box className={classes.content}>
                        <Box className={classes.title}>
                            PUNTI VENDITA
                        </Box>
                        <Box className={classes.desc}>
                            Trova il punto vendita più vicino a te
                        </Box>
                        <Button variant='outlined' className={classes.btn}>
                            scopri di più
                        </Button>
                    </Box>
                }
            >
            </Container>
        </Box>
    )
}

export default WorldMap;