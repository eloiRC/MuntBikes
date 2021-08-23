//window.location.replace("https://configurador-muntbikes.web.app");
dades_clinet = false;

let x;

t_opcions=["Modalidad","Cuadro","Manillar","Ruedas"]
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

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
    document.getElementById("modalitat").addEventListener("change", modalitat);
    document.getElementById("mensualitats").addEventListener("change", maxim24);

    

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

function maxim24(){
    if ($("#mensualitats").val()>24) {
        $("#mensualitats").val(24);
        $("#mensualitats").addClass("error");
    }
    else{
        $("#mensualitats").parent().removeClass("error");
    }
}


let darkMode = false;
t_road_disc = [{
        nom: "Pinarello F12", //
        preu: 5595,
        brand: "Pinarello",
        img: "f12_disc.jpg"
    },
    {
        nom: "Pinarello PRINCE FX", //
        preu: 3915,
        brand: "Pinarello",
        img: "prince_disc.jpg"
    },
    {
        nom: "Pinarello Angliru", //
        preu: 1665,
        brand: "Pinarello",
        img: "angliru_disc.jpg"
    },
    {
        nom: "Bianchi XR4", //preu quadro amb vision restat -649€ del manillar
        preu: 4516,
        brand: "Bianchi",
        img: "xr4_disc.jpg"
    },
    {
        nom: "Bianchi SPECIALISSIMA", //preu quadro restat fsa potencia manillar carbon
        preu: 4912,
        brand: "Bianchi",
        img: "specialissima_disc.jpg"
    },
    {
        nom: "Bianchi INFINITO CV", //preu quadro amb vision restat -649€ del manillar
        preu: 3709,
        brand: "Bianchi",
        img: "infinito_disc.jpg"
    },
    {
        nom: "Colnago C64", //
        preu: 4637,
        brand: "Colnago",
        img: "c64_disc.jpg"
    },
    {
        nom: "Colnago V3 RS", //
        preu: 4379,
        brand: "Colnago",
        img: "v3rs_disc.jpg"
    },
    {
        nom: "Scott ADDICT RC SL ULTIMATE", //
        preu: 4499,
        brand: "Scott",
        img: "addict_sl_22.jpg"
    },
    {
        nom: "Scott ADDICT RC SL SUPERSONIC", //
        preu: 4499,
        brand: "Scott",
        img: "addict_super_22.jpg"
    },
    {
        nom: "Scott ADDICT RC PRO", //
        preu: 2999,
        brand: "Scott",
        img: "addict_pro_22.jpg"
    },
    {
        nom: "De Rosa SK PINIFARINA", //
        preu: 4290,
        brand: "Derosa",
        img: "sk_pinifarina.jpg"
    },
    {
        nom: "De Rosa MERAK", 
        preu: 4355,
        brand: "Derosa",
        img: "merak.jpg"
    },
    {
        nom: "De Rosa Protos", 
        preu: 4655,
        brand: "Derosa",
        img: "protos_disc.jpg"
    }
];

t_road = [{
        nom: "Pinarello F12",
        preu: 5395,
        info: "*tija incluida",
        brand: "Pinarello",
        img: "f12.jpg"
    },
    {
        nom: "Pinarello GAN",
        preu: 2350,
        info: "*tija incluida",
        brand: "Pinarello",
        img: "gan.jpg"
    },
    {
        nom: "Pinarello Angliru", //
        preu: 1495,
        info: "*tija incluida",
        brand: "Pinarello",
        img: "angliru.jpg"
    },
    {
        nom: "Bianchi XR4", //
        preu: 3959,
        info: "*tija incluida",
        brand: "Bianchi",
        img: "xr4.jpg"
    },
    {
        nom: "Bianchi SPECIALISSIMA 2020", //
        preu: 3990,
        info: "",
        brand: "Bianchi",
        img: "specialissima.jpg"
    },
    {
        nom: "Colnago C64", //
        preu: 4087,
        info: "*tija incluida",
        brand: "Colnago",
        img: "c64.jpg"
    },
    {
        nom: "Colnago V3 RS", //
        preu: 4012,
        info: "*tija incluida",
        brand: "Colnago",
        img: "v3rs.jpg"
    },
    {
        nom: "De Rosa Protos", 
        preu: 4565,
        info: "*tija incluida",
        brand: "Derosa",
        img: "protos.jpg"
    },
    {
        nom: "De Rosa nuovo classico", 
        preu: 3235,
        brand: "Derosa",
        img: "nuovoclassico.jpg"
    }
];

t_gravel = [{
        nom: "Pinarello Grevil",
        preu: 2895,
        info: "*tija incluida",
        brand: "Pinarello",
        img: "grevil.jpg"
    },
    {
        nom: "Pinarello Crossista ",
        preu: 2715,
        info: "*tija incluida",
        brand: "Pinarello",
        img: "crossista.jpg"
    },
    {
        nom: "Bianchi Zolder Pro", //
        preu: 2387,
        info: "",
        brand: "Bianchi",
        img: "zolder.jpg"
    },
    {
        nom: "Bianchi ARCADEX ", //PREU CALCULAT DESCONATANT UNS 600€ DEL GRX
        preu: 2500,
        info: "",
        brand: "Bianchi",
        img: "arcadex.jpg"
    },
    {
        nom: "Scott Addict GRAVEL TUNED HMX", //
        preu: 2249,
        info: "*tija incluida",
        brand: "Scott",
        img: "addict_gravel.jpg"
    },
    {
        nom: "Colnago Prestige", //
        preu: 2190,
        info: "*tija NO incluida",
        brand: "Colnago",
        img: "prestige.jpg"
    },
    {
        nom: "Colnago G3X", //
        preu: 2825,
        info: "*tija incluida",
        brand: "Colnago",
        img: "g3x.jpg"
    },
    {
        nom: "De Rosa Gravel", 
        preu: 1977,
        brand: "Derosa",
        img: "derosa_gravel.jpg"
    }
];

t_mtb = [
    {
        nom: "Scott Spark RC HMX SL ", //
        preu: 5999,
        info: "*Hoquilla FOX 34 SC kashima,amortiguador FOX NUDE 5 ,manillar fraser ic y tija incluidos",
        brand: "Scott",
        img: "spark_sl_22.jpg"
    },
    {
        nom: "Scott Spark RC WC HMX", //
        preu: 4999,
        info: "*Hoquilla SID ultimate RACE DAY ,amortiguador RockShox NUDE 5, manillar fraser ic, tija y sillin syncros incluidos ",
        brand: "Scott",
        img: "spark_wc_22.jpg"
    },
    {
        nom: "Scott Spark RC SUPERSONIC HMX", //
        preu: 4999,
        info: "*Hoquilla SID ultimate RACE DAY ,amortiguador RockShox NUDE 5, manillar fraser ic, tija incluidos ",
        brand: "Scott",
        img: "spark_super_22.jpg"
    },
    {
        nom: "Scott Spark 900 TUNED HMX", //
        preu: 4999,
        info: "*Hoquilla FOX factory 34 kashima,amortiguador FOX NUDE 5, manillar fraser ic",
        brand: "Scott",
        img: "spark_tuned_22.jpg"
    },
    {
        nom: "Scott Scale 900 HMX ", //
        preu: 3499,
        info: "*tija incluido, horquilla SID SL ULTIMATE RACE DAY, Fraser IC",
        brand: "Scott",
        img: "scale_wc_22.jpg"
    },
    {
        nom: "Bianchi Methanol FS",
        preu: 3300,
        info: "*sin horquilla y sin amortiguador",
        brand: "Bianchi",
        img: "methanol_fs.jpg"
    },
    {
        nom: "Bianchi Methanol RS",
        preu: 3590,
        info: "",
        brand: "Bianchi",
        img: "methanol_rs.jpg"
    }
];

