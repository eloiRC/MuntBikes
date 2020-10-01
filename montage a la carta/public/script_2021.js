//window.location.replace("https://configurador-muntbikes.web.app");
dades_clinet = false;

$(document).ready(function () {
    $("#invoice").hide();

    document.getElementById("textBtn").addEventListener("click", hidetext)
    esconde();
    document.getElementById("darkMode").addEventListener("click", toggleDarkMode)
    document.getElementById("pdf").addEventListener("click", generatePDF)
    document.getElementById("modalitat").addEventListener("change", modalitat)
    document.getElementById("quadre").addEventListener("change", preu);
    document.getElementById("rodes").addEventListener("change", preu);
    document.getElementById("pedals").addEventListener("change", preu);
    document.getElementById("grup").addEventListener("change", preu);
    document.getElementById("frens").addEventListener("change", preu);
    document.getElementById("manillar").addEventListener("change", preu);
    document.getElementById("tija").addEventListener("change", preu);
    document.getElementById("cinta").addEventListener("change", preu);
    document.getElementById("punys").addEventListener("change", preu);
    document.getElementById("seient").addEventListener("change", preu);
    document.getElementById("bieles").addEventListener("change", preu);
    document.getElementById("pneumatics").addEventListener("change", preu);
    document.getElementById("portabido").addEventListener("change", preu);
    document.getElementById("portabido2").addEventListener("change", preu);
    document.getElementById("pedalier").addEventListener("change", preu);
    document.getElementById("roldanes").addEventListener("change", preu);
    document.getElementById("quadre").addEventListener("change", info);
    document.getElementById("nom").addEventListener("change", dades_modificades);
    document.getElementById("cognom").addEventListener("change", dades_modificades);
    document.getElementById("tel").addEventListener("change", dades_modificades);
    document.getElementById("mail").addEventListener("change", dades_modificades);
    $("#formulari_a_la_carta").submit(function (e) {
        e.preventDefault();
        enviar();
    });

});
let darkMode = false;
t_road_disc = [{
        nom: "Pinarello F12",//
        preu: 5595,
        marca: "pinarello"
    },
    {
        nom: "Pinarello PRINCE FX",//
        preu: 3915,
        marca: "pinarello"
    },
    {
        nom: "Pinarello Angliru",//
        preu: 1665,
        marca: "pinarello"
    },
    {
        nom: "Bianchi XR4", //preu quadro amb vision restat -749€ del manillar
        preu: 4041,
        marca: "bianchi"
    },
    {
        nom: "Bianchi SPECIALISSIMA", //preu quadro amb vision restat -749€ del manillar
        preu: 4590,
        marca: "bianchi"
    },
    {
        nom: "Bianchi INFINITO CV", //preu quadro amb vision restat -749€ del manillar
        preu: 3690,
        marca: "bianchi"
    },
    {
        nom: "Colnago C64", //
        preu: 4637,
        marca: "colnago"
    },
    {
        nom: "Colngao V3 RS", //
        preu: 4379,
        marca: "colnago"
    },
    {
        nom: "Scott ADDICT RC ULTIMATE", //
        preu: 3999,
        marca: "scott"
    },
    {
        nom: "Scott ADDICT RC PRO", //
        preu: 2849,
        marca: "scott"
    },
    {
        nom: "Scott FOIL SUPERSONIC EDT. HMX", //
        preu: 3999,
        marca: "scott"
    },
    {
        nom: "Scott FOIL 10 HMF ", //
        preu: 2649,
        marca: "scott"
    }
];

t_road = [{
        nom: "Pinarello F12",
        preu: 5395,
        info: "*tija incluida",
        marca: "pinarello"
    },
    {
        nom: "Pinarello GAN",
        preu: 2350,
        info: "*tija incluida",
        marca: "pinarello"
    },
    {
        nom: "Pinarello Angliru",//
        preu: 1495,
        info: "*tija incluida",
        marca: "pinarello"
    },
    {
        nom: "Bianchi XR4", //
        preu: 3690,
        info: "*tija incluida",
        marca: "bianchi"
    },
    {
        nom: "Bianchi SPECIALISSIMA", //
        preu: 3990,
        info: "",
        marca: "bianchi"
    },
    {
        nom: "Colnago C64", //
        preu: 4087,
        info: "*tija incluida",
        marca: "colnago"
    },
    {
        nom: "Colngao V3 RS", //
        preu: 4012,
        info: "*tija incluida",
        marca: "colnago"
    }
];

t_gravel = [{
        nom: "Pinarello Grevil",
        preu: 2895,
        info: "*tija incluida",
        marca: "pinarello"
    },
    {
        nom: "Pinarello Crossista ",
        preu: 2715,
        info: "*tija incluida",
        marca: "pinarello"
    },
    {
        nom: "Bianchi Zolder Pro", //
        preu: 1990,
        info: "",
        marca: "bianchi"
    },
    {
        nom: "Bianchi ARCADEX ", //PREU CALCULAT DESCONATANT UNS 600€ DEL GRX
        preu: 2090,
        info: "",
        marca: "bianchi"
    },
    {
        nom: "Scott Addict CX RC", //
        preu: 2249,
        info: "*tija incluida",
        marca: "scott"
    },
    {
        nom: "Colango Prestige", //
        preu: 2190,
        info: "*tija NO incluida",
        marca: "colnago"
    },
    {
        nom: "Colango G3X", //
        preu: 2825,
        info: "*tija incluida",
        marca: "colnago"
    }
];

t_mtb = [{
        nom: "Scott Spark N1NO Canda", //
        preu: 5999,
        info: "*Hoquilla SID ultimate,amortiguador RockShox NUDE ,bielas xx1, frenos level ultimate, manillar fraser ic y tija incluidos ",
        marca: "scott"
    },
    {
        nom: "Scott Spark N1NO SilverFish", //
        preu: 5999,
        info: "*Hoquilla SID ultimate,amortiguador RockShox NUDE ,bielas xx1, frenos lvl ultimate, manillar fraser ic y tija incluidos ",
        marca: "scott"
    },
    {
        nom: "Scott Spark RC Supersonic HMX SL ", //
        preu: 5499,
        info: "*Hoquilla SID ultimate,amortiguador RockShox NUDE ,bielas xx1, frenos lvl ultimate, manillar fraser ic y tija incluidos",
        marca: "scott"
    },
    {
        nom: "Scott Scale 910 HMF ", //
        preu: 2349,
        info: "*tija incluidos, horquilla fox sc 32 performance",
        marca: "scott"
    },
    {
        nom: "Scott Scale SL", //
        preu: 3499,
        info: "*Manillar fraser ic, tija, horquilla sid sl, frenos sram level ultimate incluidos",
        marca: "scott"
    },
    {
        nom: "Bianchi Methanol FS",
        preu: 3590,
        info: "*Amortiguador Fox Kashima incluido",
        marca: "bianchi"
    },
    {
        nom: "Bianchi Methanol RS",
        preu: 2590,
        info: "",
        marca: "bianchi"
    }
];

