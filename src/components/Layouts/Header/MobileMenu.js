
import React from 'react';
import { useNavigate } from 'react-router-dom';

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import { makeStyles } from '@mui/styles';

import {
    Box,
    Grid,
    Badge,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    Button
} from '@mui/material' ;
  

const useStyles = makeStyles((theme) => ({
    drawer: {
        "& .MuiPaper-root": {
            height: '100% !important'
        }
    },
    root: {
        marginTop: '70px !important',
        paddingBottom: '0px !important',
        "& .MuiListItem-root": {
            borderBottom: '1px solid #e9ecef',
            padding: '10px 23px'
        }
    },
    itemStyle: {
        fontSize: '16px',
        cursor: 'pointer',
        padding: '8px 20px',
        "&:hover": {
            color: '#B09987'
        },
    },
    footerLeft: {
        border: '1px solid #dee2e6'
    },
    footerRight: {
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #dee2e6',
        
        "& .MuiButton-root:hover": {
            borderColor: '#2f88b1',
            background: '#2f88b1',
            color: 'white'
        }
    },
    stores: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '11px',
        padding: '16px 12px',
        "& .MuiSvgIcon-root": { 
            width: '25px',
            height: '25px'
        }
    }
})) ;

const mock_list = [
    {
        label: 'MATERASSI'
    },
    {
        label: 'LETTI E RETI',
    },
    {
        label: 'TOPPER',
    },
    {
        label: 'GUANCIALI',
    },
    {
        label: 'ACCESSORI',
    },
    {
        label: 'PROMO',
        status: 'inactive'
    },
    {
        label: 'OUTLET',
        status: 'inactive'
    },
    {
        label: 'MAGNIFLEX',
    }    
]

const MobileMenu = (props) => {

    const {
        open,
        handleClose
    } = props;

    const classes = useStyles();
    
    return (
        <Drawer
            anchor={'top'}
            open={open}
            onClose={handleClose}
            className={classes.drawer}
        >
            <List className={classes.root}>
                {
                    mock_list.map((row, i) => {
                        return(
                            <ListItem key={i} className={classes.itemStyle} sx={{color: row.status === 'inactive' && "#B09987"}}>
                                {row.label}
                            </ListItem>
                        )
                    })
                }
            </List>

            <Grid container>
                <Grid item xs={7} className={classes.footerLeft}>
                    <Box className={classes.stores}>
                        <RoomOutlinedIcon />
                        PUNTI VENDITA VICINO A TE
                    </Box>
                </Grid>
                <Grid item xs={5} className={classes.footerRight}>
                    <Button variant='outlined' className={classes.italyBtn}>
                        ITALIANO
                    </Button>
                </Grid>
            </Grid>

        </Drawer>
    );
}

export default MobileMenu;