import React from 'react';

import { Container } from '../Common/Container';
import Sport1_Img from '../../assets/Sport/sport1.jpg';
import Sport2_Img from '../../assets/Sport/sport2.jpg';
import Sport3_Img from '../../assets/Sport/sport3.jpg';

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '16px',
        
        "& img": {
            width: '100%',
        }
    },
}))

const TripeImage = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width:768px)');
    const match2 = useMediaQuery('(min-width:576px)');

    return (
        <Box className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={match1 ? 4 : match2 ? 6 : 12}>
                    <img src={Sport1_Img} />
                </Grid>
                <Grid item xs={match1 ? 4 : match2 ? 6 : 12}>
                    <img src={Sport2_Img} />
                </Grid>
                {
                    match1 &&
                    <Grid item xs={4}>
                        <img src={Sport3_Img} />
                    </Grid>
                }
            </Grid>
        </Box>
    )
}

export default TripeImage;