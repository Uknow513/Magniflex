import React from 'react';

import { Container } from '../Common/Container';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: '#F7F7F7'
    },
    fontStyle: {
        fontSize: '180px',
        fontWeight: 700,
        color: '#e4e8e9',
        lineHeight: 0.8,
        margin: 'auto',
        "@media (max-width:1000px)": {
            fontSize: '160px'
        },
        "@media (max-width:768px)": {
            fontSize: '110px'
        },
        "@media (max-width:576px)": {
            fontSize: '68px'
        },
    }
}))

const AgencyPannel = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Box className={classes.fontStyle}>
                        60 ANNI
                    </Box>
                }
            >
            </Container>
        </Box>
    )
}

export default AgencyPannel;