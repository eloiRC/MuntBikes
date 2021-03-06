$(document).ready(function () {
    esconde();
    document.getElementById("darkMode").addEventListener("click", toggleDarkMode)
    document.getElementById("modalitat").addEventListener("change", modalitat)
    document.getElementById("quadre").addEventListener("change", preu);
    document.getElementById("rodes").addEventListener("change", preu);
    document.getElementById("grup").addEventListener("change", preu);
    document.getElementById("frens").addEventListener("change", preu);
    document.getElementById("manillar").addEventListener("change", preu);
    document.getElementById("tija").addEventListener("change", preu);
    document.getElementById("cinta").addEventListener("change", preu);
    document.getElementById("punys").addEventListener("change", preu);
    document.getElementById("seient").addEventListener("change", preu);
    document.getElementById("pneumatics").addEventListener("change", preu);
    document.getElementById("quadre").addEventListener("change", info);
    $("#formulari_a_la_carta").submit(function (e) {
        e.preventDefault();
        enviar();
    });
    
});
let darkMode=false;
t_road_disc = [{
        nom: "Pinarello F12",
        preu: 5595
    },
    {
        nom: "Pinarello F10",
        preu: 4525
    },
    {
        nom: "Pinarello PRINCE FX",
        preu: 3720
    },
    {
        nom: "Bianchi XR4",
        preu: 4290
    },
    {
        nom: "Colnago C64",
        preu: 5105
    },
    {
        nom: "Colngao V3 RS",
        preu: 4325
    },
    {
        nom: "Scott Addict RC SL",
        preu: 2999
    },
    {
        nom: "Scott Addict RC PRO",
        preu: 2199
    }
];

t_road = [{
        nom: "Pinarello F12",
        preu: 5395,
        info: "*tija incluida"
    },
    {
        nom: "Pinarello F10",
        preu: 4395,
        info: "*tija incluida"
    },
    {
        nom: "Pinarello PRINCE FX",
        preu: 3445,
        info: "*tija incluida"
    },
    {
        nom: "Bianchi XR4",
        preu: 4090,
        info: "*tija incluida"
    },
    {
        nom: "Bianchi SPECIALISSIMA",
        preu: 3690,
        info: ""
    },
    {
        nom: "Colnago C64",
        preu: 4568,
        info: "*tija incluida"
    },
    {
        nom: "Colngao V3 RS",
        preu: 3958,
        info: "*tija incluida"
    }
];

t_gravel = [{
        nom: "Pinarello Grevil",
        preu: 2895,
        info: "*tija incluida"
    },
    {
        nom: "Pinarello Crossista +",
        preu: 4835,
        info: "*tija incluida"
    },
    {
        nom: "Pinarello Crossista ",
        preu: 2715,
        info: "*tija incluida"
    },
    {
        nom: "Bianchi Zolder Pro",
        preu: 1990,
        info: ""
    },
    {
        nom: "Scott Addict CX RC",
        preu: 2499,
        info: "*tija incluida"
    },
    {
        nom: "Scott Addict Gravel",
        preu: 2499,
        info: "*tija incluida"
    },
    {
        nom: "Colango Prestige",
        preu: 2190,
        info: "*tija incluida"
    }
];

t_mtb = [{
        nom: "Scott Spark N1NO Canda",
        preu: 5999,
        info: "*Hoquilla SID ultimate,amortiguador (RS) ,bielas xx1, frenos level ultimate, manillar fraser ic y tija incluidos "
    },
    {
        nom: "Scott Spark N1NO SilverFish",
        preu: 5999,
        info: "*Hoquilla SID ultimate,amortiguador (RS) ,bielas xx1, frenos lvl ultimate, manillar fraser ic y tija incluidos "
    },
    {
        nom: "Scott Spark SL ",
        preu: 5499,
        info: "*Horquilla y amortiguador fox kashima y manillar fracer ic y tija incluidos"
    },
    {
        nom: "Scott Scale N1NO ",
        preu: 4999,
        info: "*Hoquilla SID ultimate,bielas xx1, frenos level ultimate, manillar fracer ic y tija incluidos"
    },
    {
        nom: "Scott Scale SL",
        preu: 3499,
        info: "*Manillar fracer ic y tija incluidos"
    },
    {
        nom: "Bianchi Methanol FS",
        preu: 3590,
        info: "*Amortiguador Fox Kashima incluido"
    },
    {
        nom: "Bianchi Methanol RS",
        preu: 2590,
        info: ""
    }
];