t_manillars_road_disc = [
    {
        nom: "MOST TALON ULTRA f12 TICR",//
        preu: 857
    },
    {
        nom: "MOST TALON AERO",//
        preu: 718
    },
    {
        nom: "MOST Jaguar XFC carbon TICR",//
        preu: 668
    },
    {
        nom: "MOST Jaguar XA TICR",//
        preu: 173
    },
    {
        nom: "SYNCROS CRESTON IC SL rc", //
        preu: 579
    },
    {
        nom: "VISION METRON 5D ACR Bianchi", //
        preu: 749
    },
    {
        nom: "Deda Alanera colnago", //
        preu: 847
    },
    {
        nom: "Colnago sr9 + ZIPP service course ERGO ", //
        preu: 294
    },
    {
        nom: "Colnago sr9 + ZIPP SL ERGO ", //
        preu: 477
    },
    {
        nom: "Colnago sr9 + BikeAhead ", //
        preu: 565
    },
    {
        nom: "Colnago sr9 + LIGHTWEIGHT RENNBÜGEL ", //
        preu: 537
    }
];

t_manillars_road = [{
        nom: "MOST TALON ULTRA TICR",//
        preu: 845
    },
    {
        nom: "MOST TALON AERO",//
        preu: 718
    },
    {
        nom: "MOST TALON UD",//
        preu: 411
    },
    {
        nom: "MOST Jaguar XFC carbon TICR",//
        preu: 668
    },
    {
        nom: "MOST Jaguar XA TICR",//
        preu: 173
    },
    {
        nom: "MOST JAGUAR 3K conjunto",
        preu: 247
    },
    {
        nom: "VISION METRON 5D Bianchi", //
        preu: 749
    },
    {
        nom: "ZIPP SL AERO + SPEED conjunto", //
        preu: 615
    },
    {
        nom: "ZIPP SL ERGO + SPEED conjunto", //
        preu: 590
    },
    {
        nom: "ZIPP service course",
        preu: 237
    },
    {
        nom: "Black-inc", //
        preu: 690
    },
    {
        nom: "Ritchey solostreem", //
        preu: 475
    },
    {
        nom: "PRO VIVE conjunto", //
        preu: 458
    },
    {
        nom: "Deda Alanera colnago", //
        preu: 847
    },
    {
        nom: "Colnago sr9 + ZIPP service course ERGO ", //
        preu: 294
    },
    {
        nom: "Colnago sr9 + ZIPP SL ERGO ", //
        preu: 477
    },
    {
        nom: "Colnago sr9 + BikeAhead ", //
        preu: 565
    },
    {
        nom: "Colnago sr9 + LIGHTWEIGHT RENNBÜGEL ", //
        preu: 537
    },
    {
        nom: "Lightweight BÜGELHALTER + LIGHTWEIGHT RENNBÜGEL", //
        preu: 675
    }
];

t_manillars_gravel = [{
        nom: "MOST TALON 1K",
        preu: 718
    },
    {
        nom: "MOST TALON UD",
        preu: 411
    },
    {
        nom: "MOST JAGUAR 3K",
        preu: 247
    },
    {
        nom: "ZIPP SL AERO + SPEED",
        preu: 615
    },
    {
        nom: "ZIPP SL ERGO + SPEED",
        preu: 590
    },
    {
        nom: "ZIPP service course",
        preu: 237
    },
    {
        nom: "Black-inc",
        preu: 690
    },
    {
        nom: "Ritchey solostreem",
        preu: 475
    },
    {
        nom: "PRO VIBE",
        preu: 458
    },
    {
        nom: "ZIPP SC",
        preu: 237
    },
    {
        nom: "PRO VIBE Alu",
        preu: 198
    },
];

t_manillars_mtb = [{
        nom: "Fraser SE SL  iC",
        preu: 474
    },
    {
        nom: "Fraser SL iC",
        preu: 69
    },
    {
        nom: "NewUltimate Carbon + steam",
        preu: 246
    },
    {
        nom: "Alpcross Carbon",
        preu: 229
    },
    {
        nom: "Tune ",
        preu: 389
    },
    {
        nom: "Manillar BikeAhead",
        preu: 229
    },
    {
        nom: "OnOff He",
        preu: 259
    }
];

t_rodes_disc = [{
        nom: "Campagnolo Bora One 35 tubular", //
        preu: 1913
    },
    {
        nom: "Campagnolo Bora One 50 tubular", //
        preu: 1913
    },
    {
        nom: "Zipp 202 tubular", //
        preu: 2400
    },
    {
        nom: "Zipp 303 tubular", //
        preu: 2600
    },
    {
        nom: "Dura-Ace c40 tubular", //
        preu: 2620
    },
    {
        nom: "Fulcrum Speed 40 (cult) tubular", //
        preu: 2548
    },
    {
        nom: "Carbon-TI tubular", //
        preu: 1620
    },
    {
        nom: "Corima WS 47 tubular", //
        preu: 1449
    },
    {
        nom: "Lightweight Melnstein T 24D tubular", //
        preu: 4079
    },
    {
        nom: "Lightweight Melnstein T 24D tubular schwarz", //
        preu: 4479
    },
    {
        nom: "ZIPP 303s tubeless / cubierta", //
        preu: 1100
    }, ,
    {
        nom: "ZIPP 303 Firecrest tubeless / cubierta", //
        preu: 1800
    },
    {
        nom: "Campagnolo BORA ONE 35  tubeless / cubierta", //
        preu: 2140
    },
    {
        nom: "Campagnolo BORA ONE 50  tubeless / cubierta", //
        preu: 2140
    },
    {
        nom: "Campagnolo WTO 33  tubeless / cubierta", //
        preu: 2168
    },
    {
        nom: "Campagnolo WTO 45  tubeless / cubierta", //
        preu: 2168
    },
    {
        nom: "Campagnolo WTO 60  tubeless / cubierta", //
        preu: 2168
    },
    {
        nom: "Dura-Ace c40  tubeless / cubierta", //
        preu: 2430
    },
    {
        nom: "DT-1100  tubeless / cubierta", //
        preu: 2388
    },
    {
        nom: "DT-1400  tubeless / cubierta", //
        preu: 1958
    },
    {
        nom: "Fulcrum Wind 40  tubeless / cubierta", //
        preu: 1226
    },
    {
        nom: "Fulcrum Speed 40 (usb)  tubeless / cubierta", //
        preu: 2045
    },
    {
        nom: "Carbon-TI  tubeless / cubierta", //
        preu: 1700
    },
    {
        nom: "Syncros Capital 1.0 tubeless / cubierta", //
        preu: 1399
    },
    {
        nom: "Corima WS cubierta", //
        preu: 1749
    }
];