t_manillars_road_disc = [{
        nom: "TALON ULTRA f12 TICR", //
        preu: 857,
        img: "talon_ultra.jpg",
        brand:"Most"
    },
    {
        nom: "TALON AERO", //
        preu: 718,
        img: "talon_aero.jpg",
        brand:"Most"
    },
    {
        nom: "Jaguar XFC carbon TICR", //
        preu: 668,
        img: "jaguarC_ticr.jpg",
        brand:"Most"
    },
    {
        nom: "Jaguar XA TICR", //
        preu: 173,
        img: "jaguar_ticr.jpg",
        brand:"Most"
    },
    {
        nom: "CRESTON IC SL rc", //
        preu: 599,
        img: "creston.jpg",
        brand:"Syncros"
    },
    {
        nom: "Conjunto K-force + NS ACR SPECIALISSIMA", //
        preu: 429,
        img: "FSA_ACR.jpg",
        brand:"FSA"
    },
    {
        nom: "METRON 5D / 6D ACR", //
        preu: 649,
        img: "metron.jpg",
        brand:"Vision"
    },
    {
        nom: "METRON 5D / 6D ACR DeROSA", //
        preu: 540,
        img: "metron.jpg",
        brand:"Vision"
    },
    {
        nom: "METRON 5D / 6D ACR DeROSA Pintado en color del cuadro", //
        preu: 680,
        img: "metron.jpg",
        brand:"Vision"
    },
    {
        nom: "Alanera colnago", //
        preu: 847,
        img: "alanera.jpg",
        brand:"Deda"
    },
    {
        nom: "Colnago sr9 + ZIPP service course ERGO ", //
        preu: 294,
        img: "sr9_zipp_sc.jpg",
        brand:"Colnago - Zipp"
    },
    {
        nom: "Colnago sr9 + ZIPP SL ERGO Carbon ", //
        preu: 477,
        img: "sr9_zipp_sl.jpg",
        brand:"Colnago - Zipp"
    },
    {
        nom: "Colnago sr9 + BikeAhead ", //
        preu: 565,
        img: "sr9_bikeahead.jpg",
        brand:"Colnago - Bike Ahead"
    },
    {
        nom: "Colnago sr9 + LIGHTWEIGHT RENNBÜGEL ", //
        preu: 537,
        img: "sr9_lightweight.jpg",
        brand:"Colnago - LightWeight"
    }
];

t_manillars_road = [{
        nom: "TALON ULTRA TICR", //
        preu: 845,
        img: "talon_ultra.jpg",
        brand:"Most"
    },
    {
        nom: "TALON AERO", //
        preu: 718,
        img: "talon_aero.jpg",
        brand:"Most"
    },
    {
        nom: "TALON UD", //
        preu: 411,
        img: "talon_ud.jpg",
        brand:"Most"
    },
    {
        nom: "Jaguar XFC carbon TICR", //
        preu: 668,
        img: "jaguarC_ticr.jpg",
        brand:"Most"
    },
    {
        nom: "Jaguar XA TICR", //
        preu: 173,
        img: "jaguar_ticr.jpg",
        brand:"Most"
    },
    {
        nom: "JAGUAR 3K conjunto",
        preu: 247,
        img: "jaguar.jpg",
        brand:"Most"
    },
    
    {
        nom: "METRON 5D / 6D  Bianchi", //
        preu: 649,
        img: "metron_rim.jpg",
        brand:"Vision"
    },
    {
        nom: "SL AERO + SPEED conjunto", //
        preu: 615,
        img: "zipp_sl_aero.jpg",
        brand:"Zipp"
    },
    {
        nom: "SL ERGO + SPEED conjunto", //
        preu: 590,
        img: "zipp_sl_ergo.jpg",
        brand:"Zipp"
    },
    {
        nom: "Service course",
        preu: 237,
        img: "zipp_sc.jpg",
        brand:"Zipp"
    },
    {
        nom: "BarStem", //
        preu: 690,
        img: "black_inc.jpg",
        brand:"Black-inc"
    },
    {
        nom: "Solostreem", //
        preu: 475,
        img: "solostreem.jpg",
        brand:"Ritchey"
    },
    {
        nom: "VIVE conjunto", //
        preu: 458,
        img: "pro_vive.jpg",
        brand:"Pro"
    },
    {
        nom: "VIBE Alu",
        preu: 198,
        img: "pro_vive_alu.jpg",
        brand:"Pro"
    },
    {
        nom: "PLT", //
        preu: 99,
        img: "pro_plt.jpg",
        brand:"Pro"
    },
    {
        nom: "Alanera colnago", //
        preu: 847,
        img: "alanera.jpg",
        brand:"Deda"
    },
    {
        nom: "Colnago sr9 + ZIPP service course ERGO ", //
        preu: 294,
        img: "sr9_zipp_sc.jpg",
        brand:"Colnago - Zipp"
    },
    {
        nom: "Colnago sr9 + ZIPP SL ERGO ", //
        preu: 477,
        img: "sr9_zipp_sl.jpg",
        brand:"Colnago - Zipp"
    },
    {
        nom: "Colnago sr9 + BikeAhead ", //
        preu: 565,
        img: "sr9_bikeahead.jpg",
        brand:"Colnago - Bike Ahead"
    },
    {
        nom: "Colnago sr9 + LIGHTWEIGHT RENNBÜGEL ", //
        preu: 537,
        img: "sr9_lightweight.jpg",
        brand:"Colnago - LightWeight"
    },
    {
        nom: "Lightweight BÜGELHALTER + LIGHTWEIGHT RENNBÜGEL", //
        preu: 675,
        img: "lightweight.jpg",
        brand:"Colnago - Lightweight"
    }
];

t_manillars_gravel = [{
        nom: "MOST TALON Aero",
        preu: 718,
        img: "talon_aero.jpg",
        brand:"Most"
    },
    {
        nom: "MOST TALON UD",
        preu: 411,
        img: "talon_ud.jpg",
        brand:"Most"
    },
    {
        nom: "MOST JAGUAR 3K",
        preu: 247,
        img: "jaguar.jpg",
        brand:"Most"
    },
    {
        nom: "METRON 5D / 6D  Bianchi", //
        preu: 649,
        img: "metron_rim.jpg",
        brand:"Vision"
    },
    {
        nom: "SYNCROS CRESTON IC SL X", //
        preu: 599,
        img: "creston.jpg",
        brand:"Syncros"
    },
    {
        nom: "SL AERO + SPEED",
        preu: 615,
        img: "zipp_sl_aero.jpg",
        brand:"Zipp"
    },
    {
        nom: "SL ERGO + SPEED",
        preu: 590,
        img: "zipp_sl_ergo.jpg",
        brand:"Zipp"
    },
    {
        nom: "Service course",
        preu: 237,
        img: "zipp_sc.jpg",
        brand:"Zipp"
    },
    {
        nom: "BarStem",
        preu: 690,
        img: "black_inc.jpg",
        brand:"Black-inc"
    },
    {
        nom: "Solostreem",
        preu: 475,
        img: "solostreem.jpg",
        brand:"Ritchey"
    },
    {
        nom: "VIBE",
        preu: 458,
        img: "pro_vive.jpg",
        brand:"Pro"
    },
    {
        nom: "VIBE Alu",
        preu: 198,
        img: "pro_vive_alu.jpg",
        brand:"Pro"
    },
    {
        nom: "PLT", //
        preu: 99,
        img: "pro_plt.jpg",
        brand:"Pro"
    }
];

t_manillars_mtb = [
    {
        nom: "Fraser SL iC WC",
        preu: 349,
        img: "fraser.jpg",
        brand:"Syncros"
    },
    {
        nom: "NewUltimate Carbon + steam",
        preu: 246,
        img: "newultimate.jpg",
        brand:"New Ultimate"
    },
    {
        nom: "Turnstange Flatbar 2.0 + Geiles Teil 4.0",
        preu: 389,
        img: "tune.jpg",
        brand:"Tune"
    },
    {
        nom: "THE FLATBAR manillar",
        preu: 229,
        img: "bikeahead.jpg",
        brand:"Bike Ahead"
    },
    {
        nom: "He",
        preu: 259,
        img: "onoff.jpg",
        brand:"OnOff"
    }
];

