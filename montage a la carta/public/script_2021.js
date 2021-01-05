//window.location.replace("https://configurador-muntbikes.web.app");
dades_clinet = false;

let x;

$(window).on("load", function () {
    $("#invoice").hide();
    esconde();
    document.getElementById("textBtn").addEventListener("click", hidetext)
    document.getElementById("darkMode").addEventListener("click", toggleDarkMode)
    document.getElementById("quadre").addEventListener("change", info);
    document.getElementById("nom").addEventListener("change", dades_modificades);
    document.getElementById("cognom").addEventListener("change", dades_modificades);
    document.getElementById("tel").addEventListener("change", dades_modificades);
    document.getElementById("mail").addEventListener("change", dades_modificades);
    document.getElementById("modalitat").addEventListener("change", modalitat)

    const urlParams = new URLSearchParams(window.location.search);
    x = urlParams.get('x');
    console.log(x)
    if(x=="2011d48f3f831aefd45f9f015cbbc40d"){
        
        document.getElementById("pdf").addEventListener("click", generatePDF);
        document.getElementById("quadre").addEventListener("change", preu);
        document.getElementById("rodes").addEventListener("change", preu);
        document.getElementById("manillar").addEventListener("change", preu);
        document.getElementById("pedals").addEventListener("change", preu);
        document.getElementById("grup").addEventListener("change", preu);
        document.getElementById("frens").addEventListener("change", preu);
        document.getElementById("forquilla").addEventListener("change", preu);
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
    }
    else{
        document.getElementById("pdf").addEventListener("click", generatePDF);        
        document.getElementById("quadre").addEventListener("change", preu2);
        document.getElementById("rodes").addEventListener("change", preu2);
        document.getElementById("manillar").addEventListener("change", preu2);
        document.getElementById("pedals").addEventListener("change", preu2);
        document.getElementById("grup").addEventListener("change", preu2);
        document.getElementById("frens").addEventListener("change", preu2);
        document.getElementById("forquilla").addEventListener("change", preu2);
        document.getElementById("tija").addEventListener("change", preu2);
        document.getElementById("cinta").addEventListener("change", preu2);
        document.getElementById("punys").addEventListener("change", preu2);
        document.getElementById("seient").addEventListener("change", preu2);
        document.getElementById("bieles").addEventListener("change", preu2);
        document.getElementById("pneumatics").addEventListener("change", preu2);
        document.getElementById("portabido").addEventListener("change", preu2);
        document.getElementById("portabido2").addEventListener("change", preu2);
        document.getElementById("pedalier").addEventListener("change", preu2);
        document.getElementById("roldanes").addEventListener("change", preu2);
    }
    
    
    
    $("#formulari_a_la_carta").submit(function (e) {
        e.preventDefault();
        enviar();
    });

});


let darkMode = false;
t_road_disc = [{
        nom: "Pinarello F12", //
        preu: 5595,
        marca: "pinarello",
        img: "f12_disc.jpg"
    },
    {
        nom: "Pinarello PRINCE FX", //
        preu: 3915,
        marca: "pinarello",
        img: "prince_disc.jpg"
    },
    {
        nom: "Pinarello Angliru", //
        preu: 1665,
        marca: "pinarello",
        img: "angliru_disc.jpg"
    },
    {
        nom: "Bianchi XR4", //preu quadro amb vision restat -749€ del manillar
        preu: 4041,
        marca: "bianchi",
        img: "xr4_disc.jpg"
    },
    {
        nom: "Bianchi SPECIALISSIMA", //preu quadro amb vision restat -749€ del manillar
        preu: 4590,
        marca: "bianchi",
        img: "specialissima_disc.jpg"
    },
    {
        nom: "Bianchi INFINITO CV", //preu quadro amb vision restat -749€ del manillar
        preu: 3690,
        marca: "bianchi",
        img: "infinito_disc.jpg"
    },
    {
        nom: "Colnago C64", //
        preu: 4637,
        marca: "colnago",
        img: "c64_disc.jpg"
    },
    {
        nom: "Colngao V3 RS", //
        preu: 4379,
        marca: "colnago",
        img: "v3rs_disc.jpg"
    },
    {
        nom: "Scott ADDICT RC ULTIMATE", //
        preu: 3999,
        marca: "scott",
        img: "addict_ultimate.jpg"
    },
    {
        nom: "Scott ADDICT RC PRO", //
        preu: 2849,
        marca: "scott",
        img: "addict_pro.jpg"
    }
];

t_road = [{
        nom: "Pinarello F12",
        preu: 5395,
        info: "*tija incluida",
        marca: "pinarello",
        img: "f12.jpg"
    },
    {
        nom: "Pinarello GAN",
        preu: 2350,
        info: "*tija incluida",
        marca: "pinarello",
        img: "gan.jpg"
    },
    {
        nom: "Pinarello Angliru", //
        preu: 1495,
        info: "*tija incluida",
        marca: "pinarello",
        img: "angliru.jpg"
    },
    {
        nom: "Bianchi XR4", //
        preu: 3690,
        info: "*tija incluida",
        marca: "bianchi",
        img: "xr4.jpg"
    },
    {
        nom: "Bianchi SPECIALISSIMA", //
        preu: 3990,
        info: "",
        marca: "bianchi",
        img: "specialissima.jpg"
    },
    {
        nom: "Colnago C64", //
        preu: 4087,
        info: "*tija incluida",
        marca: "colnago",
        img: "c64.jpg"
    },
    {
        nom: "Colngao V3 RS", //
        preu: 4012,
        info: "*tija incluida",
        marca: "colnago",
        img: "v3rs.jpg"
    }
];

t_gravel = [{
        nom: "Pinarello Grevil",
        preu: 2895,
        info: "*tija incluida",
        marca: "pinarello",
        img: "grevil.jpg"
    },
    {
        nom: "Pinarello Crossista ",
        preu: 2715,
        info: "*tija incluida",
        marca: "pinarello",
        img: "crossista.jpg"
    },
    {
        nom: "Bianchi Zolder Pro", //
        preu: 1990,
        info: "",
        marca: "bianchi",
        img: "zolder.jpg"
    },
    {
        nom: "Bianchi ARCADEX ", //PREU CALCULAT DESCONATANT UNS 600€ DEL GRX
        preu: 2090,
        info: "",
        marca: "bianchi",
        img: "arcadex.jpg"
    },
    {
        nom: "Scott Addict CX RC", //
        preu: 2249,
        info: "*tija incluida",
        marca: "scott",
        img: "addict_cx.jpg"
    },
    {
        nom: "Colnago Prestige", //
        preu: 2190,
        info: "*tija NO incluida",
        marca: "colnago",
        img: "prestige.jpg"
    },
    {
        nom: "Colnago G3X", //
        preu: 2825,
        info: "*tija incluida",
        marca: "colnago",
        img: "g3x.jpg"
    }
];

t_mtb = [{
        nom: "Scott Spark N1NO Canda", //
        preu: 5999,
        info: "*Hoquilla SID ultimate,amortiguador RockShox NUDE ,bielas xx1, frenos level ultimate, manillar fraser ic y tija incluidos ",
        marca: "scott",
        img: "spark_canada.jpg"
    },
    {
        nom: "Scott Spark N1NO SilverFish", //
        preu: 5999,
        info: "*Hoquilla SID ultimate,amortiguador RockShox NUDE ,bielas xx1, frenos lvl ultimate, manillar fraser ic y tija incluidos ",
        marca: "scott",
        img: "spark_silver.jpg"
    },
    {
        nom: "Scott Spark RC Supersonic HMX SL ", //
        preu: 5499,
        info: "*Hoquilla SID ultimate,amortiguador RockShox NUDE ,bielas xx1, frenos lvl ultimate, manillar fraser ic y tija incluidos",
        marca: "scott",
        img: "spark_supersonic.jpg"
    },
    {
        nom: "Scott Scale 910 HMF ", //
        preu: 2349,
        info: "*tija incluidos, horquilla fox sc 32 performance",
        marca: "scott",
        img: "scale_910.jpg"
    },
    {
        nom: "Scott Scale SL", //
        preu: 3499,
        info: "*Manillar fraser ic, tija, horquilla sid sl, frenos sram level ultimate incluidos",
        marca: "scott",
        img: "scale_sl.jpg"
    },
    {
        nom: "Bianchi Methanol FS",
        preu: 3590,
        info: "*Amortiguador Fox Kashima incluido",
        marca: "bianchi",
        img: "methanol_fs.jpg"
    },
    {
        nom: "Bianchi Methanol RS",
        preu: 2590,
        info: "",
        marca: "bianchi",
        img: "methanol_rs.jpg"
    }
];