t_rodes_road = [{
        nom: "Corima WS+ 47 tubular", //
        preu: 1849
    },
    {
        nom: "Corima WS 47 tubular", //
        preu: 1249
    },
    {
        nom: "Dura-Ace c40 tubular", //
        preu: 2600
    },
    {
        nom: "Fulcrum Speed 40 (cult) tubular", //
        preu: 2548
    },
    {
        nom: "Campagnolo Bora One 35 tubular", //
        preu: 1880
    },
    {
        nom: "Campagnolo Bora One 50 tubular", //
        preu: 1880
    },
    {
        nom: "Campagnolo Bora Ultra 35 tubular", //
        preu: 2830
    },
    {
        nom: "Campagnolo Bora Ultra 50 tubular", //
        preu: 2830
    },
    {
        nom: "Lightweight Melnstein T 24E tubular", //
        preu: 3582
    },
    {
        nom: "Lightweight Melnstein T 24E tubular schwarz", //
        preu: 3982
    },
    {
        nom: "Corima WS+ 47 cubierta", //
        preu: 2149
    },
    {
        nom: "Corima WS cubierta", //
        preu: 1549
    },
    {
        nom: "Dura-Ace c40  tubeless / cubierta", //
        preu: 1715
    },
    {
        nom: "DT-1100  tubeless / cubierta", //
        preu: 2388
    },
    {
        nom: "DT-1400  tubeless / cubierta", //
        preu: 1958
    },
    {
        nom: "Fulcrum Wind 40  tubeless / cubierta", //
        preu: 1199
    },
    {
        nom: "Fulcrum Speed 40 (usb)  tubeless / cubierta", //
        preu: 2045
    },
    {
        nom: "Campagnolo BORA ONE 35 cubierta", //
        preu: 2115
    },
    {
        nom: "Campagnolo BORA ONE 50 cubierta", //
        preu: 2115
    },
    {
        nom: "Campagnolo Bora Ultra 35 cubierta", //
        preu: 3070
    },
    {
        nom: "Campagnolo Bora Ultra 50 cubierta", //
        preu: 3070
    },
    {
        nom: "Campagnolo WTO 33 tubeless / cubierta", //
        preu: 2164
    },
    {
        nom: "Campagnolo WTO 45 tubeless / cubierta", //
        preu: 2164
    },
    {
        nom: "Campagnolo WTO 60 tubeless / cubierta", //
        preu: 2164
    },
    {
        nom: "Zipp 303 firecrest tubeless / cubierta", //
        preu: 2200
    }
];

t_rodes_gravel = [{
        nom: "Dura-Ace c40 ", //
        preu: 2430
    },
    {
        nom: "DT GRC 1400", //
        preu: 1958
    },
    {
        nom: "DT GR 1600", //
        preu: 558
    },
    {
        nom: "DT CRC 1100", //
        preu: 2389
    },
    {
        nom: "DT CRC 1400 Spline", //
        preu: 1958
    },
    {
        nom: "DT CR 1600", //
        preu: 558
    },
    {
        nom: "Syncros capital x40", //
        preu: 1399
    },
    {
        nom: "Fulcrum Racing Zero carbon", //
        preu: 1990
    },
    {
        nom: "Fulcrum Racing Zero", //
        preu: 1189
    },
    {
        nom: "Fulcrum Rapid Red 3 ", //
        preu: 613
    },
    {
        nom: "Fulcrum Rapid 5 ", //
        preu: 380
    }
];

t_rodes_mtb = [{
        nom: "Syncros Silverton SL", //
        preu: 3799
    },
    {
        nom: "Syncros Silverton 1.0", //
        preu: 1399
    },
    {
        nom: "Tune BB", //
        preu: 1996
    },
    {
        nom: "Carbon-Ti", //
        preu: 1700
    },
    {
        nom: "Bike Ahead Bi", //
        preu: 3399
    },
    {
        nom: "DT XRC 1200", //
        preu: 2138
    },
    {
        nom: "DT XRC 1500", //
        preu: 1499
    },
    {
        nom: "DT XR 1501 spline", //
        preu: 968
    },
    {
        nom: "DT X 1700 spline", //
        preu: 628
    }
];

t_tijes_road = [{
        nom: "New Ultimate Alu",
        preu: 109
    },
    {
        nom: "New Ultimate Car",
        preu: 206
    },
    {
        nom: "OnOFF He Carbon",
        preu: 139
    },
    {
        nom: "TUNE ",
        preu: 229
    },
    {
        nom: "ENVE SEATPOST",
        preu: 275
    },
    {
        nom: "LIGHTWEIGHT LEISTUNGSTRÄGER",
        preu: 308
    },
];

t_cinta = [{
        nom: "SUPACAZ",
        preu: 43
    },
    {
        nom: "LIZZARD",
        preu: 33
    },
    {
        nom: "MOST UltraGrip EVO",
        preu: 24
    },
    {
        nom: "MOST UltraLight",
        preu: 15
    },
    {
        nom: "Pro",
        preu: 14
    },
    {
        nom: "Bianchi Dots",
        preu: 25
    }
];

t_punys = [{
        nom: "ESIGRIPS",
        preu: 17
    },
    {
        nom: "RITCHEY WCS",
        preu: 12
    },
    {
        nom: "MOMUM",
        preu: 17
    }
];

t_seient = [{
        nom: "tune SKYRACER", //
        preu: 349
    },
    {
        nom: "tune SPEEDNEEDLE", //
        preu: 225
    },
    {
        nom: "syncros BELCARRA", //
        preu: 159
    },
    {
        nom: "san marco ASPIDE CARBON", //
        preu: 189
    },
    {
        nom: "selle italia SLR CARBON KIT", //
        preu: 219
    },
    {
        nom: "selle italia SLR C59", //
        preu: 474
    },
    {
        nom: "FIZIK 00 EVO ", //
        preu: 350
    },
    {
        nom: "FIZIK R1", //
        preu: 199
    },
    {
        nom: "FIZIK ADAPTIVE ANTARES VS EVO R1", //
        preu: 299
    },
    {
        nom: "FIZIK ADAPTIVE ANTARES VS EVO R3", //
        preu: 249
    },

];

t_pneumatics_road = [{
        nom: "Veloflex ProTour Race Tubular", //
        preu: 150
    },
    {
        nom: "Veloflex ProTour Tubular", //
        preu: 130
    },
    {
        nom: "Veloflex Corsa Race", //
        preu: 84
    },
    {
        nom: "Continental COMPETITION TUBULAR", //
        preu: 238
    },
    {
        nom: "Continental SPRINTER TUBULAR", //
        preu: 132
    },
    {
        nom: "Continental GP5000 TUBELESS", //
        preu: 150
    },
    {
        nom: "Continental GP5000", //
        preu: 126
    },
    {
        nom: "Verdestein FORTEZZA TUBULAR", //
        preu: 200
    },
    {
        nom: "Verdestein FORTEZZA", //
        preu: 144
    },
    {
        nom: "Vittoria CORSA Tubluar", //
        preu: 210
    },
    {
        nom: "Vittoria CORSA Cubierta", //
        preu: 120
    },
    {
        nom: "Pirelli P-Zero Cubierta", //
        preu: 86
    }
];