t_manillars_road = [{
        nom: "MOST TALON ULTRA",
        preu: 845
    },
    {
        nom: "MOST TALON AERO",
        preu: 718
    },
    {
        nom: "MOST TALON UD",
        preu: 411
    },
    {
        nom: "MOST JAGUAR 3K conjunto",
        preu: 247
    },
    {
        nom: "SYNCROS CRESTON IC SL",
        preu: 559
    },
    {
        nom: "VISION METRON 5D ACR",
        preu: 649
    },
    {
        nom: "ZIPP SL AERO + SPEED conjunto",
        preu: 615
    },
    {
        nom: "ZIPP SL ERGO + SPEED conjunto",
        preu: 590
    },
    {
        nom: "ENVE AERO conjunto ",
        preu: 665
    },
    {
        nom: "ENVE STD conjunto",
        preu: 615
    },
    {
        nom: "PRO STEALTH",
        preu: 599
    },
    {
        nom: "PRO VIVE conjunto",
        preu: 458
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
        nom: "ENVE STD",
        preu: 615
    },
    {
        nom: "PRO STEALTH",
        preu: 599
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
    {
        nom: "Syn.. RR 1.5",
        preu: 120
    },
    {
        nom: "Syn.. RR 1.0 Aero",
        preu: 549
    }
];

t_manillars_mtb = [{
        nom: "Fraser SE SL  iC",
        preu: 430
    },
    {
        nom: "Fraser SL iC",
        preu: 330
    },
    {
        nom: "NW Carbon + steam",
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
        nom: "ENVE SES 3.4 CK tubular",
        preu: 3000
    },
    {
        nom: "Campagnolo Bora One 35 tubular",
        preu: 1900
    },
    {
        nom: "Campagnolo Bora One 50 tubular",
        preu: 1900
    },
    {
        nom: "Zipp 202 tubular",
        preu: 2400
    },
    {
        nom: "Zipp 303 tubular",
        preu: 2600
    },
    {
        nom: "Dura-Ace c40 tubular",
        preu: 2620
    },
    {
        nom: "Fulcrum Speed 40 (cult) tubular",
        preu: 2548
    },
    {
        nom: "Carbon-TI tubular",
        preu: 1620
    },
    {
        nom: "Corima WS 47 tubular",
        preu: 1549
    },
    {
        nom: "Lightweight Melnstein T 24D tubular",
        preu: 4079
    },
    {
        nom: "Campagnolo BORA ONE 35  tubeless / cubierta",
        preu: 2140
    },
    {
        nom: "Campagnolo BORA ONE 50  tubeless / cubierta",
        preu: 2140
    },
    {
        nom: "Campagnolo WTO 33  tubeless / cubierta",
        preu: 2164
    },
    {
        nom: "Campagnolo WTO 45  tubeless / cubierta",
        preu: 2164
    },
    {
        nom: "Campagnolo WTO 60  tubeless / cubierta",
        preu: 2164
    },
    {
        nom: "Zipp202/303/404  tubeless / cubierta",
        preu: 3000
    },
    {
        nom: "Dura-Ace c40  tubeless / cubierta",
        preu: 2430
    },
    {
        nom: "DT-1100  tubeless / cubierta",
        preu: 2388
    },
    {
        nom: "DT-1400  tubeless / cubierta",
        preu: 1958
    },
    {
        nom: "Fulcrum Wind 40  tubeless / cubierta",
        preu: 1226
    },
    {
        nom: "Fulcrum Speed 40 (usb)  tubeless / cubierta",
        preu: 2045
    },
    {
        nom: "Carbon-TI  tubeless / cubierta",
        preu: 1700
    },
    {
        nom: "Syncros Capital 1.0 tubeless / cubierta",
        preu: 1299
    },
    {
        nom: "Corima WS cubierta",
        preu: 1799
    }
];

t_rodes_road = [{
        nom: "Corima WS+ tubular",
        preu: 1899
    },
    {
        nom: "Corima WS tubular",
        preu: 1449
    },
    {
        nom: "Dura-Ace c40 tubular",
        preu: 2600
    },
    {
        nom: "Fulcrum Speed 40 (cult) tubular",
        preu: 2548
    },
    {
        nom: "Campagnolo Bora One 35 tubular",
        preu: 1880
    },
    {
        nom: "Campagnolo Bora One 50 tubular",
        preu: 1880
    },
    {
        nom: "Campagnolo Bora Ultra 35 tubular",
        preu: 2830
    },
    {
        nom: "Campagnolo Bora Ultra 50 tubular",
        preu: 2830
    },
    {
        nom: "ENVE SES 3.4 CK tubular",
        preu: 3000
    },
    {
        nom: "Lightweight Melnstein T 24E tubular",
        preu: 3582
    },
    {
        nom: "Corima WS+ cubierta",
        preu: 2349
    },
    {
        nom: "Corima WS cubierta",
        preu: 1672
    },
    {
        nom: "Dura-Ace c40  tubeless / cubierta",
        preu: 1715
    },
    {
        nom: "DT-1100  tubeless / cubierta",
        preu: 2388
    },
    {
        nom: "DT-1400  tubeless / cubierta",
        preu: 1958
    },
    {
        nom: "Fulcrum Wind 40  tubeless / cubierta",
        preu: 1199
    },
    {
        nom: "Fulcrum Speed 40 (usb)  tubeless / cubierta",
        preu: 2045
    },
    {
        nom: "Campagnolo BORA ONE 35 cubierta",
        preu: 2115
    },
    {
        nom: "Campagnolo BORA ONE 50 cubierta",
        preu: 2115
    },
    {
        nom: "Campagnolo Bora Ultra 35 cubierta",
        preu: 3070
    },
    {
        nom: "Campagnolo Bora Ultra 50 cubierta",
        preu: 3070
    },
    {
        nom: "Campagnolo WTO 33 tubeless / cubierta",
        preu: 2160
    },
    {
        nom: "Campagnolo WTO 45 tubeless / cubierta",
        preu: 2160
    },
    {
        nom: "Campagnolo WTO 60 tubeless / cubierta",
        preu: 2160
    },
    {
        nom: "Zipp 202  tubeless / cubierta",
        preu: 3000
    },
    {
        nom: "Zipp 303  tubeless / cubierta",
        preu: 3000
    },
    {
        nom: "Zipp 404  tubeless / cubierta",
        preu: 3000
    }
];

t_rodes_gravel = [{
        nom: "Dura-Ace c40 ",
        preu: 2430
    },
    {
        nom: "DT GRC 1400",
        preu: 1958
    },
    {
        nom: "DT GR 1600",
        preu: 558
    },
    {
        nom: "DT CRC 1100",
        preu: 2389
    },
    {
        nom: "DT CRC 1400 Spline",
        preu: 1958
    },
    {
        nom: "DT CR 1600",
        preu: 558
    },
    {
        nom: "Fulcrum Racing Zero carbon",
        preu: 1990
    },
    {
        nom: "Fulcrum Racing Zero",
        preu: 1189
    },
    {
        nom: "Fulcrum Rapid 5 ",
        preu: 380
    }
];

t_rodes_mtb = [{
        nom: "Syncros Silverton SL",
        preu: 3499
    },
    {
        nom: "Syncros Silverton 1.0",
        preu: 1299
    },
    {
        nom: "Tune BB",
        preu: 1996
    },
    {
        nom: "Carbon-Ti",
        preu: 1700
    },
    {
        nom: "Bike Ahead Bi",
        preu: 3399
    },
    {
        nom: "DT XRC 1200",
        preu: 2138
    },
    {
        nom: "DT XR 1501 spline",
        preu: 968
    },
    {
        nom: "DT X 1700 spline",
        preu: 628
    },
    {
        nom: "ENVE",
        preu: 2750
    }
];

t_tijes = [{
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
    }
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
        nom: "MOST UltraGrip",
        preu: 18
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
        nom: "SKYRACER",
        preu: 349
    },
    {
        nom: "SPEEDNEEDLE",
        preu: 225
    },
    {
        nom: "BELCARRA / TOFINO",
        preu: 149
    },
    {
        nom: "ASPIDE CARBON",
        preu: 189
    },
    {
        nom: "SLR CARBON KIT",
        preu: 219
    },
    {
        nom: "FIZIK 00 EVO Antares",
        preu: 350
    },
    {
        nom: "FIZIK 00 EVO Arione",
        preu: 350
    },
    {
        nom: "FIZIK 00 EVO Aliante",
        preu: 350
    },
    {
        nom: "FIZIK R1 Antares",
        preu: 199
    },
    {
        nom: "FIZIK R1 Arione",
        preu: 199
    },
    {
        nom: "FIZIK R1 Aliante",
        preu: 199
    }
];