t_rodes_disc = [{
        nom: "Bora One 35 / 50 tubular", //
        preu: 1913,
        img: "bora_one.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "BORA ONE 35 / 50 cubierta", //
        preu: 2140,
        img: "bora_one.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "WTO ULTRA 33 / 45 / 60  tubeless / cubierta", //
        preu: 3150,
        img: "WTO_ULTRA.JPG",
        brand:"Campagnolo"
    },
    {
        nom: "WTO 33 / 45 / 60  tubeless / cubierta", //
        preu: 2168,
        img: "wto.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "SHAMAL CARBON  tubeless / cubierta", //
        preu: 1299,
        img: "SHAMAL_CARBON.JPG",
        brand:"Campagnolo"
    },
    {
        nom: "ZONDA tubeless / cubierta", //
        preu: 605,
        img: "zonda.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Speed 40 (cult) tubular", //
        preu: 2548,
        img: "speed40.jpg",
        brand:"Fulcrum"
    },
    {
        nom: "Wind 40  tubeless / cubierta", //
        preu: 1226,
        img: "wind.jpg",
        brand:"Fulcrum"
    },
    {
        nom: "Speed 40 (usb)  tubeless / cubierta", //
        preu: 2045,
        img: "speed40.jpg",
        brand:"Fulcrum"
    },
    {
        nom: "Peak 4550 (tune) tubular", //
        preu: 3050,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (carbon-ti) tubular", //
        preu: 3200,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (dt-240) tubular", //
        preu: 3300,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (dt-180) tubular", //
        preu: 3950,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Grid 4540 (tune) cubierta", //
        preu: 2850,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (tune) cubierta", //
        preu: 3050,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (carbon-ti) cubierta", //
        preu: 3200,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (dt-240) cubierta", //
        preu: 3300,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (dt-180) cubierta", //
        preu: 3950,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "MMC DX 32 tubular", //
        preu: 3199,
        img: "mmc_dx.jpg",
        brand:"Corima"
    },
    {
        nom: "MMC DX 47 tubular", //
        preu: 3299,
        img: "mmc_dx_47.jpg",
        brand:"Corima"
    },
    {
        nom: "WS 47 tubular", //
        preu: 1449,
        img: "ws.jpg",
        brand:"Corima"
    },
    {
        nom: "MCC 32 cubierta", //
        preu: 3549,
        img: "mcc_dx_32.jpg",
        brand:"Corima"
    },
    {
        nom: "MCC 47 cubierta", //
        preu: 3649,
        img: "mcc_dx.jpg",
        brand:"Corima",
    },
    {
        nom: "WS cubierta", //
        preu: 1749,
        img: "ws.jpg",
        brand:"Corima"
    },
    {
        nom: "Dura-Ace c40 tubular", //
        preu: 2620,
        img: "c40.jpg",
        brand:"Shimano"
    },
    {
        nom: "Dura-Ace c40  tubeless / cubierta", //
        preu: 2430,
        img: "c40.jpg",
        brand:"Shimano"
    },
    {
        nom: "Melnstein T 24D tubular", //
        preu: 4079,
        img: "melstein.jpg",
        brand:"LightWeight"
    },
    {
        nom: "Melnstein T 24D tubular schwarz", //
        preu: 4479,
        img: "melstein.jpg",
        brand:"LightWeight"
    },
    {
        nom: "Melnstein C 24D Cubierta", //
        preu: 4703,
        img: "melstein.jpg",
        brand:"LightWeight"
    },
    {
        nom: "Melnstein C 24D Cubireta schwarz", //
        preu: 5105,
        img: "melstein.jpg",
        brand:"LightWeight"
    },
    {
        nom: "CRC-1100 T Tubular", //
        preu: 2388,
        img: "dt1100_r.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "ARC-1100 / PRC-1100  tubeless / cubierta", //
        preu: 2388,
        img: "dt1100.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "ARC-1400 / PRC-1400  tubeless / cubierta", //
        preu: 1958,
        img: "dt1400.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "PR-1400 dicut tubeless / cubierta", //
        preu: 827,
        img: "dt1400d.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "PR-1600 tubeless / cubierta", //
        preu: 559,
        img: "dt1600.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "P-1800 tubeless / cubierta", //
        preu: 338,
        img: "dt1800.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "303 Firecrest tubeless / cubierta", //
        preu: 1800,
        img: "303.jpg",
        brand:"Zipp"
    },
    {
        nom: "303 tubular", //
        preu: 2600,
        img: "303.jpg",
        brand:"Zipp"
    },
    {
        nom: "404 tubeless / cubierta", //
        preu: 1800,
        img: "404.jpg",
        brand:"Zipp"
    },    
    {
        nom: "303s tubeless / cubierta", //
        preu: 1100,
        img: "303s.jpg",
        brand:"Zipp"
    },    
    {
        nom: "SpeedCarbon tubular", //
        preu: 1620,
        img: "carbonti.jpg",
        brand:"Carbon-ti"
    },
    {
        nom: "SpeedCarbon  tubeless / cubierta", //
        preu: 1700,
        img: "carbonti.jpg",
        brand:"Carbon-ti"
    },
    {
        nom: "Biturbo-Road tubular", //
        preu: 3703,
        img: "biturbo.jpg",
        brand:"Bike Ahead"
    },
    {
        nom: "Biturbo-Road tubeless / cubierta", //
        preu: 3703,
        img: "biturbo.jpg",
        brand:"Bike Ahead"
    },
    {
        nom: "SCHWARZBRENNER 45 2.0  tubeless / cubierta", //
        preu: 2099,
        img: "tune.jpg",
        brand:"Tune"
    },
    {
        nom: "Capital 1.0 tubeless / cubierta", //
        preu: 1299,
        img: "capital.jpg",
        brand:"Syncros"
    },
   
];

t_rodes_road = [
    {
        nom: "Bora One 35 / 50 tubular", //
        preu: 1880,
        img: "bora_one_r.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Bora Ultra 35 / 50 tubular", //
        preu: 2830,
        img: "bora_ultra.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Bora One 35 / 50 cubierta", //
        preu: 2115,
        img: "bora_one_r.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Bora Ultra 35 / 50 cubierta", //
        preu: 3070,
        img: "bora_ultra.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "WTO 33 / 45 / 60 tubeless / cubierta", //
        preu: 2164,
        img: "wto_r.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Zonda Cubierta", //
        preu: 498,
        img: "zonda_r.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Wind 40 tubeless / cubierta", //
        preu: 1199,
        img: "wind40_r.jpg",
        brand:"Fulcrum"
    },
    {
        nom: "Speed 40 (usb) tubeless / cubierta", //
        preu: 2045,
        img: "speed40_r.jpg",
        brand:"Fulcrum"
    },
    {
        nom: "Peak 4550 (tune) tubular", //
        preu: 3050,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (carbon-ti) tubular", //
        preu: 3200,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Grid 4540 (tune) cubierta", //
        preu: 2850,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (tune) cubierta", //
        preu: 3050,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "Peak 4550 (carbon-ti) cubierta", //
        preu: 3200,
        img: "peak4550.jpg",
        brand:"Princeton"
    },
    {
        nom: "MCC 32 / 47 tubular", //
        preu: 2999,
        img: "mcc_r.jpg",
        brand:"Corima"
    },
    {
        nom: "WS+ 47 tubular", //
        preu: 1849,
        img: "ws+_r.jpg",
        brand:"Corima"
    },
    {
        nom: "WS 47 tubular", //
        preu: 1249,
        img: "ws_r.jpg",
        brand:"Corima"
    },
    {
        nom: "MCC 47 cubierta", //
        preu: 3299,
        img: "mcc_r.jpg",
        brand:"Corima"
    },
    {
        nom: "WS+ 47 cubierta", //
        preu: 2149,
        img: "ws+_r.jpg",
        brand:"Corima"
    },
    {
        nom: "WS cubierta", //
        preu: 1549,
        img: "ws_r.jpg",
        brand:"Corima"
    },
    {
        nom: "Dura-Ace c40 tubular", //
        preu: 2600,
        img: "c40_rt.jpg",
        brand:"Shimano"
    },
    {
        nom: "Dura-Ace c40 tubeless / cubierta", //
        preu: 1715,
        img: "c40_r.jpg",
        brand:"Shimano"
    },
    {
        nom: "Meilenstein T 24E tubular", //
        preu: 3587,
        img: "melstein_r.jpg",
        brand:"LightWeight"
    },
    {
        nom: "Meilenstein T 24E tubular schwarz", //
        preu: 3982,
        img: "melstein_r.jpg",
        brand:"LightWeight"
    },
    {
        nom: "Meilenstein C 24E Cubierta", //
        preu: 4269,
        img: "melstein_r.jpg",
        brand:"LightWeight"
    },
    {
        nom: "ARC-1100 / PRC-1100 tubeless / cubierta", //
        preu: 2388,
        img: "dt1100_r.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "PR-1400 dicut tubeless / cubierta", //
        preu: 1958,
        img: "dt1400_r.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "303 firecrest tubeless / cubierta", //
        preu: 2200,
        img: "303_r.jpg",
        brand:"Zipp"
    },
];