t_pneumatics_gravel = [{
        nom: "WTB Cross Boss", //
        preu: 92
    },
    {
        nom: "WTB Cross Wolf", //
        preu: 92
    },
    {
        nom: "Vittoria Terreno Dry G", //
        preu: 98
    },
    {
        nom: "Vittoria Terreno Wet G", //
        preu: 98
    },
    {
        nom: "Schwalbe G-One", //
        preu: 120
    },
    {
        nom: "Schwalbe X-One", //
        preu: 120
    },
    {
        nom: "Huchiston Piranha 2", //
        preu: 78
    },
    {
        nom: "Pirelli Cinturato Gravel", //
        preu: 120
    }
];

t_pneumatics_mtb = [{
        nom: "MAXXIS IKON 3C", //
        preu: 118
    },
    {
        nom: "MAXXIS IKON", //
        preu: 108
    },
    {
        nom: "MAXXIS REKON RACE", //
        preu: 118
    },
    {
        nom: "Vittoria BARZO", //
        preu: 120
    },
    {
        nom: "Vittoria MEZCAL III", //
        preu: 120
    },
    {
        nom: "Schwalbe ROCKET RON", //
        preu: 116
    },
    {
        nom: "Contintntal RACE KING", //
        preu: 64
    }
];

t_grup_road = [{ //sense bieles
        nom: "Shimano DURA-ACE Di2", //
        preu: 2692
    },
    {
        nom: "Shimano DURA-ACE", //
        preu: 1312
    },
    {
        nom: "Shimano ULTEGRA Di2", //
        preu: 1440
    },
    {
        nom: "Shimano ULTEGRA", //
        preu: 629
    },
    {
        nom: "Sram RED AXS 12v", //
        preu: 2820
    },
    {
        nom: "Sram FROCE AXS 12v", //
        preu: 2165
    },
    {
        nom: "Campagnolo Super Record EPS", // 
        preu: 3632
    },
    {
        nom: "Campagnolo Super Record", //frens direct mount o dual pivot
        preu: 1968
    },
    {
        nom: "Campagnolo Record", //frens direct mount
        preu: 1561
    },
    {
        nom: "Campagnolo Chorus", // frens direct mount
        preu: 997
    }
];

t_grup_disc = [{ //sense bieles
        nom: "Shimano DURA-ACE Di2", //
        preu: 2795
    },
    {
        nom: "Shimano DURA-ACE", //
        preu: 1861
    },
    {
        nom: "Shimano ULTEGRA Di2", //
        preu: 1703
    },
    {
        nom: "Shimano ULTEGRA", //
        preu: 895
    },
    {
        nom: "Sram RED AXS 12v", //
        preu: 2920
    },
    {
        nom: "Sram FROCE AXS 12v", //
        preu: 2165
    },
    {
        nom: "Campagnolo Super Record EPS", //disc 140 + 160
        preu: 3952
    },
    {
        nom: "Campagnolo Super Record", //disc 160 + 160
        preu: 2256
    },
    {
        nom: "Campagnolo Record", //disc 160 + 160
        preu: 1877
    },
    {
        nom: "Campagnolo Chorus", //disc 160 + 160
        preu: 1435
    }

];

t_grup_gravel = [{
        nom: "GRX Di2 1x", //
        preu: 1760
    },
    {
        nom: "GRX Di2 2x", //
        preu: 2166
    },
    {
        nom: "GRX 800 1x", //
        preu: 987
    },
    {
        nom: "GRX 800 2x", //
        preu: 1106
    },
    {
        nom: "GRX 600 1x", //
        preu: 875
    },
    {
        nom: "GRX 600 2x", //
        preu: 953
    },
    {
        nom: "RED AXS 2x", //
        preu: 2920
    },
    {
        nom: "RED AXS 1x", //
        preu: 2470
    },
    {
        nom: "FORCE AXS 2x wide", //
        preu: 2165
    },
    {
        nom: "FROCE AXS 1x wide", //
        preu: 1765
    },
    {
        nom: "RED AXS 1x *eagle 10-52*", //
        preu: 2715
    },
    {
        nom: "RED AXS 1x *eagle 10-52*", //
        preu: 2610
    },
    {
        nom: "Campagnolo Ekar", //
        preu: 1696
    },

];

t_grup_mtb = [{
        nom: "XX1 AXS", //
        preu: 1573
    },
    {
        nom: "X01 AXS", //
        preu: 1506
    },
    {
        nom: "XX1", //
        preu: 1048
    },
    {
        nom: "X01", //
        preu: 881
    },
    {
        nom: "GX", //
        preu: 449
    },
    {
        nom: "XTR", //
        preu: 718
    },
    {
        nom: "XT", //
        preu: 337
    }
];

t_frens = [{
        nom: "LEVEL ULTIMATE", //
        preu: 714
    },
    {
        nom: "LEVEL TLM", //
        preu: 468
    },
    {
        nom: "XTR", //
        preu: 549
    },
    {
        nom: "XT", //
        preu: 313
    }

];

t_pedals_road = [{
        nom: "Dura-Ace", //
        preu: 215
    },
    {
        nom: "Ultegra", //
        preu: 135
    },
    {
        nom: "105", //
        preu: 104
    },
    {
        nom: "LOOK TITANIUM", //
        preu: 285
    },
    {
        nom: "LOOK CARBON", //
        preu: 160
    },
    {
        nom: "LOOK BLADE", //
        preu: 80
    },
    {
        nom: "XPRESSO 12", //
        preu: 290
    },
    {
        nom: "XPRESSO 10", //
        preu: 160
    },
    {
        nom: "XPRESSO 6", //
        preu: 100
    },
    {
        nom: "XPRESSO 4", //
        preu: 80
    }
];

t_pedals_mtb = [{
        nom: "XTR", //
        preu: 130
    },
    {
        nom: "XT", //
        preu: 85
    },
    {
        nom: "Look Carbon Ti", //
        preu: 199
    },
    {
        nom: "Look Carbon", //
        preu: 110
    },
    {
        nom: "Look Race", //
        preu: 70
    },
];

t_tijes_mtb = [{
        nom: "New Ultimate Alu", //
        preu: 109
    },
    {
        nom: "New Ultimate Car", //
        preu: 206
    },
    {
        nom: "OnOFF He Carbon", //
        preu: 139
    },
    {
        nom: "TUNE ", //
        preu: 229
    },
    {
        nom: "OnOff Peak", //
        preu: 60
    },
    {
        nom: "Telescopica REVERB STEALTH ", //
        preu: 443
    },
    {
        nom: "Telescopica Transfer", //
        preu: 489
    },
    {
        nom: "Telescopica Koryak", //
        preu: 240
    },
    {
        nom: "Telescopica Syncros Telescopica", //
        preu: 229
    },
    {
        nom: "Telescopica DT 232 one", //
        preu: 498
    },
];

