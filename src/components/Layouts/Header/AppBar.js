import React from 'react';

import {
    Box
} from '@mui/material'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        display: 'flex',
        justifyContent: 'flex-end',
        background: '#174860',
        fontSize: '11px',
        color: 'white',
        textTransform: 'uppercase !important',
        padding: '12px 12px 14px 12px'
    },
    itemStyle: {
        padding : '5px 10px',
        "&:hover" : {
            color: '#cbb29e',
            transition: 'all 0.4s',
            cursor: 'pointer'
        }
    }
}))

const menu_list = [
    {
        label: 'LA NOSTRA ESSENZA',
        link: '/'
    },
    {
        label: 'RICARICA DI BENESSERE',
        link: '/'
    },
    {
        label: 'INNOVAZIONI E TECNOLOGIE',
        link: '/'
    },
    {
        label: 'SOSTENIBILITÀ',
        link: '/'
    },
    {
        label: 'DORMI A 5 STELLE',
        link: '/'
    },
    {
        label: 'CERTIFICAZIONI',
        link: '/'
    },
    {
        label: 'NEWS',
        link: '/'
    },
    {
        label: 'BLOG',
        link: '/'
    },
    {
        label: 'CONTATTI',
        link: '/'
    },
]

const  AppBar = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {
                menu_list.map((row, i) => {
                    return (
                        <Box key={i} className={classes.itemStyle}>
                            {row.label}
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default AppBar;