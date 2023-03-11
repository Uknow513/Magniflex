
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
    Button,
    Popover
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
        label: 'Our essence'
    },
    {
        label: 'Recharge of well-being',
    },
    {
        label: 'Innovations and technologies',
    },
    {
        label: 'Sustainability',
    },
    {
        label: 'Sleep in 5 stars',
    },
    {
        label: 'Certifications',
    },
    {
        label: 'News',
    },
    {
        label: 'Blogs',
    },
    {
        label: 'Contacts',
    }    
]

const MagniflexPopover = (props) => {

    const {
        open,
        handleClose
    } = props;

    const classes = useStyles();
    
    return (
        <Popover
            open={Boolean(open)}
            onClose={handleClose}
            anchorEl={open}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            >
                <List>
                    {
                        mock_list.map((row, i) => {
                            return (
                                <ListItem key={i}>
                                    {row.label}
                                </ListItem>
                            )
                        })
                    }
                </List>
        </Popover>
    );
}

export default MagniflexPopover;