t_pneumatics_road = [{
        nom: "Continental COMPETITION TUBULAR",
        preu: 238
    },
    {
        nom: "Continental SPRINTER TUBULAR",
        preu: 132
    },
    {
        nom: "Continental GP5000 TUBELESS",
        preu: 150
    },
    {
        nom: "Continental GP5000",
        preu: 126
    },
    {
        nom: "Verdestein FORTEZZA TUBULAR",
        preu: 200
    },
    {
        nom: "Verdestein FORTEZZA",
        preu: 144
    },
    {
        nom: "Vittoria CORSA Tubluar",
        preu: 210
    },
    {
        nom: "Vittoria CORSA Cubierta",
        preu: 120
    },
    {
        nom: "Pirelli P-Zero Cubierta",
        preu: 86
    }
];

t_pneumatics_gravel = [{
        nom: "WTB Cross Boss",
        preu: 92
    },
    {
        nom: "WTB Cross Wolf",
        preu: 92
    },
    {
        nom: "Vittoria Terreno Dry G",
        preu: 98
    },
    {
        nom: "Vittoria Terreno Wet G",
        preu: 98
    },
    {
        nom: "Schwalbe G-One",
        preu: 120
    },
    {
        nom: "Schwalbe X-One",
        preu: 120
    },
    {
        nom: "Huchiston Piranha 2",
        preu: 78
    }
];