t_manillars_road_disc = [{
        nom: "MOST TALON ULTRA f12 TICR", //
        preu: 857,
        img: "talon_ultra.jpg"
    },
    {
        nom: "MOST TALON AERO", //
        preu: 718,
        img: "talon_aero.jpg"
    },
    {
        nom: "MOST Jaguar XFC carbon TICR", //
        preu: 668,
        img: "jaguarC_ticr.jpg"
    },
    {
        nom: "MOST Jaguar XA TICR", //
        preu: 173,
        img: "jaguar_ticr.jpg"
    },
    {
        nom: "SYNCROS CRESTON IC SL rc", //
        preu: 579,
        img: "creston.jpg"
    },
    {
        nom: "VISION METRON 5D / 6D ACR Bianchi", //
        preu: 649,
        img: "metron.jpg"
    },
    {
        nom: "Deda Alanera colnago", //
        preu: 847,
        img: "alanera.jpg"
    },
    {
        nom: "Colnago sr9 + ZIPP service course ERGO ", //
        preu: 294,
        img: "sr9_zipp_sc.jpg"
    },
    {
        nom: "Colnago sr9 + ZIPP SL ERGO Carbon ", //
        preu: 477,
        img: "sr9_zipp_sl.jpg"
    },
    {
        nom: "Colnago sr9 + BikeAhead ", //
        preu: 565,
        img: "sr9_bikeahead.jpg"
    },
    {
        nom: "Colnago sr9 + LIGHTWEIGHT RENNBÜGEL ", //
        preu: 537,
        img: "sr9_lightweight.jpg"
    }
];

t_manillars_road = [{
        nom: "MOST TALON ULTRA TICR", //
        preu: 845,
        img: "talon_ultra.jpg"
    },
    {
        nom: "MOST TALON AERO", //
        preu: 718,
        img: "talon_aero.jpg"
    },
    {
        nom: "MOST TALON UD", //
        preu: 411,
        img: "talon_ud.jpg"
    },
    {
        nom: "MOST Jaguar XFC carbon TICR", //
        preu: 668,
        img: "jaguarC_ticr.jpg"
    },
    {
        nom: "MOST Jaguar XA TICR", //
        preu: 173,
        img: "jaguar_ticr.jpg"
    },
    {
        nom: "MOST JAGUAR 3K conjunto",
        preu: 247,
        img: "jaguar.jpg"
    },
    {
        nom: "VISION METRON 5D / 6D  Bianchi", //
        preu: 649,
        img: "metron_rim.jpg"
    },
    {
        nom: "ZIPP SL AERO + SPEED conjunto", //
        preu: 615,
        img: "zipp_sl_aero.jpg"
    },
    {
        nom: "ZIPP SL ERGO + SPEED conjunto", //
        preu: 590,
        img: "zipp_sl_ergo.jpg"
    },
    {
        nom: "ZIPP service course",
        preu: 237,
        img: "zipp_sc.jpg"
    },
    {
        nom: "Black-inc", //
        preu: 690,
        img: "black_inc.jpg"
    },
    {
        nom: "Ritchey solostreem", //
        preu: 475,
        img: "solostreem.jpg"
    },
    {
        nom: "PRO VIVE conjunto", //
        preu: 458,
        img: "pro_vive.jpg"
    },
    {
        nom: "PRO VIBE Alu",
        preu: 198,
        img: "pro_vive_alu.jpg"
    },
    {
        nom: "PRO PLT", //
        preu: 99,
        img: "pro_plt.jpg"
    },
    {
        nom: "Deda Alanera colnago", //
        preu: 847,
        img: "alanera.jpg"
    },
    {
        nom: "Colnago sr9 + ZIPP service course ERGO ", //
        preu: 294,
        img: "sr9_zipp_sc.jpg"
    },
    {
        nom: "Colnago sr9 + ZIPP SL ERGO ", //
        preu: 477,
        img: "sr9_zipp_sl.jpg"
    },
    {
        nom: "Colnago sr9 + BikeAhead ", //
        preu: 565,
        img: "sr9_bikeahead.jpg"
    },
    {
        nom: "Colnago sr9 + LIGHTWEIGHT RENNBÜGEL ", //
        preu: 537,
        img: "sr9_lightweight.jpg"
    },
    {
        nom: "Lightweight BÜGELHALTER + LIGHTWEIGHT RENNBÜGEL", //
        preu: 675,
        img: "lightweight.jpg"
    }
];

t_manillars_gravel = [{
        nom: "MOST TALON Aero",
        preu: 718,
        img: "talon_aero.jpg"
    },
    {
        nom: "MOST TALON UD",
        preu: 411,
        img: "talon_ud.jpg"
    },
    {
        nom: "MOST JAGUAR 3K",
        preu: 247,
        img: "jaguar.jpg"
    },
    {
        nom: "VISION METRON 5D / 6D  Bianchi", //
        preu: 649,
        img: "metron_rim.jpg"
    },
    {
        nom: "ZIPP SL AERO + SPEED",
        preu: 615,
        img: "zipp_sl_aero.jpg"
    },
    {
        nom: "ZIPP SL ERGO + SPEED",
        preu: 590,
        img: "zipp_sl_ergo.jpg"
    },
    {
        nom: "ZIPP service course",
        preu: 237,
        img: "zipp_sc.jpg"
    },
    {
        nom: "Black-inc",
        preu: 690,
        img: "black_inc.jpg"
    },
    {
        nom: "Ritchey solostreem",
        preu: 475,
        img: "solostreem.jpg"
    },
    {
        nom: "PRO VIBE",
        preu: 458,
        img: "pro_vive.jpg"
    },
    {
        nom: "PRO VIBE Alu",
        preu: 198,
        img: "pro_vive_alu.jpg"
    },
    {
        nom: "PRO PLT", //
        preu: 99,
        img: "pro_plt.jpg"
    }
];

t_manillars_mtb = [{
        nom: "Fraser SE SL  iC",
        preu: 474,
        img: "fraser_se.jpg"
    },
    {
        nom: "Fraser SL iC",
        preu: 69,
        img: "fraser.jpg"
    },
    {
        nom: "NewUltimate Carbon + steam",
        preu: 246,
        img: "newultimate.jpg"
    },
    {
        nom: "Tune ",
        preu: 389,
        img: "tune.jpg"
    },
    {
        nom: "Manillar BikeAhead",
        preu: 229,
        img: "bikeahead.jpg"
    },
    {
        nom: "OnOff He",
        preu: 259,
        img: "onoff.jpg"
    }
];

