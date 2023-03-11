import React from "react";

// import ss from '../../utils/styles/bootstrap.min.css';
import style from '../../utils/styles/style.css';
// import style2 from '../../utils/styles/css2';
import image from '../../utils/styles/img-medium.jpg'

const Carousel1 = () => {
    return (
        
        <section class="pt-5 pb-md-5 mt-md-4">
            <div class="full-left-padding aos-init" data-aos="fade-left">

            <div class="owl-carousel pages-carousel history-carousel owl-loaded owl-drag">

            <div class="owl-stage-outer"><div class="owl-stage transform" ><div class="owl-item cloned width" ><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 3 stelle" data-xblocker="passed"/>
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Anni 2000</h3>
                    <p class="color-brand pe-xl-5">
                    Nasce Alessanderx SpA, l'azienda produce 10.000 materassi al giorno.<br/>
                    L'espansione strategica procede in Asia, Medio Oriente, Est Europa, USA.<br/>
                    Aprono gli showroom Magniﬂex a Singapore, Praga, Milano e Manila.<br/>
                    </p>
                </div>
                </div></div><div class="owl-item cloned width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 5 stelle" data-xblocker="passed"/>
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Dal 2010 a oggi</h3>
                    <p class="color-brand pe-xl-5">
                    Aprono gli showroom di Bangalore, Roma, Bratislava, Osaka, Shanghai, Riyad, Soﬁa, Beijing, Dongguan,
                    Costa d'Avorio e Miami.<br/>
                    Insieme al lancio di nuove collezioni, cresce l'espansione strategica in Grecia, Algeria, Polonia,
                    Macedonia, Repubblica Dominicana, Colombia, Serbia, Turchia e Kirghizistan.<br/>
                    Avviene il lancio di Magni Smartech.<br/>
                    La distribuzione raggiunge 99 paesi.<br/>
                    Aprono gli showroom e le sedi di Bönen (Germania) e Londra.
                    </p>
                </div>
                </div></div><div class="owl-item cloned width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 5 stelle" data-xblocker="passed"/>
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Nel 2022</h3>
                    <p class="color-brand pe-xl-5">
                    L'azienda raggiunge un traguardo importante, 60 anni di attività. Un lungo percorso segnato da una
                    continua evoluzione, caratterizzato dalla ricerca costante di nuove soluzioni al servizio del comfort
                    e del benessere.
                    </p>
                </div>
                </div></div><div class="owl-item active width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 5 stelle" data-xblocker="passed"/>
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Anni '60-'80</h3>
                    <p class="color-brand pe-xl-5">
                    Dall'iniziale produzione di materassi nel laboratorio di Prato la produttività cresce ﬁno
                    a 1000 materassi al giorno.
                    </p>
                </div>
                </div></div><div class="owl-item active width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 4 stelle" data-xblocker="passed"/>
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Anni '90</h3>
                    <p class="color-brand pe-xl-5">
                    Si avvia la conquista dei primi paesi esteri: Germania, Spagna, UK, Russia e Giappone.
                    </p>
                </div>
                </div></div><div class="owl-item width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 3 stelle" data-xblocker="passed" />
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Anni 2000</h3>
                    <p class="color-brand pe-xl-5">
                    Nasce Alessanderx SpA, l'azienda produce 10.000 materassi al giorno.<br/>
                    L'espansione strategica procede in Asia, Medio Oriente, Est Europa, USA.<br/>
                    Aprono gli showroom Magniﬂex a Singapore, Praga, Milano e Manila.<br/>
                    </p>
                </div>
                </div></div><div class="owl-item width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 5 stelle" data-xblocker="passed" />
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Dal 2010 a oggi</h3>
                    <p class="color-brand pe-xl-5">
                    Aprono gli showroom di Bangalore, Roma, Bratislava, Osaka, Shanghai, Riyad, Soﬁa, Beijing, Dongguan,
                    Costa d'Avorio e Miami.<br/>
                    Insieme al lancio di nuove collezioni, cresce l'espansione strategica in Grecia, Algeria, Polonia,
                    Macedonia, Repubblica Dominicana, Colombia, Serbia, Turchia e Kirghizistan.<br/>
                    Avviene il lancio di Magni Smartech.<br/>
                    La distribuzione raggiunge 99 paesi.<br/>
                    Aprono gli showroom e le sedi di Bönen (Germania) e Londra.
                    </p>
                </div>
                </div></div><div class="owl-item width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 5 stelle" data-xblocker="passed" />
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Nel 2022</h3>
                    <p class="color-brand pe-xl-5">
                    L'azienda raggiunge un traguardo importante, 60 anni di attività. Un lungo percorso segnato da una
                    continua evoluzione, caratterizzato dalla ricerca costante di nuove soluzioni al servizio del comfort
                    e del benessere.
                    </p>
                </div>
                </div></div><div class="owl-item cloned width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 5 stelle" data-xblocker="passed" />
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Anni '60-'80</h3>
                    <p class="color-brand pe-xl-5">
                    Dall'iniziale produzione di materassi nel laboratorio di Prato la produttività cresce ﬁno
                    a 1000 materassi al giorno.
                    </p>
                </div>
                </div></div><div class="owl-item cloned width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 4 stelle" data-xblocker="passed"/>
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Anni '90</h3>
                    <p class="color-brand pe-xl-5">
                    Si avvia la conquista dei primi paesi esteri: Germania, Spagna, UK, Russia e Giappone.
                    </p>
                </div>
                </div></div><div class="owl-item cloned width"><div class="item">
                <div class="cat-image-thumb">
                    <img src={image} class="d-block w-100 visible" alt="Nome struttura 3 stelle" data-xblocker="passed"/>
                </div>
                <div class="py-4 mt-1">
                    <h3 class="color-brown">Anni 2000</h3>
                    <p class="color-brand pe-xl-5">
                    Nasce Alessanderx SpA, l'azienda produce 10.000 materassi al giorno.<br/>
                    L'espansione strategica procede in Asia, Medio Oriente, Est Europa, USA.<br/>
                    Aprono gli showroom Magniﬂex a Singapore, Praga, Milano e Manila.<br/>
                    </p>
                </div>
                </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="bg-cover icons arrow-left-icon"></i></button><button type="button" role="presentation" class="owl-next"><i class="bg-cover icons arrow-right-icon"></i></button></div><div class="owl-dots disabled"></div><div class="owl-thumbs"></div></div>

            </div>
      </section>
    )
}

export default Carousel1;