t_pneumatics_mtb = [{
        nom: "MAXXIS IKON 3C",
        preu: 118
    },
    {
        nom: "MAXXIS IKON",
        preu: 108
    },
    {
        nom: "MAXXIS REKON RACE",
        preu: 118
    },
    {
        nom: "Vittoria BARZO",
        preu: 120
    },
    {
        nom: "Vittoria MEZCAL III",
        preu: 120
    },
    {
        nom: "Schwalbe ROCKET RON",
        preu: 116
    },
    {
        nom: "Contintntal RACE KING",
        preu: 64
    }
];

t_grup_road = [{
        nom: "Shimano DURA-ACE Di2",
        preu: 3187
    },
    {
        nom: "Shimano DURA-ACE",
        preu: 1807
    },
    {
        nom: "Shimano ULTEGRA Di2",
        preu: 1678
    },
    {
        nom: "Shimano ULTEGRA",
        preu: 867
    },
    {
        nom: "Sram RED AXS 12v",
        preu: 3170
    },
    {
        nom: "Sram FROCE AXS 12v",
        preu: 2250
    },
    {
        nom: "Campagnolo Super Record 12v",
        preu: 2905
    }
];

t_grup_disc = [{
        nom: "Shimano DURA-ACE Di2",
        preu: 3290
    },
    {
        nom: "Shimano DURA-ACE",
        preu: 2356
    },
    {
        nom: "Shimano ULTEGRA Di2",
        preu: 1941
    },
    {
        nom: "Shimano ULTEGRA",
        preu: 1133
    },
    {
        nom: "Sram RED AXS 12v",
        preu: 3620
    },
    {
        nom: "Sram FROCE AXS 12v",
        preu: 2600
    }
];