t_rodes_disc = [{
        nom: "Campagnolo Bora One 35 / 50 tubular", //
        preu: 1913,
        img: "bora_one.jpg"
    },
    {
        nom: "Zipp 303 tubular", //
        preu: 2600,
        img: "303.jpg"
    },
    {
        nom: "Dura-Ace c40 tubular", //
        preu: 2620,
        img: "c40.jpg"
    },
    {
        nom: "Fulcrum Speed 40 (cult) tubular", //
        preu: 2548,
        img: "speed40.jpg"
    },
    {
        nom: "Carbon-TI tubular", //
        preu: 1620,
        img: "carbonti.jpg"
    },
    {
        nom: "Bike Ahead Biturbo-Road tubular", //
        preu: 3703,
        img: "biturbo.jpg"
    },
    {
        nom: "Corima MMC DX 32 tubular", //
        preu: 3199,
        img: "mmc_dx.jpg"
    },
    {
        nom: "Corima MMC DX 47 tubular", //
        preu: 3299,
        img: "mmc_dx_47.jpg"
    },
    {
        nom: "Corima WS 47 tubular", //
        preu: 1449,
        img: "ws.jpg"
    },
    {
        nom: "Lightweight Melnstein T 24D tubular", //
        preu: 4079,
        img: "melstein.jpg"
    },
    {
        nom: "Lightweight Melnstein T 24D tubular schwarz", //
        preu: 4479,
        img: "melstein.jpg"
    },
    {
        nom: "ZIPP 303s tubeless / cubierta", //
        preu: 1100,
        img: "303s.jpg"
    },
    {
        nom: "ZIPP 303 Firecrest tubeless / cubierta", //
        preu: 1800,
        img: "303.jpg"
    },
    {
        nom: "Campagnolo BORA ONE 35 / 50 cubierta", //
        preu: 2140,
        img: "bora_one.jpg"
    },
    {
        nom: "Campagnolo WTO 33 / 45 / 60  tubeless / cubierta", //
        preu: 2168,
        img: "wto.jpg"
    },
    {
        nom: "Campagnolo Zonda tubeless / cubierta", //
        preu: 605,
        img: "zonda.jpg"
    },
    {
        nom: "Dura-Ace c40  tubeless / cubierta", //
        preu: 2430,
        img: "c40.jpg"
    },
    {
        nom: "DT-1100  tubeless / cubierta", //
        preu: 2388,
        img: "dt1100.jpg"
    },
    {
        nom: "DT-1400  tubeless / cubierta", //
        preu: 1958,
        img: "dt1400.jpg"
    },
    {
        nom: "DT-1400 dicut tubeless / cubierta", //
        preu: 827,
        img: "dt1400d.jpg"
    },
    {
        nom: "DT-1600 tubeless / cubierta", //
        preu: 559,
        img: "dt1600.jpg"
    },
    {
        nom: "DT-1800 tubeless / cubierta", //
        preu: 338,
        img: "dt1800.jpg"
    },
    {
        nom: "Fulcrum Wind 40  tubeless / cubierta", //
        preu: 1226,
        img: "wind_40.jpg"
    },
    {
        nom: "Fulcrum Speed 40 (usb)  tubeless / cubierta", //
        preu: 2045,
        img: "speed40.jpg"
    },
    {
        nom: "Carbon-TI  tubeless / cubierta", //
        preu: 1700,
        img: "carbonti.jpg"
    },
    {
        nom: "Bike Ahead Biturbo-Road tubeless / cubierta", //
        preu: 3703,
        img: "biturbo.jpg"
    },
    {
        nom: "TUNE SCHWARZBRENNER 45 2.0  tubeless / cubierta", //
        preu: 2099,
        img: "tune.jpg"
    },
    {
        nom: "Syncros Capital 1.0 tubeless / cubierta", //
        preu: 1399,
        img: "capital.jpg"
    },
    {
        nom: "Corima MCC 32 cubierta", //
        preu: 3549,
        img: "mcc_32.jpg"
    },
    {
        nom: "Corima MCC 47 cubierta", //
        preu: 3649,
        img: "mcc_47.jpg"
    },
    {
        nom: "Corima WS cubierta", //
        preu: 1749,
        img: "ws.jpg"
    }
];

t_rodes_road = [{
        nom: "Corima MCC 32 / 47 tubular", //
        preu: 2999,
        img: "mcc_r.jpg"
    },
    {
        nom: "Corima WS+ 47 tubular", //
        preu: 1849,
        img: "ws+_r.jpg"
    },
    {
        nom: "Corima WS 47 tubular", //
        preu: 1249,
        img: "ws_r.jpg"
    },
    {
        nom: "Dura-Ace c40 tubular", //
        preu: 2600,
        img: "c40_rt.jpg"
    },
    {
        nom: "Campagnolo Bora One 35 / 50 tubular", //
        preu: 1880,
        img: "bora_one_r.jpg"
    },
    {
        nom: "Campagnolo Bora Ultra 35 / 50 tubular", //
        preu: 2830,
        img: "bora_ultra.jpg"
    },
    {
        nom: "Lightweight Meilenstein T 24E tubular", //
        preu: 3582,
        img: "melstein_r.jpg"
    },
    {
        nom: "Lightweight Meilenstein T 24E tubular schwarz", //
        preu: 3982,
        img: "melstein_r.jpg"
    },
    {
        nom: "Corima MCC 47 cubierta", //
        preu: 3299,
        img: "mcc_r.jpg"
    },
    {
        nom: "Corima WS+ 47 cubierta", //
        preu: 2149,
        img: "ws+_r.jpg"
    },
    {
        nom: "Corima WS cubierta", //
        preu: 1549,
        img: "ws_r.jpg"
    },
    {
        nom: "Dura-Ace c40 tubeless / cubierta", //
        preu: 1715,
        img: "c40_r.jpg"
    },
    {
        nom: "DT-1100 tubeless / cubierta", //
        preu: 2388,
        img: "dt1100_r.jpg"
    },
    {
        nom: "DT-1400 spline tubeless / cubierta", //
        preu: 1958,
        img: "dt1400_r.jpg"
    },
    {
        nom: "Fulcrum Wind 40 tubeless / cubierta", //
        preu: 1199,
        img: "wind40_r.jpg"
    },
    {
        nom: "Fulcrum Speed 40 (usb) tubeless / cubierta", //
        preu: 2045,
        img: "speed40_r.jpg"
    },
    {
        nom: "Campagnolo BORA ONE 35 / 50 cubierta", //
        preu: 2115,
        img: "bora_one_r.jpg"
    },
    {
        nom: "Campagnolo Bora Ultra 35 / 50 cubierta", //
        preu: 3070,
        img: "bora_ultra.jpg"
    },
    {
        nom: "Campagnolo WTO 33 / 45 / 60 tubeless / cubierta", //
        preu: 2164,
        img: "wto_r.jpg"
    },
    {
        nom: "Campagnolo Zonda", //
        preu: 498,
        img: "zonda_r.jpg"
    },
    {
        nom: "Zipp 303 firecrest tubeless / cubierta", //
        preu: 2200,
        img: "303_r.jpg"
    }
];

t_rodes_gravel = [{
        nom: "Dura-Ace c40 ", //
        preu: 2430,
        img: "c40.jpg"
    },
    {
        nom: "DT GRC 1400", //
        preu: 1958,
        img: "grc1400.jpg"
    },
    {
        nom: "DT GR 1600", //
        preu: 558,
        img: "gr1600.jpg"
    },
    {
        nom: "DT CRC 1100", //
        preu: 2389,
        img: "crc1100.jpg"
    },
    {
        nom: "DT CRC 1400 Spline", //
        preu: 1958,
        img: "crc1400.jpg"
    },
    {
        nom: "DT CR 1600", //
        preu: 558,
        img: "cr1600.jpg"
    },
    {
        nom: "Syncros capital x40", //
        preu: 1399,
        img: "capital_x40.jpg"
    },
    {
        nom: "Bike Ahead Biturbo-Cross", //
        preu: 3703,
        img: "biturbo.jpg"
    },
    {
        nom: "CORIMA G30.5 ", //
        preu: 2099,
        img: "g30.jpg"
    },
    {
        nom: "Fulcrum Racing Zero carbon", //
        preu: 1990,
        img: "zeroC.jpg"
    },
    {
        nom: "Fulcrum Racing Zero", //
        preu: 1189,
        img: "zero.jpg"
    },
    {
        nom: "Fulcrum Rapid Red 3 ", //
        preu: 613,
        img: "rr3.jpg"
    },
    {
        nom: "Fulcrum Rapid 5 ", //
        preu: 380,
        img: "rr5.jpg"
    }
];