t_forquilla = [{
        nom: "Fox 32 kashima", //
        preu: 1279
    },
    {
        nom: "Fox 34 kashima", //
        preu: 1369
    },
    {
        nom: "Fox 32 anoditzat", //
        preu: 959
    },
    {
        nom: "Fox 34 anoditzat", //
        preu: 1059
    },
    {
        nom: "SID 35 ultimate", //
        preu: 1059
    },
    {
        nom: "SID 32 sl ultiimate ", //
        preu: 949
    },
    {
        nom: "SID ultimate", //
        preu: 945
    },
];

t_forquilla = [{
        nom: "Fox 32 kashima", //
        preu: 1279
    },
    {
        nom: "Fox 34 kashima", //
        preu: 1369
    },
    {
        nom: "Fox 32 anoditzat", //
        preu: 959
    },
    {
        nom: "Fox 34 anoditzat", //
        preu: 1059
    },
    {
        nom: "SID 35 ultimate", //
        preu: 1059
    },
    {
        nom: "SID 32 sl ultiimate ", //
        preu: 949
    },
    {
        nom: "SID ultimate", //
        preu: 945
    },
];

t_portabido = [{
        nom: "Tune WASSERTRÄGER 2.0", //
        preu: 56
    },
    {
        nom: "Tune RECHTSTRÄGER", //
        preu: 56
    },
    {
        nom: "Most wings carbon 1k", //
        preu: 52
    },
    {
        nom: "Syncros Carbon 1.0", //
        preu: 65
    },
    {
        nom: "Syncros Tailor MB cage multiHerramientas", //
        preu: 55
    },
    {
        nom: "Elite Vico carbon", //
        preu: 28
    },
    {
        nom: "Elite Rocko carbon", //
        preu: 30
    },
    {
        nom: "Pro LIGHTWEIGHT", //
        preu: 52
    },
    {
        nom: "LIGHTWEIGHT Edelhelfer", //
        preu: 92
    },
    {
        nom: "SUPACAZ FLY CAGEZ CARBON", //
        preu: 59
    }
];

t_pedalier = [{
        nom: "CeramicSpeed ", //
        preu: 282
    },
    {
        nom: "CeramicSpeed coated", //
        preu: 387
    }
];

t_roldanes = [{
        nom: "Camapgnolo ", //
        preu: 483
    },
    {
        nom: "Campagnolo EPS", //
        preu: 503
    },
    {
        nom: "Shimano", //
        preu: 482
    },
    {
        nom: "Sram", //
        preu: 503
    }
];

t_bieles_road = [{
        nom: "Dura-Ace ", //
        preu: 495
    },
    {
        nom: "Ultegra", //
        preu: 238
    },
    {
        nom: "Red AXS", //
        preu: 700
    },
    {
        nom: "Force AXS", //
        preu: 435
    },
    {
        nom: "Campagnolo Super Record", //
        preu: 962
    },
    {
        nom: "Campagnolo Record", //
        preu: 536
    },
    {
        nom: "Campagnolo Chorus", //
        preu: 384
    },
    //+potenciometre
    {
        nom: "Dura-Ace Potenciometro", //
        preu: 1366
    },
    {
        nom: "Stages Dura-Ace LR", //
        preu: 999
    },
    {
        nom: "Stages Ultegra Potenciometro LR", //
        preu: 749
    },
    {
        nom: "Stages Ultegra Potenciometro L", //
        preu: 638
    },
    {
        nom: "Quarq Red AXS", //
        preu: 1200
    },
    {
        nom: "Quarq Force AXS", //
        preu: 1034
    },
    {
        nom: "Stages Campagnolo Super Record L", //
        preu: 1861
    },
    {
        nom: "Stages Campagnolo Record L", //
        preu: 1235
    }
];

t_bieles_gravel = [{
        nom: "GRX 810 ", //
        preu: 241
    },
    {
        nom: "GRX 600", //
        preu: 122
    },
    {
        nom: "Red AXS", //
        preu: 700
    },
    {
        nom: "Force AXS", //
        preu: 435
    },
    {
        nom: "Camapgnolo Ekar", //
        preu: 0
    },
    //+potenciometre
    {
        nom: "Stages GRX 810 L", //
        preu: 640
    },
    {
        nom: "Stages GRX 600 L", //
        preu: 521
    },
    {
        nom: "Quarq Red AXS", //
        preu: 1200
    },
    {
        nom: "Quarq Force AXS", //
        preu: 1034
    },
    {
        nom: "Quarq xx1", //
        preu: 1071
    }
];

t_bieles_mtb = [{
        nom: "XTR", //
        preu: 487
    },
    {
        nom: "XT", //
        preu: 185
    },
    {
        nom: "XX1", //
        preu: 571
    },
    {
        nom: "X01", //
        preu: 435
    },
    {
        nom: "GX", //
        preu: 150
    },
    //+potenciometre
    {
        nom: "Stages XTR LR", //
        preu: 1199
    },
    {
        nom: "Stages XTR L", //
        preu: 1016
    },
    {
        nom: "Stages XT LR", //
        preu: 749
    },
    {
        nom: "Stages XT L", //
        preu: 584
    },
    {
        nom: "Quarq xx1", //
        preu: 1071
    },
];



