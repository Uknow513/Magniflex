
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MobileMenu from './MobileMenu';
import AppBar from './AppBar';
import MagniflexPopover from './MagniflexPopover';
import Logo_Img from '../../../assets/logo.png';
import Store_Img from '../../../assets/store.svg';
import Search_Img from '../../../assets/search.svg';
import User_Img from '../../../assets/user.svg';
import Cart_Img from '../../../assets/cart.svg';

import MenuIcon from '@mui/icons-material/Menu';

import { makeStyles } from '@mui/styles';

import {
    Box,
    Grid,
    Badge,
    useMediaQuery,
    IconButton
} from '@mui/material' ;

const useStyles = makeStyles((theme) => ({
    root : {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 10000,
    } ,
    logo: {
        maxWidth: '100%',
        width: '200px',
        height: 'auto',
        cursor: 'pointer',
    },
    mainNav: {
        height: '70px',
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e9ece',
        padding: '0px 24px',
        ['@media (max-width:760px)'] : {
            padding: '8px 16px 8px 8px'
        }
    },
    itemImg: {
        width: '20px',
        height: '20px',
        color : '#174860',
        margin: '0px 12px',
        "&:hover" : {
            opacity: 0.7,
            cursor: 'pointer',
            "& path" : {
                width: '20px',
                height: '20px'
            }
        },
        "@media (max-width:576px)": {
            margin: '0px 6px',
        }
    },
    itemList: {
        display : 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    itemStyle: {
        fontSize: '12px',
        cursor: 'pointer',
        padding: '8px 20px',
        "&:hover": {
            color: '#B09987'
        },
        ['@media (max-width:1400px)'] : {
            padding: '8px 15px'
        },
        ['@media (max-width:1280px)'] : {
            padding: '8px'
        }
    },
    menuIcon: {
        width: '20px !important',
        height: '20px !important'
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
]

const Header = (props) => {

    const classes = useStyles();

    const navigate = useNavigate();
    const match1 = useMediaQuery('(min-width : 1280px)');
    const match2 = useMediaQuery('(min-width : 1000px)');
    const match3 = useMediaQuery('(min-width : 760px)');

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openMagniflex, setOpenMagniflex] = useState(null);

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    const handleMagniflex = (event) => {
        setOpenMagniflex(openMagniflex ? null : event.currentTarget);
    }

    const handleMagniflexClose = () => {
        setOpenMagniflex(null);
    }

    return (
        <Box className={classes.root}>
            {
                match1 && <AppBar />
            }

            <Box className={classes.mainNav}>
                <Grid container spacing={3}>
                    <Grid item xs={match2 ? 2 : match3 ? 3 : 6}>
                        <img src={Logo_Img}
                            onClick={() => navigate('/')}
                            className={classes.logo}
                        />
                    </Grid>
                    {
                        match2 &&
                        <Grid item xs={8} className={classes.itemList}>
                            {
                                mock_list.map((row, i) => {
                                    return(
                                        <Box key={i}
                                            className={classes.itemStyle}
                                            sx={{color: row.status === 'inactive' && "#B09987"}}
                                        >
                                            {row.label}
                                        </Box>
                                    )
                                })
                            }
                            {
                                !match1 &&
                                <Box
                                    onClick={(event) => handleMagniflex(event)}
                                    className={classes.itemStyle}
                                >
                                    MAGNIFLEX
                                </Box>
                            }
                        </Grid>
                    }

                    <Grid item xs={match2 ? 2 : match3 ? 9 : 6} className={classes.itemList}>
                        <img src={Store_Img} className={classes.itemImg} />
                        <img src={Search_Img} className={classes.itemImg} />
                        <img src={User_Img} className={classes.itemImg} />
                        <Badge badgeContent={1} color='secondary'>
                            <img src={Cart_Img} className={classes.itemImg}/>
                        </Badge>
                        {
                            !match2 &&
                            <IconButton onClick={() => handleDrawer()}>
                                <MenuIcon className={classes.menuIcon}/>
                            </IconButton>
                        }
                    </Grid>
                </Grid>
            </Box>

            <MobileMenu
                open={openDrawer}
                handleClose={() => handleDrawer()}
            />
            <MagniflexPopover
                open={openMagniflex}
                handleClose={() => handleMagniflexClose()}
            />
        </Box>
    );
}

Header.propTypes = {
}

// const mapStateToProps = state => ({
// })

// const mapDispatchToProps = {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header) ;
export default Header;