t_rodes_mtb = [{
        nom: "Syncros Silverton SL", //
        preu: 3799,
        img: "silverton_sl.jpg"
    },
    {
        nom: "Syncros Silverton 1.0", //
        preu: 1399,
        img: "silverton.jpg"
    },
    {
        nom: "Tune BLACKBURNER", //
        preu: 2198,
        img: "tune_btt.jpg"
    },

    {
        nom: "Carbon-Ti", //
        preu: 1700,
        img: "carbonti_btt.jpg"
    },
    {
        nom: "Bike Ahead Biturbo", //
        preu: 3399,
        img: "biturbo_btt.jpg"
    },
    {
        nom: "DT XRC 1200", //
        preu: 2138,
        img: "xrc1200.jpg"
    },
    {
        nom: "DT XRC 1500 carbon", //
        preu: 1499,
        img: "xrc1500.jpg"
    },
    {
        nom: "DT XR 1501 spline", //
        preu: 968,
        img: "xr1501.jpg"
    },
    {
        nom: "DT X 1700 spline", //
        preu: 628,
        img: "x1700.jpg"
    }
];

t_tijes_road = [{
        nom: "New Ultimate Alu",
        preu: 109,
        img: "t_newultimate.jpg"
    },
    {
        nom: "New Ultimate Car",
        preu: 206,
        img: "t_newultimateC.jpg"
    },
    {
        nom: "OnOFF He Carbon",
        preu: 139,
        img: "t_onoff.jpg"
    },
    {
        nom: "TUNE ",
        preu: 229,
        img: "t_tune.jpg"
    },
    {
        nom: "ENVE SEATPOST",
        preu: 275,
        img: "t_enve.jpg"
    },
    {
        nom: "LIGHTWEIGHT LEISTUNGSTRÄGER",
        preu: 308,
        img: "t_lightweight.jpg"
    },
    {
        nom: "Bike Ahead TheSeatPost",
        preu: 299,
        img: "theseatpost.jpg"
    },
];

t_cinta = [{
        nom: "SUPACAZ",
        preu: 43,
        img:"supacaz.jpg"
    },
    {
        nom: "LIZZARD",
        preu: 34,
        img:"lizzard.jpg"
    },
    {
        nom: "MOST UltraGrip EVO",
        preu: 25,
        img:"ultragrip.jpg"
    },
    {
        nom: "MOST UltraLight",
        preu: 20,
        img:"bernal.jpg"
    },
    {
        nom: "Pro",
        preu: 14,
        img:"pro.jpg"
    },
    {
        nom: "Bianchi Drops",
        preu: 25,
        img:"drops.jpg"
    }
];

t_punys = [{
        nom: "ESIGRIPS",
        preu: 17,
        img:"esi.jpg"
    },
    {
        nom: "RITCHEY WCS",
        preu: 12,
        img:"ritchey.jpg"
    },
    {
        nom: "MOMUM",
        preu: 17,
        img:"momum.jpg"
    }
];

t_seient = [{
        nom: "tune SKYRACER", //
        preu: 349,
        img: "skyracer.jpg"
    },
    {
        nom: "tune SPEEDNEEDLE", //
        preu: 225,
        img: "speedneedle.jpg"
    },
    {
        nom: "syncros BELCARRA", //
        preu: 159,
        img: "belcarra.jpg"
    },
    {
        nom: "san marco ASPIDE CARBON", //
        preu: 189,
        img: "aspide.jpg"
    },
    {
        nom: "Most Lynx carbon", //
        preu: 196,
        img: "lynxC.jpg"
    },
    {
        nom: "Most Lynx Manganeso", //
        preu: 74,
        img: "lynx.jpg"
    },
    {
        nom: "selle italia SLR CARBON KIT", //
        preu: 219,
        img: "slr.jpg"
    },
    {
        nom: "selle italia SLR C59", //
        preu: 474,
        img: "c59.jpg"
    },
    {
        nom: "FIZIK 00 EVO ", //
        preu: 350,
        img: "00evo.jpg"
    },
    {
        nom: "FIZIK R1", //
        preu: 199,
        img: "r1.jpg"
    },
    {
        nom: "FIZIK ADAPTIVE ANTARES VS EVO 00", //
        preu: 299,
        img: "adaptative_00.jpg"
    },
    {
        nom: "FIZIK ADAPTIVE ANTARES VS EVO R1", //
        preu: 299,
        img: "adaptative_r1.jpg"
    },
    {
        nom: "FIZIK ADAPTIVE ANTARES VS EVO R3", //
        preu: 249,
        img: "adaptative_r3.jpg"
    }

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
        preu: 2692,
        img: "duraacedi2.jpg"
    },
    {
        nom: "Shimano DURA-ACE", //
        preu: 1312,
        img: "duraace.jpg"
    },
    {
        nom: "Shimano ULTEGRA Di2", //
        preu: 1440,
        img: "ultegradi2.jpg"
    },
    {
        nom: "Shimano ULTEGRA", //
        preu: 629,
        img: "ultegra.jpg"
    },
    {
        nom: "Sram RED AXS 12v", //
        preu: 2820,
        img: "redaxs.jpg"
    },
    {
        nom: "Sram FROCE AXS 12v", //
        preu: 2165,
        img: "forceaxs.jpg"
    },
    {
        nom: "Campagnolo Super Record EPS", // 
        preu: 3632,
        img: "superrecordeps.jpg"
    },
    {
        nom: "Campagnolo Super Record", //frens direct mount o dual pivot
        preu: 1968,
        img: "superrecord.jpg"
    },
    {
        nom: "Campagnolo Record", //frens direct mount
        preu: 1561,
        img: "record.jpg"
    },
    {
        nom: "Campagnolo Chorus", // frens direct mount
        preu: 997,
        img: "chorus.jpg"
    }
];

t_grup_disc = [{ //sense bieles
        nom: "Shimano DURA-ACE Di2", //
        preu: 2795,
        img: "duraacedi2.jpg"
    },
    {
        nom: "Shimano DURA-ACE", //
        preu: 1861,
        img: "duraace.jpg"
    },
    {
        nom: "Shimano ULTEGRA Di2", //
        preu: 1703,
        img: "ultegradi2.jpg"
    },
    {
        nom: "Shimano ULTEGRA", //
        preu: 895,
        img: "ultegra.jpg"
    },
    {
        nom: "Sram RED AXS 12v", //
        preu: 2920,
        img: "redaxs.jpg"
    },
    {
        nom: "Sram FROCE AXS 12v", //
        preu: 2165,
        img: "forceaxs.jpg"
    },
    {
        nom: "Campagnolo Super Record EPS", //disc 140 + 160
        preu: 3952,
        img: "superrecordeps.jpg"
    },
    {
        nom: "Campagnolo Super Record", //disc 160 + 160
        preu: 2256,
        img: "superrecord.jpg"
    },
    {
        nom: "Campagnolo Record", //disc 160 + 160
        preu: 1877,
        img: "record.jpg"
    },
    {
        nom: "Campagnolo Chorus", //disc 160 + 160
        preu: 1435,
        img: "chorus.jpg"
    }

];

t_grup_gravel = [{
        nom: "GRX Di2 1x", //
        preu: 1760,
        img: "grxdi2.jpg"
    },
    {
        nom: "GRX Di2 2x", //
        preu: 2166,
        img: "grxdi2.jpg"
    },
    {
        nom: "GRX 800 1x", //
        preu: 987,
        img: "grx800.jpg"
    },
    {
        nom: "GRX 800 2x", //
        preu: 1106,
        img: "grx800.jpg"
    },
    {
        nom: "GRX 600 1x", //
        preu: 875,
        img: "grx600.jpg"
    },
    {
        nom: "GRX 600 2x", //
        preu: 953,
        img: "grx600.jpg"
    },
    {
        nom: "RED AXS 2x", //
        preu: 2920,
        img: "redaxs.jpg"
    },
    {
        nom: "RED AXS 1x", //
        preu: 2470,
        img: "redaxs.jpg"
    },
    {
        nom: "FORCE AXS 2x wide", //
        preu: 2165,
        img: "forceaxs.jpg"
    },
    {
        nom: "FROCE AXS 1x wide", //
        preu: 1765,
        img: "forceaxs.jpg"
    },
    {
        nom: "RED AXS 1x *eagle 10-52*", //
        preu: 2715,
        img: "xx1axs.jpg"
    },
    {
        nom: "FORCE AXS 1x *eagle gx/xx1 10-52*", //
        preu: 2000,
        img: "xx1axs.jpg"
    },
    {
        nom: "Campagnolo Ekar", //
        preu: 1696,
        img: "ekar.jpg"
    },

];