t_rodes_gravel = [{
        nom: "Dura-Ace c40 ", //
        preu: 2430,
        img: "c40.jpg",
        brand:"Shimano"
    },
    {
        nom: "GRC 1400", //
        preu: 1958,
        img: "grc1400.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "GR 1600", //
        preu: 558,
        img: "gr1600.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "CRC 1100", //
        preu: 2389,
        img: "crc1100.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "CRC 1400 Spline", //
        preu: 1958,
        img: "crc1400.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "CR 1600", //
        preu: 558,
        img: "cr1600.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "Capital x40", //
        preu: 1299,
        img: "capital_x40.jpg",
        brand:"Syncros"
    },
    {
        nom: "Biturbo-Cross", //
        preu: 3703,
        img: "biturbo.jpg",
        brand:"Bike Ahead"
    },
    {
        nom: "G30.5 ", //
        preu: 2099,
        img: "g30.jpg",
        brand:"Corima"
    },
    {
        nom: "Racing Zero carbon", //
        preu: 1990,
        img: "zeroC.jpg",
        brand:"Fulcrum"
    },
    {
        nom: "Racing Zero", //
        preu: 1189,
        img: "zero.jpg",
        brand:"Fulcrum"
    },
    {
        nom: "Rapid Red 3 ", //
        preu: 613,
        img: "rr3.jpg",
        brand:"Fulcrum"
    },
    {
        nom: "Rapid 5 ", //
        preu: 380,
        img: "rr5.jpg",
        brand:"Fulcrum"
    }
];

t_rodes_mtb = [{
        nom: "Silverton SL", //
        preu: 3799,
        img: "silverton_sl.jpg",
        brand:"Syncros"
    },
    {
        nom: "Silverton 1.0 s", //
        preu: 1999,
        img: "silverton1s.jpg",
        brand:"Syncros"
    },
    {
        nom: "Silverton 1.0", //
        preu: 1499,
        img: "silverton1.jpg",
        brand:"Syncros"
    },
    {
        nom: "BLACKBURNER", //
        preu: 2198,
        img: "tune_btt.jpg",
        brand:"Tune"
    },
    {
        nom: "MountainCarbon", //
        preu: 1700,
        img: "carbonti_btt.jpg",
        brand:"Carbon-Ti"
    },
    {
        nom: "Biturbo", //
        preu: 3399,
        img: "biturbo_btt.jpg",
        brand:"Bike Ahead"
    },
    {
        nom: "XRC 1200", //
        preu: 2138,
        img: "xrc1200.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "XRC 1500 carbon", //
        preu: 1499,
        img: "xrc1500.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "XR 1501 spline", //
        preu: 968,
        img: "xr1501.jpg",
        brand:"DT-SWISS"
    },
    {
        nom: "X 1700 spline", //
        preu: 628,
        img: "x1700.jpg",
        brand:"DT-SWISS"
    }
];

t_tijes_road = [{
        nom: "Aluminio",
        preu: 109,
        img: "t_newultimate.jpg",
        brand:"New Ultimate"
    },
    {
        nom: "Carbon",
        preu: 206,
        img: "t_newultimateC.jpg",
        brand:"New Ultimate"
    },
    {
        nom: "OnOFF He Carbon",
        preu: 139,
        img: "t_onoff.jpg",
        brand:"OnOff"
    },
    {
        nom: "Leichtes Stück",
        preu: 229,
        img: "t_tune.jpg",
        brand:"Tune"
    },
    {
        nom: "SEATPOST",
        preu: 275,
        img: "t_enve.jpg",
        brand:"Enve"
    },
    {
        nom: "LEISTUNGSTRÄGER",
        preu: 308,
        img: "t_lightweight.jpg",
        brand:"LIGHTWEIGHT"
    },
    {
        nom: "TheSeatPost",
        preu: 299,
        img: "theseatpost.jpg",
        brand:"Bike Ahead"
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
        nom: "SKYRACER", //
        preu: 349,
        img: "skyracer.jpg",
        brand:"Tune"
    },
    {
        nom: "SPEEDNEEDLE", //
        preu: 225,
        img: "speedneedle.jpg",
        brand:"Tune"
    },
    {
        nom: "BELCARRA R SL", //
        preu: 249,
        img: "belcarraSL.jpg",
        brand:"Syncros"
    },
    {
        nom: "BELCARRA", //
        preu: 149,
        img: "belcarra.jpg",
        brand:"Syncros"
    },
    {
        nom: "ASPIDE CARBON", //
        preu: 189,
        img: "aspide.jpg",
        brand:"San Marco"
    },
    {
        nom: "Lynx carbon", //
        preu: 196,
        img: "lynxC.jpg",
        brand:"Most"
    },
    {
        nom: "Lynx Manganeso", //
        preu: 74,
        img: "lynx.jpg",
        brand:"Most"
    },
    {
        nom: "SLR CARBON KIT", //
        preu: 219,
        img: "slr.jpg",
        brand:"Selle Italia"
    },
    {
        nom: "SLR C59", //
        preu: 474,
        img: "c59.jpg",
        brand:"Selle Italia"
    },
    {
        nom: "00 EVO ", //
        preu: 350,
        img: "00evo.jpg",
        brand:"Fizik"
    },
    {
        nom: "R1", //
        preu: 199,
        img: "r1.jpg",
        brand:"Fizik"
    },
    {
        nom: "ADAPTIVE ANTARES VS EVO 00", //
        preu: 299,
        img: "adaptative_00.jpg",
        brand:"Fizik"
    },
    {
        nom: "ADAPTIVE ANTARES VS EVO R1", //
        preu: 299,
        img: "adaptative_r1.jpg",
        brand:"Fizik"
    },
    {
        nom: "ADAPTIVE ANTARES VS EVO R3", //
        preu: 249,
        img: "adaptative_r3.jpg",
        brand:"Fizik"
    }

];

t_pneumatics_road = [
    {
        nom: "COMPETITION TUBULAR", //
        preu: 238,
        brand:"Continental"
    },
    {
        nom: "SPRINTER TUBULAR", //
        preu: 132,
        brand:"Continental"
    },
    {
        nom: "GP5000 TUBELESS", //
        preu: 150,
        brand:"Continental"
    },
    {
        nom: "GP5000", //
        preu: 126,
        brand:"Continental"
    },
    {
        nom: "CORSA Tubluar", //
        preu: 190,
        brand:"Vittoria"
    },
    {
        nom: "CORSA Cubierta", //
        preu: 120,
        brand:"Vittoria"
    },
    {
        nom: "P-Zero Cubierta", //
        preu: 86,
        brand:"Pirelli"
    },
    {
        nom: "F1 SuperSport", //
        preu: 100,
        brand:"GoodYear"
    },
    {
        nom: "F1 TL", //
        preu: 110,
        brand:"GoodYear"
    },
    {
        nom: "Eagle Sport", //
        preu: 50,
        brand:"GoodYear"
    }

];

t_pneumatics_gravel = [{
        nom: "Cross Boss", //
        preu: 92,
        brand:"WTB"
    },
    {
        nom: "Cross Wolf", //
        preu: 92,
        brand:"WTB"
    },
    {
        nom: "Venture", //
        preu: 104,
        brand:"WTB"
    },
    {
        nom: "Terreno Dry G", //
        preu: 98,
        brand:"Vittoria"
    },
    {
        nom: "Terreno Wet G", //
        preu: 98,
        brand:"Vittoria"
    },
    {
        nom: "G-One", //
        preu: 120,
        brand:"Schualbe"
    },
    {
        nom: "X-One", //
        preu: 120,
        brand:"Schualbe"
    },
    {
        nom: "Piranha 2", //
        preu: 78,
        brand:"Huchiston"
    },
    {
        nom: "Cinturato Gravel", //
        preu: 120,
        brand:"Pirelli"
    },
    {
        nom: "Connector", //
        preu: 92,
        brand:"GoodYear"
    }
];

t_pneumatics_mtb = [{
        nom: "IKON 3C", //
        preu: 118,
        brand:"Maxxis"
    },
    {
        nom: "IKON", //
        preu: 108,
        brand:"Maxxis"
    },
    {
        nom: "REKON RACE", //
        preu: 118,
        brand:"Maxxis"
    },
    {
        nom: "BARZO", //
        preu: 120,
        brand:"Vittoria"
    },
    {
        nom: "MEZCAL III", //
        preu: 120,
        brand:"Vittoria"
    },
    {
        nom: "ROCKET RON", //
        preu: 116,
        brand:"Schwalbe"
    },
    {
        nom: "RACE KING", //
        preu: 64,
        brand:"Continental"
    },
    {
        nom: "Peak", //
        preu: 92,
        brand:"GoodYear"
    },
];

t_grup_road = [{ //sense bieles
        nom: "DURA-ACE Di2", //
        preu: 3370, //antic 2692                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        img: "duraacedi2.jpg",
        brand:"Shimano"
    },
    {
        nom: "DURA-ACE", //
        preu: 1700, //antic 1312
        img: "duraace.jpg",
        brand:"Shimano"
    },
    {
        nom: "ULTEGRA Di2", //
        preu: 2041, //anterior 1440
        img: "ultegradi2.jpg",
        brand:"Shimano"
    },
    {
        nom: "ULTEGRA", //
        preu: 859,//anterior 629
        img: "ultegra.jpg",
        brand:"Shimano"
    },
    {
        nom: "RED AXS 12v", //
        preu: 2820,
        img: "redaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "FROCE AXS 12v", //
        preu: 2165,
        img: "forceaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "Super Record EPS", // 
        preu: 3632,
        img: "superrecordeps.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Super Record", //frens direct mount o dual pivot
        preu: 1968,
        img: "superrecord.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Record", //frens direct mount
        preu: 1561,
        img: "record.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Chorus", // frens direct mount
        preu: 997,
        img: "chorus.jpg",
        brand:"Campagnolo"
    }
];