function modalitat() {
    esconde();
    $("#quadre").empty();
    $("#bieles").empty();
    $("#portabido").empty();
    $("#portabido2").empty();
    $("#rodes").empty();
    $("#grup").empty();
    $("#frens").empty();
    $("#manillar").empty();
    $("#tija").empty();
    $("#cinta").empty();
    $("#punys").empty();
    $("#seient").empty();
    $("#pneumatics").empty();
    $("#pedals").empty();
    $("#forquilla").empty();
    $("#portabido").empty();
    $("#portabido2").empty();
    $("#pedalier").empty();
    $("#roldanes").empty();
    $("#imgs").empty();
    $("#info").text("");

    cometa = "''"

    //ROAD DISC
    if ($("#modalitat").val() == "road_disc") {

        //quadres disc
        quadre(t_road_disc)

        //rodes disc 
        rodes(t_rodes_disc)

        //grup disc
        grup(t_grup_disc)

        //bieles
        bieles(t_bieles_road)

        //manillar
        manillar(t_manillars_road_disc)

        //portabidons
        portabido();

        //seient
        seient();

        //cinta
        mostrar_cinta();

        //pneumatics
        pneumatic(t_pneumatics_road);

        //pedals
        pedals(t_pedals_road);

        //ceramicspeed
        ceramicspeed();

        //img
        carregar_image(["xr4.jpg", "f12_3.jpg", "c64.jpg", "v3rs.jpg", "rc_pro2.jpg", "rc_ultimate3.jpg", "f12_2.jpg", "xr4_2.jpg", "rc_pro.jpg", "rc_ultimate.jpg", "rc_ultimate2.jpg", "fun.jpg", "f12.jpg"])

    }

    //ROAD RIM BRAKE
    if ($("#modalitat").val() == "road_rim") {
        $("#info").show();

        //quadre road
        quadre(t_road);

        //rodes road 
        rodes(t_rodes_road)

        //grup
        grup(t_grup_road)

        //bieles
        bieles(t_bieles_road)

        //manillar
        manillar(t_manillars_road)

        portabido()
        seient();
        tijes(t_tijes_road);
        mostrar_cinta();
        pneumatic(t_pneumatics_road);
        pedals(t_pedals_road);
        ceramicspeed();

        //img
        carregar_image(["c64_rim_2.jpg", "f12_rim.jpg", "xr4_rim.jpg", "f12_rim_2.jpg", "specialissima.jpg", "c64_rim.jpg", "specialissima_2.jpg", "xr4_rim_2.jpg"])

    }

    //gravel
    if ($("#modalitat").val() == "gravel") {
        $("#info").show();

        //quadre gravel
        quadre(t_gravel);

        //rodes gravel
        rodes(t_rodes_gravel)

        //grup gravel
        grup(t_grup_gravel)

        //bieles
        bieles(t_bieles_gravel)

        //manillar gravel
        manillar(t_manillars_gravel)

        seient();
        tijes(t_tijes_road);
        mostrar_cinta();
        pedals(t_pedals_mtb);

        //pneumatics gravel
        pneumatic(t_pneumatics_gravel)

        portabido();
        ceramicspeed();

        //img
        carregar_image(["grevil.jpg", "grevil2.jpg", "zolder.jpg"])
    }

    if ($("#modalitat").val() == "mtb") {
        $("#info").show();
        //quadre
        quadre(t_mtb);

        //rodes 
        rodes(t_rodes_mtb)

        //grup 
        grup(t_grup_mtb)

        //bieles
        bieles(t_bieles_mtb)

        //manillars
        manillar(t_manillars_mtb);

        //horquilla
        t_tmp = '<option value="0" selected>Selecciona una Horquilla</option>';
        t_forquilla.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#forquilla").append(t_tmp);
        $("#forquilla").parent().show();

        //frens mtb
        t_tmp = '<option value="0" selected>Selecciona unos Frenos</option>';
        t_frens.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#frens").append(t_tmp);
        $("#frens").parent().show();


        seient();
        pedals(t_pedals_mtb);

        //punys mtb
        t_tmp = '<option value="0" selected>Selecciona unos Puños</option>';
        t_punys.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#punys").append(t_tmp);
        $("#punys").parent().show();

        //pneumatics mtb
        pneumatic(t_pneumatics_mtb)



        tijes(t_tijes_mtb);

        portabido()


        //img
        carregar_image(["n1no.jpg", "spark_ultimate.jpg", "methanol_cv.jpg", "methanol_fs.jpg"])
    }



};

//carregar quadre
function quadre(t_quadre) {
    t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
    t_quadre.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#quadre").append(t_tmp);
}

//carregar rodes
function rodes(t_rodes) {
    t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
    t_rodes.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#rodes").append(t_tmp)
}

//carregar grup
function grup(t_grup) {
    t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
    t_grup.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#grup").append(t_tmp);
}

function bieles(t_bieles) {
    t_tmp = '<option value="0" selected>Selecciona las bielas</option>';
    t_bieles.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#bieles").append(t_tmp);
}

function manillar(t_manillar) {
    t_tmp = '<option value="0" selected>Selecciona el Manillar</option>';
    t_manillar.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#manillar").append(t_tmp);
}


function portabido() {
    //portabido1
    t_tmp = '<option value="0" selected>Selecciona el Portabidon</option>';
    t_portabido.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#portabido").append(t_tmp);

    //portabido2
    t_tmp = '<option value="0" selected>Selecciona el segundo Portabidon</option>';
    t_portabido.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#portabido2").append(t_tmp);
}

function ceramicspeed() {
    //pedalier
    t_tmp = '<option value="0" selected>Selecciona el Pedalier CeramicSpeed</option>';
    t_pedalier.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#pedalier").parent().show();
    $("#pedalier").append(t_tmp);


    //roldanes
    t_tmp = '<option value="0" selected>Selecciona la pata CeramicSpeed</option>';
    t_roldanes.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#roldanes").parent().show();
    $("#roldanes").append(t_tmp);

}

function tijes(t_tijes) {
    t_tmp = '<option value="0" selected>Selecciona la Tija</option>';
    t_tijes.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#tija").append(t_tmp);
    $("#tija").parent().show();
}

function seient() {
    t_tmp = '<option value="0" selected>Selecciona el Sillin</option>';
    t_seient.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#seient").append(t_tmp);
};

function pneumatic(t_pneumatics) {
    t_tmp = '<option value="0" selected>Selecciona los Pneumaticos</option>';
    t_pneumatics.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#pneumatics").append(t_tmp);
};

function mostrar_cinta() {
    $("#cinta").parent().show();

    t_tmp = '<option value="0" selected>Selecciona la Cinta</option>';
    t_cinta.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#cinta").append(t_tmp);
};


function pedals(t_pedals) {

    t_tmp = '<option value="0" selected>Selecciona el Pedales</option>';
    t_pedals.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#pedals").append(t_tmp);
};


function carregar_image(img) {
    $("#imgs").show();
    img.forEach(element => {
        htm = '<div class="card shadow rounded-lg mb-4"><div class="card-body text-center"><img src="./images/' + element + '" alt="' + element + '" srcset="" class="img-fluid rounded-lg"></div></div>'
        $("#imgs").append(htm)
    });
}