t_grup_mtb = [{
        nom: "XX1 AXS", //
        preu: 1573,
        img: "xx1axs.jpg"
    },
    {
        nom: "X01 AXS", //
        preu: 1506,
        img: "x01axs.jpg"
    },
    {
        nom: "XX1", //
        preu: 1048,
        img: "xx1.jpg"
    },
    {
        nom: "X01", //
        preu: 881,
        img: "x01.jpg"
    },
    {
        nom: "GX", //
        preu: 449,
        img: "gx.jpg"
    },
    {
        nom: "XTR", //
        preu: 718,
        img: "xtr.jpg"
    },
    {
        nom: "XT", //
        preu: 337,
        img: "xt.jpg"
    }
];

t_frens = [{
        nom: "LEVEL ULTIMATE", //
        preu: 714,
        img: "ult.jpg"
    },
    {
        nom: "LEVEL TLM", //
        preu: 468,
        img: "tlm.jpg"
    },
    {
        nom: "XTR", //
        preu: 549,
        img: "xtr.jpg"
    },
    {
        nom: "XT", //
        preu: 313,
        img: "xt.jpg"
    }

];

t_pedals_road = [{
        nom: "Dura-Ace", //
        preu: 249,
        img: "duraace.jpg"
    },
    {
        nom: "Ultegra", //
        preu: 140,
        img: "ultegra.jpg"
    },
    {
        nom: "105", //
        preu: 110,
        img: "105.jpg"
    },
    {
        nom: "LOOK TITANIUM", //
        preu: 285,
        img: "lookti.jpg"
    },
    {
        nom: "LOOK CARBON", //
        preu: 160,
        img: "lookcarbon.jpg"
    },
    {
        nom: "LOOK keo 2 max", //
        preu: 80,
        img: "keo.jpg"
    },
    {
        nom: "XPRESSO 15", //
        preu: 450,
        img: "xpresso15.jpg"
    },
    {
        nom: "XPRESSO 12", //
        preu: 290,
        img: "xpresso12.jpg"
    },
    {
        nom: "XPRESSO 10", //
        preu: 160,
        img: "xpresso10.jpg"
    }
];

t_pedals_mtb = [{
        nom: "XTR", //
        preu: 135,
        img: "xtr.jpg"
    },
    {
        nom: "XT", //
        preu: 88,
        img: "xt.jpg"
    },
    {
        nom: "Look Carbon Ti", //
        preu: 199,
        img: "lookcarbonti.jpg"
    },
    {
        nom: "Look Carbon", //
        preu: 110,
        img: "lookcarbonx.jpg"
    },
    {
        nom: "Look Race", //
        preu: 70,
        img: "lookrace.jpg"
    },
];

t_tijes_mtb = [{
        nom: "New Ultimate Alu", //
        preu: 109,
        img: "t_newultimate.jpg"
    },
    {
        nom: "New Ultimate Car", //
        preu: 206,
        img: "t_newultimateC.jpg"
    },
    {
        nom: "OnOFF He Carbon", //
        preu: 139,
        img: "t_onoff.jpg"
    },
    {
        nom: "TUNE", //
        preu: 229,
        img: "t_tune.jpg"
    },
    {
        nom: "Bike Ahead TheSeatPost",
        preu: 299,
        img: "theseatpost.jpg"
    },
    {
        nom: "OnOff Peak", //
        preu: 60,
        img: "peak.jpg"
    },
    {
        nom: "Telescopica REVERB AXS", //
        preu: 800,
        img: "reverb.jpg"
    },
    {
        nom: "Telescopica Transfer kashima", //
        preu: 489,
        img: "transfer.jpg"
    },
    {
        nom: "Telescopica Koryak", //
        preu: 240,
        img: "koryak.jpg"
    },
    {
        nom: "Telescopica Syncros Telescopica", //
        preu: 229,
        img: "syncros.jpg"
    },
    {
        nom: "Telescopica DT 232 one", //
        preu: 498,
        img: "232.jpg"
    },
];

t_forquilla = [{
        nom: "Fox 32 kashima", //
        preu: 1279,
        img: "fox32.jpg"
    },
    {
        nom: "Fox 34 kashima", //
        preu: 1369,
        img: "fox34.jpg"
    },
    {
        nom: "Fox 32 anoditzat", //
        preu: 959,
        img: "fox32a.jpg"
    },
    {
        nom: "Fox 34 anoditzat", //
        preu: 1059,
        img: "fox34a.jpg"
    },
    {
        nom: "SID 35 ultimate", //
        preu: 1059,
        img: "sid35.jpg"
    },
    {
        nom: "SID 32 sl ultimate ", //
        preu: 949,
        img: "sidsl.jpg"
    }
];


t_portabido = [{
        nom: "Tune WASSERTRÄGER 2.0", //
        preu: 56,
        img: "tune.jpg"
    },
    {
        nom: "Tune RECHTSTRÄGER", //
        preu: 56,
        img: "tune2.jpg"
    },
    {
        nom: "Most wings carbon 1k", //
        preu: 52,
        img: "most.jpg"
    },
    {
        nom: "Syncros Carbon 1.0", //
        preu: 65,
        img: "syncros.jpg"
    },
    {
        nom: "Syncros Tailor MB cage multiHerramientas", //
        preu: 55,
        img: "syncrostools.jpg"
    },
    {
        nom: "Elite Vico carbon", //
        preu: 28,
        img: "vico.jpg"
    },
    {
        nom: "Elite Rocko carbon", //
        preu: 30,
        img: "rocko.jpg"
    },
    {
        nom: "LIGHTWEIGHT Edelhelfer", //
        preu: 92,
        img: "lightweight.jpg"
    },
    {
        nom: "SUPACAZ FLY CAGEZ CARBON", //
        preu: 59,
        img: "supacaz.jpg"
    },
    {
        nom: "Bianchi Custom Race", //
        preu: 18,
        img: "bianchi_custom.jpg"
    },
    {
        nom: "Bianchi Vico Carbon", //
        preu: 35,
        img: "bianchi_vico.jpg"
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
        preu: 495,
        img: "duraace.jpg"
    },
    {
        nom: "Ultegra", //
        preu: 238,
        img: "ultegra.jpg"
    },
    {
        nom: "Red AXS", //
        preu: 700,
        img: "red.jpg"
    },
    {
        nom: "Force AXS", //
        preu: 435,
        img: "force.jpg"
    },
    {
        nom: "Campagnolo Super Record", //
        preu: 962,
        img: "superrecord.jpg"
    },
    {
        nom: "Campagnolo Record", //
        preu: 536,
        img: "record.jpg"
    },
    {
        nom: "Campagnolo Chorus", //
        preu: 384,
        img: "chorus.jpg"
    },
    //+potenciometre
    {
        nom: "Dura-Ace Potenciometro", //
        preu: 1366,
        img: "duraacep.jpg"
    },
    {
        nom: "Stages Dura-Ace LR", //
        preu: 999,
        img: "stages_duraace_lr.jpg"
    },
    {
        nom: "Stages Ultegra Potenciometro LR", //
        preu: 749,
        img: "stages_ultegra_lr.jpg"
    },
    {
        nom: "Stages Ultegra Potenciometro L", //
        preu: 638,
        img: "stages_ultegra_l.jpg"
    },
    {
        nom: "Quarq Red AXS", //
        preu: 1200,
        img: "quarq_red.jpg"
    },
    {
        nom: "Quarq Force AXS", //
        preu: 1034,
        img: "quarq_force.jpg"
    },
    {
        nom: "Stages Campagnolo Super Record L", //
        preu: 1861,
        img: "stages_superrecord.jpg"
    },
    {
        nom: "Stages Campagnolo Record L", //
        preu: 1235,
        img: "stages_record.jpg"
    }
];

