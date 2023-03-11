import React from 'react';

import { Container } from '../Common/Container';
import Buffon_Img from '../../assets/Sport/buffon.jpg';
import Castrogiovanni_Img from '../../assets/Sport/castrogiovanni.jpg';
import Chiellini_Img from '../../assets/Sport/chiellini.jpg'; 

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        fontSize: '20px',
        padding: '140px 0px',
        "& img" : {
            marginBottom: '0.25rem',
            "@media (max-width:768px)": {
                width: '100%'
            }
        },
        '@media (max-width:1280px)': {
            padding: '90px 0px'
        },
        '@media (max-width:768px)': {
            padding: '70px 0px'
        },
    },
    topic: {
        color: '#B09987',
        marginBottom: '1.5rem'
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        lineHeight: 1.2,
        marginBottom: '3rem',
        "@media (max-width:1000px)": {
            fontSize: '20px'
        }
    },
    desc: {
        "@media (max-width:576px)": {
            fontSize: '17px'
        }
    }
}))

const Football = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width:1400px)');
    const match2 = useMediaQuery('(min-width:1000px)');
    const match3 = useMediaQuery('(min-width:768px)');
    
    return (
        <Box className={classes.root}>
            <Container
                children={
                    <Grid container spacing={3}>
                        <Grid item xs={match1 ? 2 : match2 ? 3 : 12}>
                            <Box className={classes.topic}>
                                SPORT
                            </Box>
                            <Box className={classes.title}>
                                Facciamo il tifo per una vita sana, da sempre.
                            </Box>
                            {
                                match3 ? 
                                <>
                                    <img src={Buffon_Img} />
                                    <img src={Castrogiovanni_Img} />
                                    <img src={Chiellini_Img} />
                                </>
                                :
                                <Grid container spacing={1}>
                                    <Grid item xs={4}>
                                        <img src={Buffon_Img} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img src={Castrogiovanni_Img} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img src={Chiellini_Img} />
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                        {
                            match2 &&
                            <Grid item xs={1}></Grid>
                        }
                        <Grid item xs={match2 ? 8 : 11} className={classes.desc}>
                            Magniflex ha un rapporto privilegiato con lo sport. Già negli anni '80 l'azienda è stata sponsor del Giro d'Italia, a sottolineare lo stretto legame che esiste tra un riposo rigenerante e uno stile di vita sano. E anche oggi la grande passione per lo sport guida l'azienda nell'impegno a promuovere una cultura del buon riposo come fonte di energia.<br/><br/>
                            Negli anni, infatti, Magniflex ha supportato vari giocatori della Nazionale Italiana di Rugby, esempi di performance e genuinità, chiamandoli a essere testimonial della qualità che l'azienda trasferisce in ogni prodotto. (aggiungere uno spazio) E nel 2016 questa filosofia ha portato a ingaggiare come volto di Magniflex una leggenda dello sport italiano e internazionale: Gianluigi Buffon. Nel biennio 2017-18, è la volta della partnership con la Nazionale Italiana di Calcio, che include la fornitura di materassi e cuscini per il Centro Tecnico Federale di Coverciano.<br/><br/>
                            Ma l'impegno a fianco del mondo dello sport non finisce qui. Nel 2021 Magniflex diviene National Partner della Volleyball Nations League, la competizione riservata alle nazionali di pallavolo creata nel 2018. Un segno tangibile del legame tra il brand e uno stile di vita sano, un'attestazione di interesse per una cultura rivolta al buon riposo per un ottimo risveglio.<br/><br/>
                            E chi meglio di un campione d'Europa come Giorgio Chiellini per proseguire il rapporto che da anni lega Magniflex al mondo dello sport? Capitano della Nazionale Italiana di calcio vincitrice dell'ultima manifestazione europea, un giocatore di origini toscane, che ci permette di legare il nome dell'azienda al luogo in cui tutto è nato. Per un binomio forte, radicato, fatto di principi sani e duro lavoro.<br/><br/>
                        </Grid>
                    </Grid>
                }
            >
            </Container>
        </Box>
    )
}

export default Football;