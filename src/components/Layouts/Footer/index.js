

import React from 'react' ;

import clsx from 'clsx';

import { Container } from '../../Common/Container';
import Facebook_Img from '../../../assets/Footer/facebook.png';
import Instagram_Img from '../../../assets/Footer/instagram.png';
import Youtube_Img from '../../../assets/Footer/youtube.png';
import Logo_Img from '../../../assets/Footer/logo.png';
import Arrow_Img from '../../../assets/Footer/arrow.svg';

import {
    Box ,
    Grid,
    List,
    Button,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1029,
        background: '#174860',
        fontSize: '11px',
        color: 'white',
        paddingTop: '48px'
    },
    title: {
        fontSize: '20px',
        color: '#B09987',
        marginBottom: '25px'
    },
    products: {
        columnCount: 2,
    },
    border: {
        "& .MuiGrid-item": {
            padding: '16px 12px'
        }
    },
    italyBtn: {
        color: 'white !important',
        borderColor: 'white !important',
        fontWeight: 'bold',
        fontSize: '8px',
        float: 'right !important',
        letterSpacing: '0.12em !important',
        padding: '3px 15px !important'
    },
    linkStyle: {
        backgroundSize: '24px 24px',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
        width: '24px',
        height: '24px',
        color: 'white',
        margin: '0 15px 15px 0',
        "&:hover": {
            opacity: 0.7
        }
    },
    facebook: {
        backgroundImage: `url(${Facebook_Img})`,
    },
    instagram: {
        backgroundImage: `url(${Instagram_Img})`,
    },
    youtube: {
        backgroundImage: `url(${Youtube_Img})`,
    },
    footerContent: {
        padding: '48px 12px',
    },
    logoImg: {
        width: '260px',
    },
    emailForm: {
        width: '227px',
        height: '51px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        borderColor: 'white',
        background: 'unset',
        "&::placeholder": {
            color: 'white'
        },

        "&:focus": {
            borderColor: '#86b7fe',
            outline: 0,
            boxShadow: '0 0 0 0.25rem rgb(13 110 253 / 25%)',
        }
    },
    emailBtn: {
        color: 'white !important',
        borderColor: 'white !important',
        padding: '12px 30px !important'
    },
    arrowImg: {
        
        backgroundImage: `url(${Arrow_Img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '25px',
        height: '25px'
    },
    bottom: {
        background: '#B09987',
        fontSize: '11px',
        marginTop: '48px',
        padding: '24px 0px'
    },
    linkList: {
        display: 'flex !important',
        flexWrap: 'wrap'
    }
}));

const product_list = [
    {
        label: 'MATERASSI',
    },
    {
        label: 'GUANCIALI',
    },
    {
        label: 'RETI',
    },
    {
        label: 'LETTI',
    },
    {
        label: 'PET',
    },
    {
        label: 'ACCESSORI',
    },
    {
        label: 'PROMO',
    },
]

const agency_list = [
    {
        label: 'LA NOSTRA ESSENZA'
    },
    {
        label: 'RICARICA DI BENESSERE'
    },
    {
        label: 'INNOVAZIONI E TECNOLOGIE'
    },
    {
        label: 'SOSTENIBILITÀ'
    },
    {
        label: 'DORMI A 5 STELLE'
    },
    {
        label: 'CERTIFICAZIONI'
    },
    {
        label: 'NEWS'
    },
    {
        label: 'SLOW SLEEP BLOG'
    },
    {
        label: 'PRESS AREA'
    },
]

const contact_list = [
    {
        label: 'CONTATTACI'
    },
    {
        label: 'GARANZIA'
    },
    {
        label: 'STORE LOCATOR'
    }
]

const Footer = () => {

    const classes = useStyles() ;

    const match1 = useMediaQuery('(min-width : 1000px)');
    const match2 = useMediaQuery('(min-width : 768px)');

    return (
        <Box className = {classes.root}>
            <Container
                children={
                        <Grid container className={classes.border}>
                            <Grid item xs={match1 ? 3 : match2 ? 6 : 12}
                                sx={{borderRight: match1 && '1px solid #B09987'}}
                            >
                                <Box className={classes.title}>
                                    Prodotti
                                </Box>
                                <List className={classes.products}>
                                    {
                                        product_list.map((row, i) => {
                                            return (
                                                <Box key={i} sx={{mb: 2}}>
                                                    {row.label}
                                                </Box>
                                            )
                                        })
                                    }
                                </List>
                            </Grid>
                            <Grid item xs={match1 ? 5 : match2 ? 6 : 12}
                                sx={{
                                    paddingLeft: match1 && '65px !important',
                                    borderRight: match1 && '1px solid #B09987'
                                }}
                            >
                                <Box className={classes.title}>
                                    Azienda
                                </Box>
                                <List className={classes.products}>
                                    {
                                        agency_list.map((row, i) => {
                                            return (
                                                <Box key={i} sx={{mb: 2}}>
                                                    {row.label}
                                                </Box>
                                            )
                                        })
                                    }
                                </List>
                            </Grid>
                            <Grid item xs={match1 ? 4 : match2 ? 6 : 12}
                                sx={{paddingLeft: match1 && '65px !important'}}
                            >
                                <Box className={classes.title}>
                                    Contatti
                                </Box>
                                <List>
                                    {
                                        contact_list.map((row, i) => {
                                            return (
                                                <Box key={i} sx={{mb: 2}}>
                                                    {row.label}
                                                </Box>
                                            )
                                        })
                                    }
                                </List>
                                <Button variant='outlined' className={classes.italyBtn}>
                                    ITALIANO
                                </Button>
                                <Box sx={{mt: 6}}>
                                    <a
                                        href='#'
                                        className={clsx(classes.facebook, classes.linkStyle)}>
                                    </a>
                                    <a
                                        href='#'
                                        className={clsx(classes.instagram, classes.linkStyle)}>
                                    </a>
                                    <a
                                        href='#'
                                        className={clsx(classes.youtube, classes.linkStyle)}>
                                    </a>
                                </Box>
                            </Grid>
                        </Grid>
                }
            >
            </Container>
            <Container
                children={
                    <Grid container className={classes.footerContent}>
                        <Grid item xs={match1 ? 3 : match2 ? 6 : 12}>
                            <img src={Logo_Img} className={classes.logoImg}/>
                        </Grid>
                        <Grid item xs={match1 ? 5 : match2 ? 6 : 12}
                            sx={{
                                paddingTop: '40px',
                                paddingLeft: match1 && '65px !important'
                            }}
                        >
                            Tel +39 057451011 - Fax +39 0574 5101.235 - info@magniflex.com<br/>
                            Magniflex: Prodotto da Alessanderx S.p.a.<br/>
                            Via San Leonardo da Porto Maurizio, 24/26/28 - 59100 Prato<br/>
                            P.I. 01729090975 - Capitale sociale 1.000.000,00 euro (i.v.) - REA PO/465133 - Codice fiscale 01246380461<br/>
                        </Grid>
                        <Grid item xs={match2 ? 4 : 12}
                            sx={{
                                paddingTop: !match1 && '20px',
                                paddingLeft: match1 && '65px !important'
                            }}
                        >
                            <Box className={classes.title}>
                                Newsletter
                            </Box>
                            <Box sx={{mb: 2}}>
                                Resta aggiornato sulle novità del mondo Magniflex.
                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <input
                                    type={'email'}
                                    placeholder='INDIRIZZO EMAIL'
                                    className={classes.emailForm}
                                />
                                <Button variant='outlined' className={classes.emailBtn}>
                                    <Box className={classes.arrowImg} />
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                }
            >
            </Container>
            <Box className={classes.bottom}>
                <Container
                    children = {
                        <Grid container spacing={2}>
                            <Grid item xs={match1 ? 8 : 12} className={classes.linkList}>
                                <a href='#'>
                                    Norme sulla privacy &nbsp; | &nbsp;
                                </a>
                                <a href='#'>
                                    Utilizzo dei cookie &nbsp; | &nbsp;
                                </a>
                                <a href='#'>
                                    Condizioni d'uso &nbsp; | &nbsp;
                                </a>
                                <a href='#'>
                                    Modalità di spedizione
                                </a>
                            </Grid>
                            <Grid item xs={match1 ? 4 : 12}>
                                Copyright © 2018 Magniflex. Tutti i diritti riservati.
                            </Grid>
                        </Grid>
                    }
                >
                </Container>
            </Box>
        </Box>
    )
}
export default Footer ;