t_bieles_gravel = [{
        nom: "GRX 810 ", //
        preu: 241,
        img: "grx800.jpg"
    },
    {
        nom: "GRX 600", //
        preu: 122,
        img: "grx600.jpg"
    },
    {
        nom: "Red AXS", //
        preu: 700,
        img: "red.jpg"
    },
    {
        nom: "Force AXS", //
        preu: 435,
        img: "force.jpg"
    },
    {
        nom: "Camapgnolo Ekar", //
        preu: 0,
        img: "ekar.jpg"
    },
    {
        nom: "XX1", //
        preu: 571,
        img: "xx1.jpg"
    },
    {
        nom: "X01", //
        preu: 435,
        img: "x01.jpg"
    },
    {
        nom: "GX", //
        preu: 150,
        img: "gx.jpg"
    },
    //+potenciometre
    {
        nom: "Stages GRX 810 L", //
        preu: 640,
        img: "stages_grx_800.jpg"
    },
    {
        nom: "Stages GRX 600 L", //
        preu: 521,
        img: "stages_grx_600.jpg"
    },
    {
        nom: "Quarq Red AXS", //
        preu: 1200,
        img: "quarq_red.jpg"
    },
    {
        nom: "Quarq Force AXS", //
        preu: 1034,
        img: "quarq_force.jpg"
    },
    {
        nom: "Quarq xx1", //
        preu: 1071,
        img: "quarq_xx1.jpg"
    }
];

t_bieles_mtb = [{
        nom: "XTR", //
        preu: 487,
        img: "xtr.jpg"
    },
    {
        nom: "XT", //
        preu: 185,
        img: "xt.jpg"
    },
    {
        nom: "XX1", //
        preu: 571,
        img: "xx1.jpg"
    },
    {
        nom: "X01", //
        preu: 435,
        img: "x01.jpg"
    },
    {
        nom: "GX", //
        preu: 150,
        img: "gx.jpg"
    },
    //+potenciometre
    {
        nom: "Stages XTR LR", //
        preu: 1199,
        img: "stages_xtr_lr.jpg"
    },
    {
        nom: "Stages XTR L", //
        preu: 1016,
        img: "stages_xtr_l.jpg"
    },
    {
        nom: "Stages XT LR", //
        preu: 749,
        img: "stages_xt_lr.jpg"
    },
    {
        nom: "Stages XT L", //
        preu: 584,
        img: "stages_xt_l.jpg"
    },
    {
        nom: "Quarq xx1", //
        preu: 1071,
        img: "quarq_xx1.jpg"
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
        carregar_image(["c64_rim_wi.jpg", "c64_rim_2.jpg", "f12_rim.jpg", "xr4_rim.jpg", "f12_rim_2.jpg", "specialissima.jpg", "c64_rim.jpg", "specialissima_2.jpg", "xr4_rim_2.jpg"])

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
        carregar_image(["grevil_2021.jpg", "grevil.jpg", "grevil2.jpg", "zolder.jpg"])
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
        carregar_image(["scale_nino.jpg", "n1no.jpg", "spark_ultimate.jpg", "methanol_cv.jpg", "methanol_fs.jpg"])
    }

    blank();
};