t_grup_disc = [{ //sense bieles
        nom: "DURA-ACE Di2", //
        preu: 3659, //anterior 2795
        img: "duraacedi2.jpg",
        brand:"Shimano"
    },
    {
        nom: "DURA-ACE", //
        preu: 1985, //anterior 1861
        img: "duraace.jpg",
        brand:"Shimano"
    },
    {
        nom: "ULTEGRA Di2", //
        preu: 2380, //anterior 1703
        img: "ultegradi2.jpg",
        brand:"Shimano"
    },
    {
        nom: "ULTEGRA", //
        preu: 1188,//anterior 895
        img: "ultegra.jpg",
        brand:"Shimano"
    },
    {
        nom: "RED AXS 12v", //
        preu: 2920,
        img: "redaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "FROCE AXS 12v", //
        preu: 2165,
        img: "forceaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "RIVAL AXS 12v", //
        preu: 1296,
        img: "rival_axs.jpg",
        brand:"Sram"
    },
    {
        nom: "Super Record EPS", //disc 140 + 160
        preu: 3952,
        img: "superrecordeps.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Super Record", //disc 160 + 160
        preu: 2256,
        img: "superrecord.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Record", //disc 160 + 160
        preu: 1877,
        img: "record.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Chorus", //disc 160 + 160
        preu: 1435,
        img: "chorus.jpg",
        brand:"Campagnolo"
    }

];

t_grup_gravel = [{
        nom: "GRX Di2 1x", //
        preu: 2211, //anterior 1760
        img: "grxdi2.jpg",
        brand:"Shimano"
    },
    {
        nom: "GRX Di2 2x", //
        preu: 2450, //anterior 2166
        img: "grxdi2.jpg",
        brand:"Shimano"
    },
    {
        nom: "GRX 800 1x", //
        preu: 1153,//anterior 987
        img: "grx800.jpg",
        brand:"Shimano"
    },
    {
        nom: "GRX 800 2x", //
        preu: 1239,//anterior 1106
        img: "grx800.jpg",
        brand:"Shimano"
    },
    {
        nom: "GRX 600 1x", //
        preu: 946,//anterior 875
        img: "grx600.jpg",
        brand:"Shimano"
    },
    {
        nom: "GRX 600 2x", //
        preu: 1023,//anterior 953
        img: "grx600.jpg",
        brand:"Shimano"
    },
    {
        nom: "RED AXS 2x", //
        preu: 2920,
        img: "redaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "RED AXS 1x", //
        preu: 2470,
        img: "redaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "RED AXS XPLR", //
        preu: 2335,
        img: "red xplr.jpg",
        brand:"Sram"
    },
    {
        nom: "RED AXS 1x + eagle 10-52 ", //
        preu: 2715,
        img: "xx1axs.jpg",
        brand:"Sram"
    },
    {
        nom: "FORCE AXS 2x", //
        preu: 2165,
        img: "forceaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "FROCE AXS 1x", //
        preu: 1765,
        img: "forceaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "FROCE AXS XPLR", //
        preu: 1800,
        img: "force xplr.jpg",
        brand:"Sram"
    },
    {
        nom: "FORCE AXS 1x + eagle gx 10-52", //
        preu: 1526,
        img: "gxaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "Sram RIVAL AXS 2x", //
        preu: 1296,
        img: "rival_axs.jpg",
        brand:"Sram"
    },
    {
        nom: "Sram RIVAL AXS 1x", //
        preu: 1061,
        img: "rival_axs.jpg",
        brand:"Sram"
    },
    {
        nom: "Sram RIVAL AXS  XPLR", //
        preu: 1061,
        img: "rival xplr.jpg",
        brand:"Sram"
    },
    {
        nom: "Sram RIVAL AXS + eagle gx 10-52", //
        preu: 1277,
        img: "gxaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "Campagnolo Ekar", //
        preu: 1349,
        img: "ekar.jpg",
        brand:"Campagnolo"
    },

];

t_grup_mtb = [{
        nom: "XX1 AXS", //
        preu: 1573,
        img: "xx1axs.jpg",
        brand:"Sram"
    },
    {
        nom: "X01 AXS", //
        preu: 1506,
        img: "x01axs.jpg",
        brand:"Sram"
    },
    {
        nom: "XX1", //
        preu: 1048,
        img: "xx1.jpg",
        brand:"Sram"
    },
    {
        nom: "X01", //
        preu: 881,
        img: "x01.jpg",
        brand:"Sram"
    },
    {
        nom: "GX AXS", //
        preu: 881,
        img: "gxaxs.jpg",
        brand:"Sram"
    },
    {
        nom: "GX", //
        preu: 449,
        img: "gx.jpg",
        brand:"Sram"
    },
    {
        nom: "XTR", //
        preu: 930,//anterior 718
        img: "xtr.jpg",
        brand:"Shimano"
    },
    {
        nom: "XT", //
        preu: 440,//anterior 337
        img: "xt.jpg",
        brand:"Shimano"
    }
];

t_frens = [{
        nom: "LEVEL ULTIMATE", //
        preu: 714,
        img: "ult.jpg",
        brand:"Sram"
    },
    {
        nom: "LEVEL TLM", //
        preu: 468,
        img: "tlm.jpg",
        brand:"Sram"
    },
    {
        nom: "XTR", //
        preu: 695,//anterior 549
        img: "xtr.jpg",
        brand:"Shimano"
    },
    {
        nom: "XTR 4 pistones", //
        preu: 735,
        img: "xtr.jpg",
        brand:"Shimano"
    },
    {
        nom: "XT", //
        preu: 390,//anterior 313
        img: "xt.jpg",
        brand:"Shimano"
    },
    {
        nom: "XT 4 pistones", //
        preu: 498,
        img: "xt.jpg",
        brand:"Shimano"
    }

];

t_pedals_road = [{
        nom: "Dura-Ace", //
        preu: 250,
        img: "duraace.jpg",
        brand:"Shimano"
    },
    {
        nom: "Ultegra", //
        preu: 150,
        img: "ultegra.jpg",
        brand:"Shimano"
    },
    {
        nom: "105", //
        preu: 110,
        img: "105.jpg",
        brand:"Shimano"
    },
    {
        nom: "keo Carbon Titanium", //
        preu: 285,
        img: "lookti.jpg",
        brand:"Look"
    },
    {
        nom: "Keo Carbon", //
        preu: 160,
        img: "lookcarbon.jpg",
        brand:"Look"
    },
    {
        nom: "keo 2 max", //
        preu: 80,
        img: "keo.jpg",
        brand:"Look"
    },
    {
        nom: "XPRESSO 15", //
        preu: 450,
        img: "xpresso15.jpg",
        brand:"Time"
    },
    {
        nom: "XPRESSO 12", //
        preu: 290,
        img: "xpresso12.jpg",
        brand:"Time"
    },
    {
        nom: "XPRESSO 10", //
        preu: 160,
        img: "xpresso10.jpg",
        brand:"Time"
    },
    /**{ Afegir Speedplay
        nom: "Look Carbon Ti", //
        preu: 199,
        img: "lookcarbonti.jpg",
        brand:"Look"
    },
    {
        nom: "Look Carbon", //
        preu: 110,
        img: "lookcarbonx.jpg",
        brand:"Look"
    },
    {
        nom: "Look Race", //
        preu: 70,
        img: "lookrace.jpg",
        brand:"Look"
    }*/
];

t_pedals_mtb = [{
        nom: "XTR", //
        preu: 150,
        img: "xtr.jpg",
        brand:"Shimano"
    },
    {
        nom: "XT", //
        preu: 98,
        img: "xt.jpg",
        brand:"Shimano"
    },
    {
        nom: "X-track Carbon Ti", //
        preu: 199,
        img: "lookcarbonti.jpg",
        brand:"Look"
    },
    {
        nom: "X-track Carbon", //
        preu: 110,
        img: "lookcarbonx.jpg",
        brand:"Look"
    },
    {
        nom: "X-track Race", //
        preu: 70,
        img: "lookrace.jpg",
        brand:"Look"
    },
    
];