t_grup_gravel = [{
        nom: "GRX Di2",
        preu: 3187
    },
    {
        nom: "GRX 800 1x",
        preu: 1228
    },
    {
        nom: "GRX 800 2x",
        preu: 1347
    },
    {
        nom: "GRX 600 1x",
        preu: 997
    },
    {
        nom: "GRX 600 2x",
        preu: 1075
    },
    {
        nom: "RED AXS 2x",
        preu: 3620
    },
    {
        nom: "RED AXS 1x",
        preu: 3170
    },
    {
        nom: "FORCE AXS 2x",
        preu: 2600
    },
    {
        nom: "FROCE AXS 1x",
        preu: 2200
    },
    {
        nom: "Rival 2x",
        preu: 1210
    },
    {
        nom: "Rival 1X",
        preu: 1177
    },
];

t_grup_mtb = [{
        nom: "XX1 AXS",
        preu: 2144
    },
    {
        nom: "X01 AXS",
        preu: 2044
    },
    {
        nom: "XX1",
        preu: 1619
    },
    {
        nom: "X01",
        preu: 1419
    },
    {
        nom: "GX",
        preu: 599
    },
    {
        nom: "XTR",
        preu: 1205
    },
    {
        nom: "XT",
        preu: 522
    }
];

t_frens = [{
        nom: "LEVEL ULTIMATE",
        preu: 714
    },
    {
        nom: "LEVEL TLM",
        preu: 468
    },
    {
        nom: "XTR",
        preu: 549
    },
    {
        nom: "XT",
        preu: 313
    }
];

t_pedals_road = [{
        nom: "LOOK TITANIUM",
        preu: 285
    },
    {
        nom: "LOOK CARBON",
        preu: 160
    },
    {
        nom: "LOOK BLADE",
        preu: 80
    },
    {
        nom: "XPRESSO 12",
        preu: 290
    },
    {
        nom: "XPRESSO 10",
        preu: 160
    },
    {
        nom: "XPRESSO 6",
        preu: 100
    },
    {
        nom: "XPRESSO 4",
        preu: 80
    },
    {
        nom: "Dura-Ace",
        preu: 215
    },
    {
        nom: "Ultegra",
        preu: 135
    },
    {
        nom: "105",
        preu: 104
    },
];

t_pedals_mtb = [{
        nom: "XTR",
        preu: 130
    },
    {
        nom: "XT",
        preu: 85
    },
    {
        nom: "Look Carbon Ti",
        preu: 199
    },
    {
        nom: "Look Carbon",
        preu: 110
    },
    {
        nom: "Look Race",
        preu: 70
    },
];

t_tijes_mtb = [{
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
        nom: "OnOff Peak",
        preu: 60
    },
    {
        nom: "REVERB STEALTH ",
        preu: 443
    },
    {
        nom: "Transfer",
        preu: 489
    },
    {
        nom: "Koryak",
        preu: 240
    },
    {
        nom: "Syncros Telescopica",
        preu: 229
    },
];

t_forquilla = [{
        nom: "Fox 32 kashima",
        preu: 1199
    },
    {
        nom: "Fox 32 anoditzat",
        preu: 999
    },
    {
        nom: "SID ult. Carbon",
        preu: 1200
    },
    {
        nom: "SID ultimate",
        preu: 945
    },
];



