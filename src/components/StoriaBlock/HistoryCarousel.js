import React from 'react';

import { useMediaQuery } from '@mui/material';

import Medium_Img from '../../assets/StoriaBlock/img-medium.jpg';

import styles from './style.scss'

const slideWidth = 20;

const _items = [
    {
        player: {
            title: `Anni '60-'80`,
            desc: `Dall'iniziale produzione di materassi nel laboratorio di Prato la produttività cresce ﬁno a 1000 materassi al giorno.`,
            image: Medium_Img,
        },
    },
    {
        player: {
            title: `Anni '90`,
            desc: `Si avvia la conquista dei primi paesi esteri: Germania, Spagna, UK, Russia e Giappone.`,
            image: Medium_Img,
        },
    },
    {
        player: {
            title: 'Anni 2000',
            desc: `Nasce Alessanderx SpA, l'azienda produce 10.000 materassi al giorno.
                    L'espansione strategica procede in Asia, Medio Oriente, Est Europa, USA.
                    Aprono gli showroom Magniﬂex a Singapore, Praga, Milano e Manila.`,
            image: Medium_Img,
        },
    },
    {
        player: {
            title: 'Dal 2010 a oggi',
            desc: `Aprono gli showroom di Bangalore, Roma, Bratislava, Osaka, Shanghai, Riyad, Soﬁa, Beijing, Dongguan,
                    Costa d'Avorio e Miami.<br>
                    Insieme al lancio di nuove collezioni, cresce l'espansione strategica in Grecia, Algeria, Polonia,
                    Macedonia, Repubblica Dominicana, Colombia, Serbia, Turchia e Kirghizistan.<br>
                    Avviene il lancio di Magni Smartech.<br>
                    La distribuzione raggiunge 99 paesi.<br>
                    Aprono gli showroom e le sedi di Bönen (Germania) e Londra.`,
            image: Medium_Img,
        },
    },
    {
        player: {
            title: 'Nel 2022',
            desc: `L'azienda raggiunge un traguardo importante, 60 anni di attività. Un lungo percorso segnato da una
                    continua evoluzione, caratterizzato dalla ricerca costante di nuove soluzioni al servizio del comfort
                    e del benessere.`,
            image: Medium_Img,
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

let match1 = true;
let match2 = true;

const createItem = (position, idx) => {


    const item = {
        styles: {
            transform: `translateX(${position * (match1 ? 40 : match2 ? 30 : 20)}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <div className="item-title">{item.player.title}</div>
                <div className="item-text">{item.player.desc}</div>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const HistoryCarousel = () => {
    
    match1 = useMediaQuery('(min-width:1500px)');
    match2 = useMediaQuery('(min-width:1100px)');

    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
            </div>
        </div>
    );
};

export default HistoryCarousel