t_tijes_mtb = [{
        nom: "Aluminio", //
        preu: 109,
        img: "t_newultimate.jpg",
        brand:"New Ultimate"
    },
    {
        nom: "Carbon", //
        preu: 206,
        img: "t_newultimateC.jpg",
        brand:"New Ultimate"
    },
    {
        nom: "He Carbon", //
        preu: 139,
        img: "t_onoff.jpg",
        brand:"OnOff"
    },
    {
        nom: "Peak", //
        preu: 60,
        img: "peak.jpg",
        brand:"OnOff"
    },
    {
        nom: "Leichtes Stück", //
        preu: 229,
        img: "t_tune.jpg",
        brand:"Tune"
    },
    {
        nom: "TheSeatPost",
        preu: 299,
        img: "theseatpost.jpg",
        brand:"Bike Ahead"
    },
    
    {
        nom: "Telescopica REVERB AXS", //
        preu: 800,
        img: "reverb.jpg",
        brand:"RockShox"
    },
    {
        nom: "Telescopica Transfer kashima", //
        preu: 489,
        img: "transfer.jpg",
        brand:"Fox"
    },
    {
        nom: "Telescopica Koryak", //
        preu: 270,
        img: "koryak.jpg",
        brand:"Pro"
    },
    {
        nom: "Telescopica", //
        preu: 229,
        img: "syncros.jpg",
        brand:"Syncros"
    },
    {
        nom: "Telescopica DT 232 one", //
        preu: 498,
        img: "232.jpg",
        brand:"DT-SWISS"
    },
];

t_forquilla = [{
        nom: "SC 32 kashima", //
        preu: 1425,
        img: "fox32.jpg",
        brand:"Fox"
    },
    {
        nom: "SC 34 kashima 100mm", //
        preu: 1499,
        img: "fox34.jpg",
        brand:"Fox"
    },
    {
        nom: "SC 34 kashima 120mm", //
        preu: 1399,
        img: "fox34.jpg",
        brand:"Fox"
    },
    {
        nom: "SC 32 anoditzat", //
        preu: 959,
        img: "fox32a.jpg",
        brand:"Fox"
    },
    {
        nom: "SC 34 anoditzat", //
        preu: 1059,
        img: "fox34a.jpg",
        brand:"Fox"
    },
    {
        nom: "SID 35 120mm ultimate Race Day", //
        preu: 1059,
        img: "sid35.jpg",
        brand:"RockShox"
    },
    {
        nom: "SID 32 100mm sl ultimate Race Day", //
        preu: 949,
        img: "sidsl.jpg",
        brand:"RockShox"
    }
];


t_portabido = [{
        nom: "WASSERTRÄGER 2.0", //
        preu: 56,
        img: "tune.jpg",
        brand:"Tune"
   },
    {
        nom: "RECHTSTRÄGER", //
        preu: 56,
        img: "tune2.jpg",
        brand:"Tune"
    },
    {
        nom: "Wings carbon 1k", //
        preu: 52,
        img: "most.jpg",
        brand:"Most"
    },
    {
        nom: "Carbon 1.0", //
        preu: 65,
        img: "syncros.jpg",
        brand:"Syncros"
    },
    {
        nom: "Tailor MB cage multiHerramientas", //
        preu: 55,
        img: "syncrostools.jpg",
        brand:"Syncros"
    },
    {
        nom: "Vico carbon", //
        preu: 28,
        img: "vico.jpg",
        brand:"Elite"
    },
    {
        nom: "Rocko carbon", //
        preu: 30,
        img: "rocko.jpg",
        brand:"Elite"
    },
    {
        nom: "Edelhelfer", //
        preu: 92,
        img: "lightweight.jpg",
        brand:"LIGHTWEIGHT"
    },
    {
        nom: "FLY CAGEZ CARBON", //
        preu: 59,
        img: "supacaz.jpg",
        brand:"Supacaz"
    },
    {
        nom: "Custom Race", //
        preu: 18,
        img: "bianchi_custom.jpg",
        brand:"Bianchi"
    },
    {
        nom: "Vico Carbon", //
        preu: 35,
        img: "bianchi_vico.jpg",
        brand:"Bianchi"
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
        preu: 589, //anterior 495
        img: "duraace.jpg",
        brand:"Shimano"
    },
    {
        nom: "Ultegra", //
        preu: 279, //anterior 238
        img: "ultegra.jpg",
        brand:"Shimano"
    },
    {
        nom: "Dura-Ace con Potenciometro", //
        preu: 1778,//anterior 1366
        img: "duraacep.jpg",
        brand:"Shimano"
    },
    {
        nom: "Red AXS", //
        preu: 700,
        img: "red.jpg",
        brand:"Sram"
    },
    {
        nom: "Force AXS", //
        preu: 435,
        img: "force.jpg",
        brand:"Sram"
    },
    {
        nom: "RIVAL AXS", //
        preu: 135,
        img: "rival_axs.jpg",
        brand:"Sram"
    },
    {
        nom: "Super Record", //
        preu: 962,
        img: "superrecord.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Record", //
        preu: 536,
        img: "record.jpg",
        brand:"Campagnolo"
    },
    {
        nom: "Chorus", //
        preu: 384,
        img: "chorus.jpg",
        brand:"Campagnolo"
    },
    //+potenciometre
   
    {
        nom: "Dura-Ace LR", //
        preu: 999,
        img: "stages_duraace_lr.jpg",
        brand:"Stages"
    },
    {
        nom: "Ultegra Potenciometro LR", //
        preu: 749,
        img: "stages_ultegra_lr.jpg",
        brand:"Stages"
    },
    {
        nom: "Ultegra Potenciometro L", //
        preu: 638,
        img: "stages_ultegra_l.jpg",
        brand:"Stages"
    },
    {
        nom: "Campagnolo Super Record L", //
        preu: 1861,
        img: "stages_superrecord.jpg",
        brand:"Stages"
    },
    {
        nom: "Campagnolo Record L", //
        preu: 1235,
        img: "stages_record.jpg",
        brand:"Stages"
    },
    {
        nom: "Red AXS", //
        preu: 1200,
        img: "quarq_red.jpg",
        brand:"Quarq"
    },
    {
        nom: "Force AXS", //
        preu: 1034,
        img: "quarq_force.jpg",
        brand:"Quarq"
    },
    {
        nom: "RIVAL AXS", //
        preu: 360,
        img: "quarq_rival.jpg",
        brand:"Quarq"
    },
    
];

t_bieles_gravel = [{
        nom: "GRX 810 ", //
        preu: 280, //anterior 241
        img: "grx800.jpg",
        brand:"Shimano"
    },
    {
        nom: "GRX 600", //
        preu: 159, //anterior 122
        img: "grx600.jpg",
        brand:"Shimano"
    },
    {
        nom: "Red AXS", //
        preu: 700,
        img: "red.jpg",
        brand:"Sram"
    },
    {
        nom: "Force AXS", //
        preu: 435,
        img: "force.jpg",
        brand:"Sram"
    },
    {
        nom: "RIVAL AXS", //
        preu: 135,
        img: "rival_axs.jpg",
        brand:"Sram"
    },
    {
        nom: "XX1", //
        preu: 571,
        img: "xx1.jpg",
        brand:"Sram"
    },
    {
        nom: "X01", //
        preu: 435,
        img: "x01.jpg",
        brand:"Sram"
    },
    {
        nom: "GX", //
        preu: 150,
        img: "gx.jpg",
        brand:"Sram"
    },
    {
        nom: "Ekar", //
        preu: 347,
        img: "ekar.jpg",
        brand:"Campagnolo"
    },
    //+potenciometre
    {
        nom: "GRX 810 L", //
        preu: 640,
        img: "stages_grx_800.jpg",
        brand:"Stages"
    },
    {
        nom: "GRX 600 L", //
        preu: 521,
        img: "stages_grx_600.jpg",
        brand:"Stages"
    },
    {
        nom: "Red AXS", //
        preu: 1200,
        img: "quarq_red.jpg",
        brand:"Quarq"
    },
    {
        nom: "Force AXS", //
        preu: 1034,
        img: "quarq_force.jpg",
        brand:"Quarq"
    },
    {
        nom: "RIVAL AXS", //
        preu: 360,
        img: "quarq_rival.jpg",
        brand:"Quarq"
    },
    {
        nom: "xx1", //
        preu: 1071,
        img: "quarq_xx1.jpg",
        brand:"Quarq"
    }
];