function modalitat() {
    esconde();
    $("#quadre").empty();
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
    $("#info").text("");

    cometa = "''"

    //ROAD DISCK
    if ($("#modalitat").val() == "road_disc") {
        //quadres disc
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_road_disc.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#quadre").append(t_tmp);

        //rodes disc 
        t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
        t_rodes_disc.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#rodes").append(t_tmp)

        //grup disc
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_disc.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);

        //manillar
        t_tmp = '<option value="0" selected>Selecciona el Manillar</option>';
        t_manillars_road.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#manillar").append(t_tmp);

        seient();
        mostrar_cinta();
        pneumatic_road();
        mostrar_pedals_road();
    }

    //ROAD RIM BRAKE
    if ($("#modalitat").val() == "road_rim") {
        $("#info").show();
        //quadre road
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_road.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#quadre").append(t_tmp);

        //rodes road 
        t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
        t_rodes_road.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#rodes").append(t_tmp)

        //grup disc
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_road.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);

        //manillar
        t_tmp = '<option value="0" selected>Selecciona el Manillar</option>';
        t_manillars_road.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#manillar").append(t_tmp);

        seient();
        mostrar_tija();
        mostrar_cinta();
        pneumatic_road();
        mostrar_pedals_road();
    }

    //gravel
    if ($("#modalitat").val() == "gravel") {
        $("#info").show();
        //quadre gravel
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_gravel.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#quadre").append(t_tmp);

        //rodes gravel
        t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
        t_rodes_gravel.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#rodes").append(t_tmp)

        //grup gravel
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_gravel.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);

        //manillar gravel
        t_tmp = '<option value="0" selected>Selecciona el Manillar</option>';
        t_manillars_gravel.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#manillar").append(t_tmp);

        seient();
        mostrar_tija();
        mostrar_cinta();
        mostrar_pedals_mtb();

        //pneumatics gravel
        t_tmp = '<option value="0" selected>Selecciona los Pneumaticos</option>';
        t_pneumatics_gravel.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#pneumatics").append(t_tmp);


    }

    if ($("#modalitat").val() == "mtb") {
        $("#info").show();
        //quadre gravel
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_mtb.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#quadre").append(t_tmp);

        //rodes gravel
        t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
        t_rodes_mtb.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#rodes").append(t_tmp)

        //grup gravel
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_mtb.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);

        //frens mtb
        t_tmp = '<option value="0" selected>Selecciona unos Frenos</option>';
        t_frens.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#frens").append(t_tmp);
        $("#frens").parent().show();

        //frens mtb
        t_tmp = '<option value="0" selected>Selecciona un Manillar</option>';
        t_manillars_mtb.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#manillar").append(t_tmp);

        seient();
        mostrar_pedals_mtb();

        //punys mtb
        t_tmp = '<option value="0" selected>Selecciona unos Punños</option>';
        t_punys.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#punys").append(t_tmp);
        $("#punys").parent().show();

        //pneumatics mtb
        t_tmp = '<option value="0" selected>Selecciona unos Pneumaticos</option>';
        t_pneumatics_mtb.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#pneumatics").append(t_tmp);



        t_tmp = '<option value="0" selected>Selecciona la Tija</option>';
        t_tijes_mtb.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
        });
        $("#tija").append(t_tmp);
        $("#tija").parent().show();

    }

};

function seient() {
    t_tmp = '<option value="0" selected>Selecciona el Sillin</option>';
    t_seient.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#seient").append(t_tmp);
};