function blank(){
    $("#img_quadre").attr('src', "./images/configuracions/quadres/blank.jpg");
    $("#img_manillar").attr('src', "./images/configuracions/manillars/blank.jpg");
    $("#img_rodes").attr('src', "./images/configuracions/rodes/blank.jpg");
    $("#img_grup").attr('src', "./images/configuracions/grups/blank.jpg");
    $("#img_bieles").attr('src', "./images/configuracions/bieles/blank.jpg");
    $("#img_frens").attr('src', "./images/configuracions/frens/blank.jpg");
    $("#img_forquilla").attr('src', "./images/configuracions/forquilles/blank.jpg");
    $("#img_seients").attr('src', "./images/configuracions/seients/blank.jpg");
    $("#img_tija").attr('src', "./images/configuracions/tijes/blank.jpg");
    $("#img_pedals").attr('src', "./images/configuracions/pedals/blank.jpg");
    $("#img_cinta").attr('src', "./images/configuracions/cinta/blank.jpg");
    $("#img_punys").attr('src', "./images/configuracions/punys/blank.jpg");
    $("#img_portabidons").attr('src', "./images/configuracions/portabidons/blank.jpg");
    $("#img_portabidons2").attr('src', "./images/configuracions/portabidons/blank.jpg");

    
}

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
        cambiQuadre();
    } else {
        $("#img_quadre").attr('src', "./images/configuracions/quadres/blank.jpg");
    }

    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate" >Manillar: <span class="font-weight-bold text-truncate">' + JSON.parse($("#manillar").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiManillar();
    } else {
        $("#img_manillar").attr('src', "./images/configuracions/manillars/blank.jpg");
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Ruedas: <span class="font-weight-bold text-truncate">' + JSON.parse($("#rodes").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiRodes();
    } else {
        $("#img_rodes").attr('src', "./images/configuracions/rodes/blank.jpg");
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Grupo: <span class="font-weight-bold text-truncate">' + JSON.parse($("#grup").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiGrup();
    } else {
        $("#img_grup").attr('src', "./images/configuracions/grups/blank.jpg");
    }
    if ($("#bieles").val() != "0") {
        preu = JSON.parse($("#bieles").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Bielas: <span class="font-weight-bold text-truncate">' + JSON.parse($("#bieles").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiBieles();
    } else {
        $("#img_bieles").attr('src', "./images/configuracions/bieles/blank.jpg");
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Frenos: <span class="font-weight-bold text-truncate">' + JSON.parse($("#frens").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiFrens();
    } else {
        $("#img_frens").attr('src', "./images/configuracions/frens/blank.jpg");
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Horquilla: <span class="font-weight-bold text-truncate">' + JSON.parse($("#forquilla").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiForquilla();
    } else {
        $("#img_forquilla").attr('src', "./images/configuracions/forquilles/blank.jpg");
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Sillin: <span class="font-weight-bold text-truncate">' + JSON.parse($("#seient").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiSeient();
    } else {
        $("#img_seients").attr('src', "./images/configuracions/seients/blank.jpg");
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Tija: <span class="font-weight-bold text-truncate">' + JSON.parse($("#tija").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiTija();
    } else {
        $("#img_tija").attr('src', "./images/configuracions/tijes/blank.jpg");
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Pedales: <span class="font-weight-bold text-truncate">' + JSON.parse($("#pedals").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiPedals();
    } else {
        $("#img_pedals").attr('src', "./images/configuracions/pedals/blank.jpg");
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Cinta: <span class="font-weight-bold text-truncate">' + JSON.parse($("#cinta").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiCinta();
    }
    else {
        $("#img_cinta").attr('src', "./images/configuracions/cinta/blank.jpg");
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
        preu = JSON.parse($("#punys").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Puños: <span class="font-weight-bold text-truncate">' + JSON.parse($("#punys").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiPunys();
    }
    else {
        $("#img_punys").attr('src', "./images/configuracions/punys/blank.jpg");
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
        cambiPortabido();
    } else {
        $("#img_portabidons").attr('src', "./images/configuracions/portabidons/blank.jpg");
    }
    if ($("#portabido2").val() != "0") {
        preu = JSON.parse($("#portabido2").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Segundo Portabidon: <span class="font-weight-bold text-truncate">' + JSON.parse($("#portabido2").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiPortabido2();
    } else {
        $("#img_portabidons2").attr('src', "./images/configuracions/portabidons/blank.jpg");
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

async function cambiQuadre() {
    text = "./images/configuracions/quadres/" + JSON.parse($("#quadre").val()).img;
    $("#img_quadre").attr('src', text);
}

async function cambiManillar() {
    text = "./images/configuracions/manillars/" + JSON.parse($("#manillar").val()).img;
    $("#img_manillar").attr('src', text);
}

async function cambiRodes() {
    text = "./images/configuracions/rodes/" + JSON.parse($("#rodes").val()).img;
    $("#img_rodes").attr('src', text);
}

async function cambiTija() {
    text = "./images/configuracions/tijes/" + JSON.parse($("#tija").val()).img;
    $("#img_tija").attr('src', text);
}

async function cambiSeient() {
    text = "./images/configuracions/seients/" + JSON.parse($("#seient").val()).img;
    $("#img_seient").attr('src', text);
}

async function cambiGrup() {
    text = "./images/configuracions/grups/" + JSON.parse($("#grup").val()).img;
    $("#img_grup").attr('src', text);
}

async function cambiFrens() {
    text = "./images/configuracions/frens/" + JSON.parse($("#frens").val()).img;
    $("#img_frens").attr('src', text);
}

async function cambiForquilla() {
    text = "./images/configuracions/forquilles/" + JSON.parse($("#forquilla").val()).img;
    $("#img_forquilla").attr('src', text);
}

async function cambiPedals() {
    text = "./images/configuracions/pedals/" + JSON.parse($("#pedals").val()).img;
    $("#img_pedals").attr('src', text);
}

async function cambiBieles() {
    text = "./images/configuracions/bieles/" + JSON.parse($("#bieles").val()).img;
    $("#img_bieles").attr('src', text);
}

async function cambiPortabido() {
    text = "./images/configuracions/portabidons/" + JSON.parse($("#portabido").val()).img;
    $("#img_portabidons").attr('src', text);
}

async function cambiPortabido2() {
    text = "./images/configuracions/portabidons/" + JSON.parse($("#portabido2").val()).img;
    $("#img_portabidons2").attr('src', text);
}

async function cambiCinta() {
    text = "./images/configuracions/cinta/" + JSON.parse($("#cinta").val()).img;
    $("#img_cinta").attr('src', text);
}

async function cambiPunys() {
    text = "./images/configuracions/punys/" + JSON.parse($("#punys").val()).img;
    $("#img_punys").attr('src', text);
}



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
    correus=["comercial@muntbikes.com"]
    Email.send({
        SecureToken: "e73157c6-e8cb-4301-8f40-838dc3f6e2b4",
        To: correus,
        From: "configurador.muntbikes@gmail.com",
        Subject:  $("#nom").val()+' '+$("#cognom").val() +" - Configuracio "+ quadre + "",
        Body: configuracio()
    }).then(function (message) {
        alert('Correo Enviado')
    });

}



function configuracio() {
    let modalitat;
    if ($("#modalitat").val() != null) {
        modalitat = $("#modalitat").val()
    }
    bold1="<span style='font-weight: bold;'>"
    bold2="</span>"
    tx = '<html><body><style>table, th, td {border: 1px solid black;border-collapse: collapse;}th, td {padding: 15px;}</style>'
    tx += '<table style="width:100%">';
    tx += "<tr style='font-size:150%'><td>Nom: " + $("#nom").val() +
        "</td></tr><tr style='font-size:150%'><td>Cognom: " +
        $("#cognom").val() +
        "</td></tr><tr style='font-size:150%'><td>Email: " +
        $("#mail").val() +
        "</td></tr><tr style='font-size:150%'><td>Telefon:" +
        $("#tel").val() +
        "</td></tr><tr style='font-size:150%'><td>Comentaris: " +
        $("#comentaris").val() +
        "</td></tr><tr style='font-size:150%'><td>Estatura: " +
        $("#estatura").val() +
        "</td></tr>";



    tx += "<tr><td></td></tr>"
    tx += "<tr><td>Modalitat: "+bold1 + modalitat;
    if ($("#quadre").val() && $("#quadre").val() != null) {
    tx +=bold2+ "</td></tr><tr><td>Quadre: "+bold1   
        tx += JSON.parse($("#quadre").val()).nom+bold2;
        
    }
    if ($("#rodes").val() && $("#rodes").val() != "0") {
    tx += "</td></tr><tr><td>Rodes: "+bold1    
        tx += JSON.parse($("#rodes").val()).nom+bold2
    }
    if ($("#grup").val() && $("#grup").val() != "0") {
    tx += "</td></tr><tr><td>Grup: "+bold1    
        tx += JSON.parse($("#grup").val()).nom+bold2
    }
    if ($("#bieles").val() && $("#bieles").val() != "0") {
    tx += "</td></tr><tr><td>Bieles: "+bold1    
        tx += JSON.parse($("#bieles").val()).nom+bold2
    }
    if ($("#manillar").val() && $("#manillar").val() != "0") {
    tx += "</td></tr><tr><td>Manillar: "+bold1    
        tx += JSON.parse($("#manillar").val()).nom+bold2
    }
    if ($("#seient").val() && $("#seient").val() != "0") {
    tx += "</td></tr><tr><td>Seient: "+bold1    
        tx += JSON.parse($("#seient").val()).nom+bold2
    }
    if ($("#pneumatics").val() && $("#pneumatics").val() != "0") {
    tx += "</td></tr><tr><td>Pneumatics: "+bold1    
        tx += JSON.parse($("#pneumatics").val()).nom+bold2
    }
    if ($("#pedals").val() && $("#pedals").val() != "0") {
    tx += "</td></tr><tr><td>Pedals: "+bold1    
        tx += JSON.parse($("#pedals").val()).nom+bold2
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
    tx += "</td></tr><tr><td>Frens: "+bold1    
        tx += JSON.parse($("#frens").val()).nom+bold2
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
    tx += "</td></tr><tr><td>Tija: "+bold1    
        tx += JSON.parse($("#tija").val()).nom+bold2
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
    tx += "</td></tr><tr><td>Cinta: "+bold1   
        tx += JSON.parse($("#cinta").val()).nom+bold2
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
    tx += "</td></tr><tr><td>Punys: "+bold1    
        tx += JSON.parse($("#punys").val()).nom+bold2
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
    tx += "</td></tr><tr><td>Forquilla: "+bold1    
        tx += JSON.parse($("#forquilla").val()).nom+bold2
    }
    if ($("#portabido").val() && $("#portabido").val() != "0") {
    tx += "</td></tr><tr><td>Portabido: "+bold1    
        tx += JSON.parse($("#portabido").val()).nom+bold2
    }
    if ($("#portabido2").val() && $("#portabido2").val() != "0") {
    tx += "</td></tr><tr><td>Portabido 2: "+bold1    
        tx += JSON.parse($("#portabido2").val()).nom+bold2
    }
    if ($("#pedalier").val() && $("#pedalier").val() != "0") {
    tx += "</td></tr><tr><td>Pedalier: "+bold1    
        tx += JSON.parse($("#pedalier").val()).nom+bold2
    }
    if ($("#roldanes").val() && $("#roldanes").val() != "0") {    
        tx += "</td></tr><tr><td>Roldanes: "+bold1    
        tx += JSON.parse($("#roldanes").val()).nom+bold2
    }

    tx += "</td></tr><tr><td>Preu: "+bold1    
        tx += $("#total").html()+'€'+bold2

    tx += "</td></tr>"
    tx += '</table>'
    tx += "<br><br>"
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
    if(x=="2011d48f3f831aefd45f9f015cbbc40d"){
        $("#print").append(print());
    }
    else{
        $("#print").append(print2());
    }
    
    $("#invoice").show()
    const element = document.getElementById("invoice");
    date = new Date();
    var opt = {
        filename: 'configuracion_muntbikes' + date.getTime() + '.pdf'
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

function preu2() {
    $("#desglos").empty();
    let total = 0;
    let part1 = '<div class="d-flex justify-content-start flex-row px-0 py-1 m-0 l">';
    let part2 = "";
    let part5 = "</div>"

    if ($("#quadre").val() != "0") {
        preu = JSON.parse($("#quadre").val()).preu;
        part2 = '<div class=" pr-0 mr-2">Cuadro: </div><div class="font-weight-bold text-truncate">' + JSON.parse($("#quadre").val()).nom + '</div>';
        $("#desglos").append(part1 + part2 + part5);
        total += preu;
        cambiQuadre();
    } else {
        $("#img_quadre").attr('src', "./images/configuracions/quadres/blank.jpg");
    }

    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class=" pr-0 mr-2" >Manillar: </div><div class="font-weight-bold text-truncate">' + JSON.parse($("#manillar").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiManillar();
    } else {
        $("#img_manillar").attr('src', "./images/configuracions/manillars/blank.jpg");
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class=" pr-0 mr-2">Ruedas: </div><div class="font-weight-bold text-truncate">'+ JSON.parse($("#rodes").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiRodes();
    } else {
        $("#img_rodes").attr('src', "./images/configuracions/rodes/blank.jpg");
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class=" pr-0 mr-2">Grupo: </div><div class="font-weight-bold text-truncate">'+JSON.parse($("#grup").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiGrup();
    } else {
        $("#img_grup").attr('src', "./images/configuracions/grups/blank.jpg");
    }
    if ($("#bieles").val() != "0") {
        preu = JSON.parse($("#bieles").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Bielas: </div><div class="font-weight-bold text-truncate">'+ JSON.parse($("#bieles").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiBieles();
    } else {
        $("#img_bieles").attr('src', "./images/configuracions/bieles/blank.jpg");
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class=" pr-0 mr-2 ">Frenos: </div><div class="font-weight-bold text-truncate">'+ JSON.parse($("#frens").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiFrens();
    } else {
        $("#img_frens").attr('src', "./images/configuracions/frens/blank.jpg");
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class=" pr-0  mr-2">Horquilla: </div><div class="font-weight-bold text-truncate">'+ JSON.parse($("#forquilla").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiForquilla();
    } else {
        $("#img_forquilla").attr('src', "./images/configuracions/forquilles/blank.jpg");
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Sillin: </div><div class="font-weight-bold text-truncate">' +JSON.parse($("#seient").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiSeient();
    } else {
        $("#img_seients").attr('src', "./images/configuracions/seients/blank.jpg");
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Tija: </div><div class="font-weight-bold text-truncate">' + JSON.parse($("#tija").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiTija();
    } else {
        $("#img_tija").attr('src', "./images/configuracions/tijes/blank.jpg");
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Pedales: </div><div class="font-weight-bold text-truncate">'+ JSON.parse($("#pedals").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiPedals();
    } else {
        $("#img_pedals").attr('src', "./images/configuracions/pedals/blank.jpg");
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Cinta: </div><div class="font-weight-bold text-truncate">'+JSON.parse($("#cinta").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiCinta();
    }
    else {
        $("#img_cinta").attr('src', "./images/configuracions/cinta/blank.jpg");
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
        preu = JSON.parse($("#punys").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Puños: </div><div class="font-weight-bold text-truncate">'+JSON.parse($("#punys").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiPunys();
    }
    else {
        $("#img_punys").attr('src', "./images/configuracions/punys/blank.jpg");
    }
    if ($("#pneumatics").val() != "0") {
        preu = JSON.parse($("#pneumatics").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Neumaticos: </div><div class="font-weight-bold text-truncate">'+ JSON.parse($("#pneumatics").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
    }
    if ($("#portabido").val() != "0") {
        preu = JSON.parse($("#portabido").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Portabidon: </div><div class="font-weight-bold text-truncate">' + JSON.parse($("#portabido").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiPortabido();
    } else {
        $("#img_portabidons").attr('src', "./images/configuracions/portabidons/blank.jpg");
    }
    if ($("#portabido2").val() != "0") {
        preu = JSON.parse($("#portabido2").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Segundo Portabidon: </div><div class="font-weight-bold text-truncate">' + JSON.parse($("#portabido2").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
        cambiPortabido2();
    } else {
        $("#img_portabidons2").attr('src', "./images/configuracions/portabidons/blank.jpg");
    }
    if ($("#pedalier").val() && $("#pedalier").val() != "0") {
        preu = JSON.parse($("#pedalier").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Pedalier: </div><div class="font-weight-bold text-truncate">' + JSON.parse($("#pedalier").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
    }
    if ($("#roldanes").val() && $("#roldanes").val() != "0") {
        preu = JSON.parse($("#roldanes").val()).preu;
        part2 = '<div class=" pr-0  mr-2">Roldanas: </div><div class="font-weight-bold text-truncate">' + JSON.parse($("#roldanes").val()).nom + '</div>'
        $("#desglos").append(part1 + part2  + part5);
        total += preu;
    }



    $("#total").text(total);
    $('#card-desglose').show();

};

function print2() {
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

    date = new Date()
    date_html = '<p class="mb-0 p2">Configuracion hecha el ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '</p>';
    date.setMonth(date.getMonth() + 1);
    date_html_fi = '<p class="mb-0 p2">Oferta valida hasta el ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '</p> <br>';
    $("#data").append(date_html);
    $("#data").append(date_html_fi);
    modalitat_html = '<p class="h6">Modalidad:<span class="h5 float-right"> ' + modalitat + '</span></p><div class="col-12 border border-bottom border-dark"></div><br>';
    $("#print").append(modalitat_html);

    if ($("#quadre").val() != "0") {
        preu = JSON.parse($("#quadre").val()).preu;
        part2 = '<div class="col-12  pr-0 text-truncate">Cuadro: <span class="font-weight-bold ">' + JSON.parse($("#quadre").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }

    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate" >Manillar: <span class="font-weight-bold ">' + JSON.parse($("#manillar").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Ruedas: <span class="font-weight-bold ">' + JSON.parse($("#rodes").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Grupo: <span class="font-weight-bold ">' + JSON.parse($("#grup").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#bieles").val() != "0") {
        preu = JSON.parse($("#bieles").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Bielas: <span class="font-weight-bold">' + JSON.parse($("#bieles").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Frenos: <span class="font-weight-bold ">' + JSON.parse($("#frens").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class="col-12 pr-0 text-truncate">Horquilla: <span class="font-weight-bold ">' + JSON.parse($("#forquilla").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Sillin: <span class="font-weight-bold ">' + JSON.parse($("#seient").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Tija: <span class="font-weight-bold ">' + JSON.parse($("#tija").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Pedales: <span class="font-weight-bold ">' + JSON.parse($("#pedals").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Cinta: <span class="font-weight-bold ">' + JSON.parse($("#cinta").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
        preu = JSON.parse($("#punys").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Puños: <span class="font-weight-bold ">' + JSON.parse($("#punys").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#pneumatics").val() != "0") {
        preu = JSON.parse($("#pneumatics").val()).preu;
        part2 = '<div class="col-12 text-truncate">Neumaticos: <span class="font-weight-bold ">' + JSON.parse($("#pneumatics").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#portabido").val() != "0") {
        preu = JSON.parse($("#portabido").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Portabidon: <span class="font-weight-bold ">' + JSON.parse($("#portabido").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#portabido2").val() != "0") {
        preu = JSON.parse($("#portabido2").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Segundo Portabidon: <span class="font-weight-bold ">' + JSON.parse($("#portabido2").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#pedalier").val() && $("#pedalier").val() != "0") {
        preu = JSON.parse($("#pedalier").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Pedalier: <span class="font-weight-bold ">' + JSON.parse($("#pedalier").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#roldanes").val() && $("#roldanes").val() != "0") {
        preu = JSON.parse($("#roldanes").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Roldanas: <span class="font-weight-bold ">' + JSON.parse($("#roldanes").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
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