function preu() {
    $("#desglos").empty();
    let total = 0;
    let part1 = '<div class="d-flex justify-content-around row">';
    let part2 = "";
    let part3 = '..................................................................................................................................................................................................................................................................................................................................................................................................'
    let part4 = "";
    let part5 = "</div>"

    if ($("#quadre").val() != "0") {
        preu = JSON.parse($("#quadre").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Cuadro: <span class="font-weight-bold text-truncate">' + JSON.parse($("#quadre").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate" >Manillar: <span class="font-weight-bold text-truncate">' + JSON.parse($("#manillar").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Ruedas: <span class="font-weight-bold text-truncate">' + JSON.parse($("#rodes").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Grupo: <span class="font-weight-bold text-truncate">' + JSON.parse($("#grup").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#bieles").val() != "0") {
        preu = JSON.parse($("#bieles").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Bielas: <span class="font-weight-bold text-truncate">' + JSON.parse($("#bieles").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Frenos: <span class="font-weight-bold text-truncate">' + JSON.parse($("#frens").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Horquilla: <span class="font-weight-bold text-truncate">' + JSON.parse($("#forquilla").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Sillin: <span class="font-weight-bold text-truncate">' + JSON.parse($("#seient").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Tija: <span class="font-weight-bold text-truncate">' + JSON.parse($("#tija").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Pedales: <span class="font-weight-bold text-truncate">' + JSON.parse($("#pedals").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Cinta: <span class="font-weight-bold text-truncate">' + JSON.parse($("#cinta").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
        preu = JSON.parse($("#punys").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Puños: <span class="font-weight-bold text-truncate">' + JSON.parse($("#punys").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#pneumatics").val() != "0") {
        preu = JSON.parse($("#pneumatics").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Neumaticos: <span class="font-weight-bold text-truncate">' + JSON.parse($("#pneumatics").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#portabido").val() != "0") {
        preu = JSON.parse($("#portabido").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Portabidon: <span class="font-weight-bold text-truncate">' + JSON.parse($("#portabido").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#portabido2").val() != "0") {
        preu = JSON.parse($("#portabido2").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Segundo Portabidon: <span class="font-weight-bold text-truncate">' + JSON.parse($("#portabido2").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#pedalier").val() && $("#pedalier").val() != "0") {
        preu = JSON.parse($("#pedalier").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Pedalier: <span class="font-weight-bold text-truncate">' + JSON.parse($("#pedalier").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#roldanes").val() && $("#roldanes").val() != "0") {
        preu = JSON.parse($("#roldanes").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Roldanas: <span class="font-weight-bold text-truncate">' + JSON.parse($("#roldanes").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }



    $("#total").text(total);
    $('#card-desglose').show();

};


function esconde() {
    $("#forquilla").parent().hide();
    $("#frens").parent().hide();
    $("#tija").parent().hide();
    $("#punys").parent().hide();
    $("#cinta").parent().hide();
    $("#pedalier").parent().hide();
    $("#roldanes").parent().hide();
    $("#info").hide();
};


function info() {
    if ($("#modalitat").val() != "road_disc") {
        if ($("#quadre").val() != "0") {
            text = JSON.parse($("#quadre").val()).info;
            $("#info").text(text);
            console.log(text)
        }
    }

};



function enviar() {
    if ($("#quadre").val() != "0" && $("#quadre").val() != null) {
        quadre = JSON.parse($("#quadre").val()).nom
    }
    Email.send({
        SecureToken: "e73157c6-e8cb-4301-8f40-838dc3f6e2b4",
        To: 'comercial@muntbikes.com',
        From: "configurador.muntbikes@gmail.com",
        Subject: "Configuracio " + quadre + "",
        Body: configuracio()
    }).then(function (message) {
        alert('Correo Enviado')
    });

}



function configuracio() {
    let modallitat;
    if ($("#modalitat").val() != null) {
        modalitat = $("#modalitat").val()
    }

    tx = '<html><body><style>table, th, td {border: 1px solid black;border-collapse: collapse;}th, td {padding: 15px;}</style>'
    tx += '<table style="width:100%">';
    tx += "<tr><td>Nom: " + $("#nom").val() +
        "</td></tr><tr><td>Cognom: " +
        $("#cognom").val() +
        "</td></tr><tr><td>Email: " +
        $("#mail").val() +
        "</td></tr><tr><td>Telefon:" +
        $("#tel").val() +
        "</td></tr><tr><td>Comentaris: " +
        $("#comentaris").val() +
        "</td></tr><tr><td>Estatura: " +
        $("#estatura").val() +
        "</td></tr>";



    tx += "<tr><td></td></tr>"
    tx += "<tr><td>Modalitat: " + modalitat;
    tx += "</td></tr><tr><td>Quadre: "
    if ($("#quadre").val() && $("#quadre").val() != null) {
        tx += JSON.parse($("#quadre").val()).nom
        quadre = JSON.parse($("#quadre").val()).nom
    }
    tx += "</td></tr><tr><td>Rodes: "
    if ($("#rodes").val() && $("#rodes").val() != "0") {
        tx += JSON.parse($("#rodes").val()).nom
    }
    tx += "</td></tr><tr><td>Grup: "
    if ($("#grup").val() && $("#grup").val() != "0") {
        tx += JSON.parse($("#grup").val()).nom
    }
    tx += "</td></tr><tr><td>Bieles: "
    if ($("#bieles").val() && $("#bieles").val() != "0") {
        tx += JSON.parse($("#bieles").val()).nom
    }
    tx += "</td></tr><tr><td>Manillar: "
    if ($("#manillar").val() && $("#manillar").val() != "0") {
        tx += JSON.parse($("#manillar").val()).nom
    }
    tx += "</td></tr><tr><td>Seient: "
    if ($("#seient").val() && $("#seient").val() != "0") {
        tx += JSON.parse($("#seient").val()).nom
    }
    tx += "</td></tr><tr><td>Pneumatics: "
    if ($("#pneumatics").val() && $("#pneumatics").val() != "0") {
        tx += JSON.parse($("#pneumatics").val()).nom
    }
    tx += "</td></tr><tr><td>Pedals: "
    if ($("#pedals").val() && $("#pedals").val() != "0") {
        tx += JSON.parse($("#pedals").val()).nom
    }
    tx += "</td></tr><tr><td>Frens: "
    if ($("#frens").val() && $("#frens").val() != "0") {
        tx += JSON.parse($("#frens").val()).nom
    }
    tx += "</td></tr><tr><td>Tija: "
    if ($("#tija").val() && $("#tija").val() != "0") {
        tx += JSON.parse($("#tija").val()).nom
    }
    tx += "</td></tr><tr><td>Cinta: "
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        tx += JSON.parse($("#cinta").val()).nom
    }
    tx += "</td></tr><tr><td>Punys: "
    if ($("#punys").val() && $("#punys").val() != "0") {
        tx += JSON.parse($("#punys").val()).nom
    }
    tx += "</td></tr><tr><td>Forquilla: "
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        tx += JSON.parse($("#forquilla").val()).nom
    }
    tx += "</td></tr><tr><td>Portabido: "
    if ($("#portabido").val() && $("#portabido").val() != "0") {
        tx += JSON.parse($("#portabido").val()).nom
    }
    tx += "</td></tr><tr><td>Portabido 2: "
    if ($("#portabido2").val() && $("#portabido2").val() != "0") {
        tx += JSON.parse($("#portabido2").val()).nom
    }
    tx += "</td></tr><tr><td>Pedalier: "
    if ($("#pedalier").val() && $("#pedalier").val() != "0") {
        tx += JSON.parse($("#pedalier").val()).nom
    }
    tx += "</td></tr><tr><td>Roldanes: "
    if ($("#roldanes").val() && $("#roldanes").val() != "0") {
        tx += JSON.parse($("#roldanes").val()).nom
    }
    tx += "</td></tr>"
    tx += '</table>'
    tx += "<br><br>"
    tx += $("#desglos").html();
    tx += "</body></html>"
    return tx;

}

function toggleDarkMode() {
    if (darkMode == false) {
        $('body').removeClass('text-black')
        $('div').removeClass('bg-white')
        $('body').addClass('text-white bg-dark2')
        $('div.card').addClass('dark')
        $('input').addClass('bg-dark2 text-white')
        $('select').addClass('bg-dark2 text-white')
        $('textarea').addClass('bg-dark2 text-white')
        $('#darkMode').html('<i class="far fa-sun"></i>')
        $('.custom-select').css({
            border: 0
        });
        $('.form-control').css({
            border: 0
        });
        $('.form-control').addClass('form-black')
        darkMode = true;

    } else {
        console.log('white')
        $('body').removeClass('text-white bg-dark2')
        $('div.card').removeClass('dark')
        $('input').removeClass('bg-dark2 text-white')
        $('select').removeClass('bg-dark2 text-white')
        $('textarea').removeClass('bg-dark2 text-white')
        $('#darkMode').html('<i class="far fa-moon"></i>')
        $('.custom-select').removeAttr('style');
        $('.form-control').removeAttr('style');
        $('.form-control').removeClass('form-black')
        darkMode = false;
    }

}

function hidetext() {
    $('#txt').hide();
    $('#txt').children().hide();
    $('#txt').removeClass('txt')
}

async function generatePDF() {
    // Choose the element that our invoice is rendered in.

    $("#print").empty();
    $("#data").empty();
    $("#logo_marca").empty();
    $("#print").append(print());
    $("#invoice").show()
    const element = document.getElementById("invoice");
    date = new Date();
    var opt = {
        filename: 'configurador_muntbikes' + date.getTime() + '.pdf'
    };
    // Choose the element and save the PDF for our user.

    await html2pdf().set(opt).from(element).save();

    $("#invoice").hide()



}

function print() {
    let modalitat;
    if ($("#modalitat").val() != null) {
        switch ($("#modalitat").val()) {
            case "road_disc":
                modalitat = "Carretera disco"
                break;
            case "road_rim":
                modalitat = "Carretera"
                break;
            case "gravel":
                modalitat = "Gravel / CX"
                break;
            case "mtb":
                modalitat = "MTB"
                break;
            default:
                "0"
                break;
        }

    }
    //imatge al pdf
    if ($("#quadre").val() != null || $("#quadre").val() != 0) {
        img_marca = "";
        switch (JSON.parse($("#quadre").val()).marca) {
            case "scott":
                img_marca = "./images/marcas/scott.png"
                break;
            case "bianchi":
                img_marca = "./images/marcas/bianchi.png"
                break;
            case "pinarello":
                img_marca = "./images/marcas/pinarello.png"
                break;
            case "colnago":
                img_marca = "./images/marcas/colnago.png"
                break;
            default:
                "0"
                break;
        }
        img_html = '<img src="' + img_marca + '" alt="" class="img-fluid"></img>'
        $("#logo_marca").append(img_html);
    }

    let total = 0;
    let part1 = '<div class="d-flex justify-content-around row">';
    let part2 = "";
    let part3 = '.......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................'
    let part4 = "";
    let part5 = "</div>"

    if ($("#quadre").val() != "0") {
        date = new Date()
        date_html = '<p class="mb-0 p2">Configuracion hecha el ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '</p>';
        date.setMonth(date.getMonth() + 1);
        date_html_fi = '<p class="mb-0 p2">Oferta valida hasta el ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '</p> <br>';
        $("#data").append(date_html);
        $("#data").append(date_html_fi);
        modalitat_html = '<p class="h6">Modalidad:<span class="h5 float-right"> ' + modalitat + '</span></p><div class="col-12 border border-bottom border-dark"></div><br>';
        $("#print").append(modalitat_html);
        preu = JSON.parse($("#quadre").val()).preu;
        part2 = '<div class="col-10  pr-0 text-truncate">Cuadro: <span class="font-weight-bold ">' + JSON.parse($("#quadre").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }

    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate" >Manillar: <span class="font-weight-bold ">' + JSON.parse($("#manillar").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Ruedas: <span class="font-weight-bold ">' + JSON.parse($("#rodes").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Grupo: <span class="font-weight-bold ">' + JSON.parse($("#grup").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#bieles").val() != "0") {
        preu = JSON.parse($("#bieles").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Bielas: <span class="font-weight-bold">' + JSON.parse($("#bieles").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Frenos: <span class="font-weight-bold ">' + JSON.parse($("#frens").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class="col-10 pr-0 text-truncate">Horquilla: <span class="font-weight-bold ">' + JSON.parse($("#forquilla").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Sillin: <span class="font-weight-bold ">' + JSON.parse($("#seient").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Tija: <span class="font-weight-bold ">' + JSON.parse($("#tija").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Pedales: <span class="font-weight-bold ">' + JSON.parse($("#pedals").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Cinta: <span class="font-weight-bold ">' + JSON.parse($("#cinta").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
        preu = JSON.parse($("#punys").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Puños: <span class="font-weight-bold ">' + JSON.parse($("#punys").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#pneumatics").val() != "0") {
        preu = JSON.parse($("#pneumatics").val()).preu;
        part2 = '<div class="col-10 text-truncate">Neumaticos: <span class="font-weight-bold ">' + JSON.parse($("#pneumatics").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#portabido").val() != "0") {
        preu = JSON.parse($("#portabido").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Portabidon: <span class="font-weight-bold ">' + JSON.parse($("#portabido").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#portabido2").val() != "0") {
        preu = JSON.parse($("#portabido2").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Segundo Portabidon: <span class="font-weight-bold ">' + JSON.parse($("#portabido2").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#pedalier").val() && $("#pedalier").val() != "0") {
        preu = JSON.parse($("#pedalier").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Pedalier: <span class="font-weight-bold ">' + JSON.parse($("#pedalier").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#roldanes").val() && $("#roldanes").val() != "0") {
        preu = JSON.parse($("#roldanes").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Roldanas: <span class="font-weight-bold ">' + JSON.parse($("#roldanes").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;
    }

    textPreu = '<br><div class=" rounded-lg px-2 py-1 bg-primary text-white float-right font-weight-bold" >Total: <span id="total2">' + total + '</span> €</div><br>'
    $("#print").append(textPreu);

    if (!dades_clinet) {
        if ($("#nom").val() != "0" && $("#cognom").val() != "0") {
            d = '<p>Nombre: <span class="font-weight-bold text-capitalize">' + $("#nom").val() + ' ' + $("#cognom").val() + '</span></p>' + '<p>Telefon: <span class="font-weight-bold text-capitalize">' + $("#tel").val() + '</span></p>' + '<p>Correo: <span class="font-weight-bold">' + $("#mail").val() + '</span></p>'
            $("#dades_client").append(d);


        } else {
            d = '<p>Nombre: </p>' + '<p>Telefon: </p>' + '<p>Correo: </p>'
            $("#dades_client").append(d);


        }
        dades_clinet = true;
    }
};

function dades_modificades() {
    $("#dades_client").empty();
    dades_clinet = false;
}