t_bieles_mtb = [{
        nom: "XTR", //
        preu: 570,//anterior 487
        img: "xtr.jpg",
        brand:"Shimano"
    },
    {
        nom: "XT", //
        preu: 239, // anterior 185
        img: "xt.jpg",
        brand:"Shimano"
    },
    {
        nom: "XX1", //
        preu: 571,
        img: "xx1.jpg",
        brand:"Sram"
    },
    {
        nom: "X01", //
        preu: 435,
        img: "x01.jpg",
        brand:"Sram"
    },
    {
        nom: "GX", //
        preu: 150,
        img: "gx.jpg",
        brand:"Sram"
    },
    //+potenciometre
    {
        nom: "XTR LR", //
        preu: 1199,
        img: "stages_xtr_lr.jpg",
        brand:"Stages"
    },
    {
        nom: "XTR L", //
        preu: 1016,
        img: "stages_xtr_l.jpg",
        brand:"Stages"
    },
    {
        nom: "XT LR", //
        preu: 749,
        img: "stages_xt_lr.jpg",
        brand:"Stages"
    },
    {
        nom: "XT L", //
        preu: 584,
        img: "stages_xt_l.jpg",
        brand:"Stages"
    },
    {
        nom: "xx1", //
        preu: 1071,
        img: "quarq_xx1.jpg",
        brand:"Quarq"
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
        brand="";
        t_forquilla.forEach(element => {
            if(element.brand!=brand){
                if(brand!=""){
                    t_tmp+='</optgroup>'
                }
                t_tmp += '<optgroup label="'+ element.brand+'">'
            
            }
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
            brand=element.brand;
        });
        $("#forquilla").append(t_tmp);
        $("#forquilla").parent().show();

        //frens mtb
        t_tmp = '<option value="0" selected>Selecciona unos Frenos</option>';
        brand="";
        t_frens.forEach(element => {
            if(element.brand!=brand){
                if(brand!=""){
                    t_tmp+='</optgroup>'
                }
                t_tmp += '<optgroup label="'+ element.brand+'">'
            
            }
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
            brand=element.brand;
        });
        $("#frens").append(t_tmp);
        $("#frens").parent().show();


        seient();
        pedals(t_pedals_mtb);

        //punys mtb
        t_tmp = '<option value="0" selected>Selecciona unos Puños</option>';
        brand="";

        t_punys.forEach(element => {
            t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
            
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
    $("#img_seient").attr('src', "./images/configuracions/seients/blank.jpg");
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
    brand="";
    t_quadre.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
        brand=element.brand;
    });
    $("#quadre").append(t_tmp);
}

//carregar rodes
function rodes(t_rodes) {
    t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
    brand="";
    t_rodes.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';

        brand=element.brand;
    });
    $("#rodes").append(t_tmp)
}

//carregar grup
function grup(t_grup) {
    t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
    brand="";
    t_grup.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';

        brand=element.brand;
    });
    $("#grup").append(t_tmp);
}

function bieles(t_bieles) {
    t_tmp = '<option value="0" selected>Selecciona las bielas</option>';
    brand="";
    t_bieles.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';

        brand=element.brand;
    });
    $("#bieles").append(t_tmp);
}

function manillar(t_manillar) {
    t_tmp = '<option value="0" selected>Selecciona el Manillar</option>';
    brand="";
    t_manillar.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">';

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
        brand=element.brand;
    });
    $("#manillar").append(t_tmp);
}


function portabido() {
    //portabido1
    t_tmp1 = '<option value="0" selected>Selecciona el Portabidon</option>';
    t_tmp="";
    brand="";
    t_portabido.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
        brand=element.brand;
    });
    $("#portabido").append(t_tmp1+t_tmp);

    //portabido2
    t_tmp2 = '<option value="0" selected>Selecciona el 2o Portabidon</option>';
    $("#portabido2").append(t_tmp2+t_tmp);
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
    brand="";
    t_tijes.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
        brand=element.brand;
    });
    $("#tija").append(t_tmp);
    $("#tija").parent().show();
}

function seient() {
    t_tmp = '<option value="0" selected>Selecciona el Sillin</option>';
    brand="";
    t_seient.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';

        brand=element.brand;
    });
    $("#seient").append(t_tmp);
};