function pneumatic_road() {
    t_tmp = '<option value="0" selected>Selecciona los Pneumaticos</option>';
    t_pneumatics_road.forEach(element => {
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

function mostrar_tija() {
    $("#tija").parent().show();

    t_tmp = '<option value="0" selected>Selecciona la Tija</option>';
    t_tijes.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#tija").append(t_tmp);
};

function mostrar_pedals_mtb() {

    t_tmp = '<option value="0" selected>Selecciona el Pedales</option>';
    t_pedals_mtb.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#pedals").append(t_tmp);
    $("#pedals").parent().show();
};

function mostrar_pedals_road() {
    t_tmp = '<option value="0" selected>Selecciona los Pedales</option>';
    t_pedals_road.forEach(element => {
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>'
    });
    $("#pedals").append(t_tmp);
    $("#pedals").parent().show();
};

function preu() {
    $("#desglos").empty();
    let total = 0;
    let part1 = '<div class="d-flex justify-content-around row">';
    let part2 = "";
    let part3 = '<div class="col-5 col-sm-8 col-md-7 col-lg-8 col-xl-9 text-truncate px-0">..................................................................................................................................................................................................................................................................................................................................................................................................</div>'
    let part4 = "";
    let part5="</div>"

    if ($("#quadre").val() != "0") {
        preu = JSON.parse($("#quadre").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Cuadro</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Ruedas</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Grupo</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Manillar</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Sillin</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#pneumatics").val() != "0") {
        preu = JSON.parse($("#pneumatics").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Pneumaticos</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Pedales</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }

    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Frenos</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Tija</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Cinta</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
        preu = JSON.parse($("#punys").val()).preu;
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Puños</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
        total += preu;
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class="col-4 col-sm-2 col-md-3 col-lg-2 col-xl-2 pr-0">Horquilla</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1+part2+part3+part4+part5);
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

quadre = ""

function enviar() {



    Email.send({
        SecureToken: "d1154398-5d05-46e7-854a-b6b5668f1f4c",
        To: 'muntbikes.configurador@gmail.com',
        From: "muntbikes.configurador@gmail.com",
        Subject: "Configuracio " + quadre + "",
        Body: configuracio()
    }).then(function (message) {
        alert("el correo ha sido enviado")
    });

}



function configuracio() {
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
        "</td></tr>";



    tx += "<tr><td></td></tr>"
    tx += "<tr><td>Quadre: "
    if ($("#quadre").val() != "0") {
        tx += JSON.parse($("#quadre").val()).nom
        quadre = JSON.parse($("#quadre").val()).nom
    }
    tx += "</td></tr><tr><td>Rodes: "
    if ($("#rodes").val() != "0") {
        tx += JSON.parse($("#rodes").val()).nom
    }
    tx += "</td></tr><tr><td>Grup: "
    if ($("#grup").val() != "0") {
        tx += JSON.parse($("#grup").val()).nom
    }
    tx += "</td></tr><tr><td>Manillar: "
    if ($("#manillar").val() != "0") {
        tx += JSON.parse($("#manillar").val()).nom
    }
    tx += "</td></tr><tr><td>Seient: "
    if ($("#seient").val() != "0") {
        tx += JSON.parse($("#seient").val()).nom
    }
    tx += "</td></tr><tr><td>Pneumatics: "
    if ($("#pneumatics").val() != "0") {
        tx += JSON.parse($("#pneumatics").val()).nom
    }
    tx += "</td></tr><tr><td>Pedals: "
    if ($("#pedals").val() != "0") {
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
    tx += "</td></tr>"
    tx += '</table></body></html>'
    return tx;

}

function toggleDarkMode(){
    if(darkMode==false){
        $('body').removeClass('text-black')
        $('div').removeClass('bg-white')
        $('body').addClass('text-white bg-dark2')        
        $('div.card').addClass('dark')
        $('input').addClass('bg-dark2 text-white')
        $('select').addClass('bg-dark2 text-white')
        $('textarea').addClass('bg-dark2 text-white')
        $('#darkMode').html('<i class="far fa-sun"></i>')
        $('.custom-select').css({border:0});
        $('.form-control').css({border:0});
        $('.form-control').addClass('form-black')
        darkMode=true;

    }
    else{
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
        darkMode=false;
    }
    
}