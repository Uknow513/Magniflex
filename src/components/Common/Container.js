import React from 'react';

import {
    Box,
} from '@mui/material'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '1320px',
        height: '100%',
        display: 'flex',
        padding: '0px 10px',
        margin: 'auto',
        '@media (max-width:1400px)': {
            maxWidth: '1140px'
        },
        '@media (max-width:1200px)': {
            maxWidth: '960px'
        },
        '@media (max-width:1000px)': {
            maxWidth: '720px'
        },
        '@media (max-width:768px)': {
            maxWidth: '540px'
        }
    }
}))

export const Container = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {props.children}
        </Box>
    )
}