function pneumatic(t_pneumatics) {
    t_tmp = '<option value="0" selected>Selecciona los Neumaticos</option>';
    brand="";
    t_pneumatics.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
        brand=element.brand;
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
    brand="";
    t_pedals.forEach(element => {
        if(element.brand!=brand){
            if(brand!=""){
                t_tmp+='</optgroup>'
            }
            t_tmp += '<optgroup label="'+ element.brand+'">'

        }
        t_tmp += '<option value=\'' + JSON.stringify(element) + '\'>' + element.nom + '</option>';
        brand=element.brand;
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
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Cuadro: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#quadre").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0"> ' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiQuadre();
    } else {
        $("#img_quadre").attr('src', "./images/configuracions/quadres/blank.jpg");
    }

    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate" >Manillar: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#manillar").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiManillar();
    } else {
        $("#img_manillar").attr('src', "./images/configuracions/manillars/blank.jpg");
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Ruedas: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#rodes").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiRodes();
    } else {
        $("#img_rodes").attr('src', "./images/configuracions/rodes/blank.jpg");
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Grupo: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#grup").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiGrup();
    } else {
        $("#img_grup").attr('src', "./images/configuracions/grups/blank.jpg");
    }
    if ($("#bieles").val() != "0") {
        preu = JSON.parse($("#bieles").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Bielas: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#bieles").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiBieles();
    } else {
        $("#img_bieles").attr('src', "./images/configuracions/bieles/blank.jpg");
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Frenos: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#frens").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiFrens();
    } else {
        $("#img_frens").attr('src', "./images/configuracions/frens/blank.jpg");
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Horquilla: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#forquilla").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiForquilla();
    } else {
        $("#img_forquilla").attr('src', "./images/configuracions/forquilles/blank.jpg");
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Sillin: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#seient").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiSeient();
    } else {
        $("#img_seient").attr('src', "./images/configuracions/seients/blank.jpg");
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Tija: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#tija").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiTija();
    } else {
        $("#img_tija").attr('src', "./images/configuracions/tijes/blank.jpg");
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Pedales: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#pedals").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiPedals();
    } else {
        $("#img_pedals").attr('src', "./images/configuracions/pedals/blank.jpg");
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Cinta: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#cinta").val()).nom + '</span>  ' + part3 + '</div>';
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
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Puños: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#punys").val()).nom + '</span>  ' + part3 + '</div>';
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
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Neumaticos: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#pneumatics").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#portabido").val() != "0") {
        preu = JSON.parse($("#portabido").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Portabidon: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#portabido").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiPortabido();
    } else {
        $("#img_portabidons").attr('src', "./images/configuracions/portabidons/blank.jpg");
    }
    if ($("#portabido2").val() != "0") {
        preu = JSON.parse($("#portabido2").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">2o Portabidon: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#portabido2").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
        cambiPortabido2();
    } else {
        $("#img_portabidons2").attr('src', "./images/configuracions/portabidons/blank.jpg");
    }
    if ($("#pedalier").val() && $("#pedalier").val() != "0") {
        preu = JSON.parse($("#pedalier").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Pedalier: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#pedalier").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;
    }
    if ($("#roldanes").val() && $("#roldanes").val() != "0") {
        preu = JSON.parse($("#roldanes").val()).preu;
        part2 = '<div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-11 pr-0 text-truncate">Roldanas: <span class="font-weight-bold text-truncate"> '+" " + JSON.parse($("#roldanes").val()).nom + '</span>  ' + part3 + '</div>';
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
    tx += "<tr style='font-size:150%'><td>Nom: " + 
        bold1+$("#nom").val() +bold2+
        "</td></tr><tr style='font-size:150%'><td>Cognom: " +
        bold1+$("#cognom").val() +bold2+
        "</td></tr><tr style='font-size:150%'><td>Email: " +
        bold1+$("#mail").val() +bold2+
        "</td></tr><tr style='font-size:150%'><td>Telefon:" +
        bold1+$("#tel").val() +bold2+
        "</td></tr><tr style='font-size:150%'><td>Comentaris: " +
        bold1+$("#comentaris").val() +bold2+
        "</td></tr><tr style='font-size:150%'><td>Estatura: " +
        bold1+$("#estatura").val()+"cm" +bold2+
        "</td></tr><tr style='font-size:150%'><td>Quantitat a financiar: " +
        bold1+$("#financiacio").val() +"€"+bold2+
        "</td></tr><tr style='font-size:150%'><td>Mensualitats: " +
        bold1+$("#mensualitats").val() +"mesos"+bold2+
        "</td></tr>"
        



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
    tx += "</td></tr><tr><td>Neumaticos: "+bold1    
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
    $("#imatges_pdf").empty();
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
        img_brand = "";
        switch (JSON.parse($("#quadre").val()).brand) {
            case "Scott":
                img_brand = "./images/marcas/scott.png"
                break;
            case "Bianchi":
                img_brand = "./images/marcas/bianchi.png"
                break;
            case "Pinarello":
                img_brand = "./images/marcas/pinarello.png"
                break;
            case "Colnago":
                img_brand = "./images/marcas/colnago.png"
                break;
            case "Derosa":
                img_brand = "./images/marcas/derosa.png"
                break;
        }
        img_html = '<img src="' + img_brand + '" alt="" class="img-fluid"></img>'
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
        modalitat_html = '<p class="h6">Modalidad:<span class="h5 float-end"> ' + modalitat + '</span></p><div class="col-12 border border-bottom border-dark"></div><br>';
        $("#print").append(modalitat_html);
        preu = JSON.parse($("#quadre").val()).preu;
        part2 = '<div class="col-10  pr-0 text-truncate">Cuadro: <span class="font-weight-bold ">' + JSON.parse($("#quadre").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_quadre").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }

    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate" >Manillar: <span class="font-weight-bold ">' + JSON.parse($("#manillar").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_manillar").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Ruedas: <span class="font-weight-bold ">' + JSON.parse($("#rodes").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'> "+$("#img_rodes").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Grupo: <span class="font-weight-bold ">' + JSON.parse($("#grup").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_grup").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#bieles").val() != "0") {
        preu = JSON.parse($("#bieles").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Bielas: <span class="font-weight-bold">' + JSON.parse($("#bieles").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_bieles").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Frenos: <span class="font-weight-bold ">' + JSON.parse($("#frens").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_frens").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class="col-10 pr-0 text-truncate">Horquilla: <span class="font-weight-bold ">' + JSON.parse($("#forquilla").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_forquilla").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Sillin: <span class="font-weight-bold ">' + JSON.parse($("#seient").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_seient").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Tija: <span class="font-weight-bold ">' + JSON.parse($("#tija").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#desglos").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_tija").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Pedales: <span class="font-weight-bold ">' + JSON.parse($("#pedals").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_pedals").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Cinta: <span class="font-weight-bold ">' + JSON.parse($("#cinta").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_cinta").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
        preu = JSON.parse($("#punys").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">Puños: <span class="font-weight-bold ">' + JSON.parse($("#punys").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px' >"+$("#img_punys").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
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

        div_img="<div style='width:250px'>"+$("#img_portabidons").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#portabido2").val() != "0") {
        preu = JSON.parse($("#portabido2").val()).preu;
        part2 = '<div class="col-10 pr-0 text-truncate">2o Portabidon: <span class="font-weight-bold ">' + JSON.parse($("#portabido2").val()).nom + '</span>  ' + part3 + '</div>';
        part4 = '<div class="col-2 text-right pl-0">' + preu + ' €</div>';
        $("#print").append(part1 + part2 + part4 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_portabidons2").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
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

    textPreu = '<br><div class=" rounded px-2 py-1 bg-primary text-white float-end font-weight-bold" >Total: <span id="total2">' + total + '</span> €</div><br>'
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
    let part1 = '<div class="d-flex justify-content-start flex-row px-0 m-0 py-lg-1 text-presupost">';
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
        $("#img_seient").attr('src', "./images/configuracions/seients/blank.jpg");
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
        part2 = '<div class=" pr-0  mr-2">2o Portabidon: </div><div class="font-weight-bold text-truncate">' + JSON.parse($("#portabido2").val()).nom + '</div>'
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

function print2() {// print sense preus
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
        img_brand = "";
        switch (JSON.parse($("#quadre").val()).brand) {
            case "Scott":
                img_brand = "./images/marcas/scott.png"
                break;
            case "Bianchi":
                img_brand = "./images/marcas/bianchi.png"
                break;
            case "Pinarello":
                img_brand = "./images/marcas/pinarello.png"
                break;
            case "Colnago":
                img_brand = "./images/marcas/colnago.png"
                break;
            case "Derosa":
                img_brand = "./images/marcas/derosa.png"
                break;
        }
        img_html = '<img src="' + img_brand + '" alt="" class="img-fluid"></img>'
        $("#logo_marca").append(img_html);
    }

    let total = 0;
    let part1 = '<div class="d-flex justify-content-around row ">';
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
    modalitat_html = '<p class="h6">Modalidad:<span class="h5 float-end"> ' + modalitat + '</span></p><div class="col-12 border border-bottom border-dark"></div><br>';
    $("#print").append(modalitat_html);

    if ($("#quadre").val() != "0") {
        preu = JSON.parse($("#quadre").val()).preu;
        part2 = '<div class="col-12  pr-0 text-truncate">Cuadro: <span class="font-weight-bold "> '+" " + JSON.parse($("#quadre").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_quadre").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }

    if ($("#manillar").val() != "0") {
        preu = JSON.parse($("#manillar").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate" >Manillar: <span class="font-weight-bold "> '+" " + JSON.parse($("#manillar").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_manillar").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#rodes").val() != "0") {
        preu = JSON.parse($("#rodes").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Ruedas: <span class="font-weight-bold "> '+" " + JSON.parse($("#rodes").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'> "+$("#img_rodes").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#grup").val() != "0") {
        preu = JSON.parse($("#grup").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Grupo: <span class="font-weight-bold "> '+" " + JSON.parse($("#grup").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_grup").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#bieles").val() != "0") {
        preu = JSON.parse($("#bieles").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Bielas: <span class="font-weight-bold"> '+" " + JSON.parse($("#bieles").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_bieles").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#frens").val() && $("#frens").val() != "0") {
        preu = JSON.parse($("#frens").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Frenos: <span class="font-weight-bold "> '+" " + JSON.parse($("#frens").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_frens").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#forquilla").val() && $("#forquilla").val() != "0") {
        preu = JSON.parse($("#forquilla").val()).preu
        part2 = '<div class="col-12 pr-0 text-truncate">Horquilla: <span class="font-weight-bold "> '+" " + JSON.parse($("#forquilla").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_forquilla").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#seient").val() != "0") {
        preu = JSON.parse($("#seient").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Sillin: <span class="font-weight-bold "> '+" " + JSON.parse($("#seient").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_seient").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);        
    }
    if ($("#tija").val() && $("#tija").val() != "0") {
        preu = JSON.parse($("#tija").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Tija: <span class="font-weight-bold "> '+" " + JSON.parse($("#tija").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_tija").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#pedals").val() != "0") {
        preu = JSON.parse($("#pedals").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Pedales: <span class="font-weight-bold "> '+" " + JSON.parse($("#pedals").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_pedals").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#cinta").val() && $("#cinta").val() != "0") {
        preu = JSON.parse($("#cinta").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Cinta: <span class="font-weight-bold "> '+" " + JSON.parse($("#cinta").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_cinta").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#punys").val() && $("#punys").val() != "0") {
        preu = JSON.parse($("#punys").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Puños: <span class="font-weight-bold "> '+" " + JSON.parse($("#punys").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px' >"+$("#img_punys").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#pneumatics").val() != "0") {
        preu = JSON.parse($("#pneumatics").val()).preu;
        part2 = '<div class="col-12 text-truncate">Neumaticos: <span class="font-weight-bold "> '+" " + JSON.parse($("#pneumatics").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#portabido").val() != "0") {
        preu = JSON.parse($("#portabido").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Portabidon: <span class="font-weight-bold "> '+" " + JSON.parse($("#portabido").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_portabidons").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#portabido2").val() != "0") {
        preu = JSON.parse($("#portabido2").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">2o Portabidon: <span class="font-weight-bold "> '+" " + JSON.parse($("#portabido2").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;

        div_img="<div style='width:250px'>"+$("#img_portabidons2").parent().html()+"</div>"
        $("#imatges_pdf").append(div_img);
    }
    if ($("#pedalier").val() && $("#pedalier").val() != "0") {
        preu = JSON.parse($("#pedalier").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Pedalier: <span class="font-weight-bold "> '+" " + JSON.parse($("#pedalier").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }
    if ($("#roldanes").val() && $("#roldanes").val() != "0") {
        preu = JSON.parse($("#roldanes").val()).preu;
        part2 = '<div class="col-12 pr-0 text-truncate">Roldanas: <span class="font-weight-bold "> '+" " + JSON.parse($("#roldanes").val()).nom + '</span>  </div>';
        $("#print").append(part1 + part2 + part5);
        total += preu;
    }

    textPreu = '<br><div class="rounded px-2 py-1 bg-primary text-white float-end font-weight-bold" >Total: <span id="total2">' + total + '</span> €</div><br>'
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