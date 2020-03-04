$(document).ready(function () {
    esconde();
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

});







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
    if ($("#modalitat").val() == "road_disc") {
        $("#quadre").append(
            new Option("Selecciona un cuadro", 0, true),
            new Option("Pinarello F12 DISC", 5799),
            new Option("Pinarello Prince FX DISC", 4300),
            new Option("Colnago C64 DISC", 5300),
            new Option("Colnago V3RS DISC", 4000),
            new Option("Bianchi XR4 DISC", 5499),
            new Option("Scott Addict RC Ultimate Disc", 2999),
            new Option("Scott Addict RC PRO Disc", 2199));

        $("#rodes").append(
            new Option("Selecciona unas ruedas", 0, true),
            new Option("Enve SES 3.4 Tubular", 3400),
            new Option("Campagnolo Bora One 35 Tubular", 2880),
            new Option("Campagnolo Bora One 50 Tubular", 2880),
            new Option("Fulcrum speed 40 Tubular"),
            new Option("Corima WS Tubular", 1680),
            new Option("Corima WS+ Tubular", 2300),
            new Option("Carbon-ti Tubular", 2880),
            new Option("Enve SES 3.4 Tubeless/Cubierta", 3400),
            new Option("Campagnolo Bora One 35 Tubeless/Cubierta", 2880),
            new Option("Campagnolo Bora One 50 Tubeless/Cubierta", 2880),
            new Option("Fulcrum speed 40 Tubeless/Cubierta"),
            new Option("Corima WS Tubeless/Cubierta", 1680),
            new Option("Corima WS+ Tubeless/Cubierta", 2300),
            new Option("Carbon-ti Tubeless/Cubierta", 2880));

        $("#grup").append(
            new Option("Selecciona un Grupo", 0, true),
            new Option("Sram Red etap AXS 12v", 3600),
            new Option("Sram Force etap AXS 12v", 2600),
            new Option("Shimano Dura-Ace Di2", 3400),
            new Option("Shimano Dura-Ace", 2400),
            new Option("Shimano Ultegra Di2", 2600),
            new Option("Shimano Ultegra", 1800),
            new Option("Campagnolo Super Record EPS 12v", 4000),
            new Option("Campagnolo Super Record 12v", 3300),
            new Option("Campagnolo Record 12v", 2600),
            new Option("Campagnolo Chorus 12v", 2000),
        );

        $("#manillar").append(
            new Option("Selecciona un Manillar", 0, true),
            new Option("Most Talon Aero", 750),
            new Option("Most Talon Ultra", 2600),
            new Option("Most Talon UD", 3400),
            new Option("Kit Most Tiger 3k conjunto", 2400),
            new Option("Vison Metron 5D ACR", 2600),
            new Option("Syncros Creston IC SL", 1800),
            new Option("Pro ", 2000),
            new Option("Pro Vive conjunto", 4000),
            new Option("Zipp AERO conjunto", 3300),
            new Option("Zipp Ergo Conjunto", 2600),
            new Option("Enve Aero Conjunto", 4000),
            new Option("Enve STD Conjunto", 4000),
        );
        seient();
        mostrar_cinta()
        pneumatic_road()
    }
    if ($("#modalitat").val() == "road_rim") {
        $("#quadre").append(
            new Option("Selecciona un cuadro", 0, true),
            new Option("Pinarello F12", 5799),
            new Option("Pinarello Prince FX", 4300),
            new Option("Colnago C64", 5300),
            new Option("Colnago V3RS", 4000),
            new Option("Bianchi Specialissima", 4499),
            new Option("Bianchi XR4", 3999));

        $("#rodes").append(
            new Option("Selecciona unas ruedas", 0, true),
            new Option("Enve SES 3.4 Tubular", 3400),
            new Option("Campagnolo Bora One 35 Tubular", 2880),
            new Option("Campagnolo Bora One 50 Tubular", 2880),
            new Option("Fulcrum speed 40 Tubular"),
            new Option("Corima WS Tubular", 1680),
            new Option("Corima WS+ Tubular", 2300),
            new Option("Carbon-ti Tubular", 2880),
            new Option("Enve SES 3.4 Tubeless/Cubierta", 3400),
            new Option("Campagnolo Bora One 35 Tubeless/Cubierta", 2880),
            new Option("Campagnolo Bora One 50 Tubeless/Cubierta", 2880),
            new Option("Fulcrum speed 40 Tubeless/Cubierta"),
            new Option("Corima WS Tubeless/Cubierta", 1680),
            new Option("Corima WS+ Tubeless/Cubierta", 2300),
            new Option("Carbon-ti Tubeless/Cubierta", 2880));

        $("#grup").append(
            new Option("Selecciona un Grupo", 0, true),
            new Option("Sram Red etap AXS 12v", 3600),
            new Option("Sram Force etap AXS 12v", 2600),
            new Option("Shimano Dura-Ace Di2", 3400),
            new Option("Shimano Dura-Ace", 2400),
            new Option("Shimano Ultegra Di2", 2600),
            new Option("Shimano Ultegra", 1800),
            new Option("Campagnolo Super Record EPS 12v", 4000),
            new Option("Campagnolo Super Record 12v", 3300),
            new Option("Campagnolo Record 12v", 2600),
            new Option("Campagnolo Chorus 12v", 2000),
        );

        $("#manillar").append(
            new Option("Selecciona un Manillar", 0, true),
            new Option("Most Talon Aero", 750),
            new Option("Most Talon Ultra", 2600),
            new Option("Most Talon UD", 3400),
            new Option("Kit Most Tiger 3k conjunto", 2400),
            new Option("Vison Metron 5D ACR", 2600),
            new Option("Syncros Creston IC SL", 1800),
            new Option("Pro ", 2000),
            new Option("Pro Vive conjunto", 4000),
            new Option("Zipp AERO conjunto", 3300),
            new Option("Zipp Ergo Conjunto", 2600),
            new Option("Enve Aero Conjunto", 4000),
            new Option("Enve STD Conjunto", 4000),
        );
        seient();
        mostrar_tija();
        mostrar_cinta();
        pneumatic_road();
    }
    if ($("#modalitat").val() == "gravel") {
        $("#quadre").append(
            new Option("Selecciona un cuadro", 0, true),
            new Option("Pinarello Grevil", 3799),
            new Option("Pinarello Crossista", 4300),
            new Option("Colnago Prestige", 3300),
            new Option("Bianchi Zolder Pro", 4499),
            new Option("Bianchi XR4", 3999),
            new Option("Scott Addict CX", 3400),
            new Option("Scott Addict Gravel", 3400));

        $("#rodes").append(
            new Option("Selecciona unas ruedas", 0, true),
            new Option("DT-1200 Tubular", 3400),
            new Option("DT-1400 Cubierta", 2880),
            new Option("Dura_Ace C40 Cubierta", 2880),
            new Option("Fulcrum Racing Zero cubierta", 1200),
            new Option("Fulcrum Racing 4 Cubierta", 1680));

        $("#grup").append(
            new Option("Selecciona un Grupo", 0, true),
            new Option("Sram Red etap AXS 12v 2x", 3600),
            new Option("Sram Force etap AXS 12v 2x", 2600),
            new Option("Sram Red etap AXS 12v 1x", 3600),
            new Option("Sram Force etap AXS 12v 1x", 2600),
            new Option("Shimano GRX 812 Di2 2x", 3400),
            new Option("Shimano GRX 800 2x", 2400),
            new Option("Shimano GRX 600 2x", 1800),
            new Option("Shimano GRX 812 Di2 1x", 3400),
            new Option("Shimano GRX 800 1x", 2400),
            new Option("Shimano GRX 600 1x", 1800)
        );

        $("#manillar").append(
            new Option("Selecciona un Manillar", 0, true),
            new Option("Most Talon Aero", 750),
            new Option("Most Talon Ultra", 2600),
            new Option("Most Talon UD", 3400),
            new Option("Kit Most Tiger 3k GR conjunto", 2400),
            new Option("Pro ", 2000),
            new Option("Pro Vive conjunto", 4000),
            new Option("Zipp AERO conjunto", 3300),
            new Option("Zipp Ergo Conjunto", 2600),
            new Option("Enve Aero Conjunto", 4000),
            new Option("Enve STD Conjunto", 4000),
        );
        seient();
        mostrar_tija();
        mostrar_cinta();

        $("#pneumatics").append(
            new Option("Selecciona un Manillar", 0, true),
            new Option("Vittoria X-dry", 750),
            new Option("Vittoria X-wet", 750),
            new Option("Vittoria X-mix", 750),
            new Option("Shualbe x-one", 750),
            new Option("WTB XXX", 750),
            new Option("WTB XXX", 750),
            new Option("WTB XXX", 750),

        );


    }

    if ($("#modalitat").val() == "mtb") {
        $("#quadre").append(
            new Option("Selecciona un cuadro", 0, true),
            new Option("Scott Spark RC Ultimate SL", 4300),
            new Option("Scott Spark RC WC N1NO Canada Edition", 5699),
            new Option("Scott Spark RC WC N1NO SilverFish", 5699),
            new Option("Scott Scale RC Ultimate SL", 5300),
            new Option("Scott Scale RC WC", 4000),
            new Option("Bianchi FS", 5499),
            new Option("Bianchi CV RS", 3900),
            new Option("Bianchi CV S", 3400),
            new Option("Megamo Track SL", 3500),
            new Option("Megamo Track", 2900)
        );

        $("#rodes").append(
            new Option("Selecciona unas ruedas", 0, true),
            new Option("DT XRC 1200", 3400),
            new Option("DT XR 1501 Cubierta", 2880),
            new Option("DT XR 1700 Cubierta", 2880),
            new Option("Syncros Silverton SL", 3700),
            new Option("Syncros Silverton 1.0", 1500),
            new Option("Carbon-ti ", 1680));

        $("#grup").append(
            new Option("Selecciona un Grupo", 0, true),
            new Option("Sram XX1 AXS", 1600),
            new Option("Sram XX0 AXS", 1400),
            new Option("Sram XX1", 1200),
            new Option("Sram XX0", 1000),
            new Option("Sram GX", 700),
            new Option("Shimano XTR", 1500),
            new Option("Shimano XT", 700)
        );
        $("#frens").append(
            new Option("Selecciona unos Frenos", 0, true),
            new Option("Sram TLM ULTIMATE", 750),
            new Option("Sram TLM", 500),
            new Option("Sram TL", 350),
            new Option("Shimano XTR Doble Piston", 650),
            new Option("Shimano XTR ", 550),
            new Option("Shimano XT Doble Piston", 450),
            new Option("Shimano XT", 390),
            new Option("Magura MT9", 800)
        );

        $("#frens").parent().show();

        $("#manillar").append(
            new Option("Selecciona un Manillar", 0, true),
            new Option("Syncros Fraser IC ULTIMATE SL -25", 1800),
            new Option("Syncros Fraser IC -17", 2000),
            new Option("Syncros Fraser IC -8", 4000),
            new Option("Conjunto ONOFF Helium carbon", 3300),
            new Option("Conjunto ONOFF Helium ", 2600),
            new Option("Conjunto New Ultimate Aluminio", 4000),
            new Option("Enve Conjunto", 4000),
            new Option("Tune Conjunto", 4000)
        );
        seient();
        mostrar_tija();

        $("#punys").append(
            new Option("Selecciona los Puños del Manillar", 0, true),
            new Option("Momum", 1800),
            new Option("ESI GRIPS RACER", 2000),
            new Option("ESI GRIPS CHUNKY", 4000),
            new Option("RITCHET SUPERGRIP", 3300),
            new Option("SYNCROS GOMA", 2600)
        );
        $("#punys").parent().show();

        $("#pneumatics").append(
            new Option("Selecciona un Manillar", 0, true),
            new Option("Maxxis Ikon Skinwall", 750),
            new Option("Maxxis Ikon", 750),
            new Option("Maxxis Rekon Race", 750),
            new Option("Maxxis Arden Race", 750),
            new Option("Vittoria Peyote", 750),
            new Option("Vittoria Barzo", 750),
            new Option("Vittoria Mezcal", 750)
        );

    }

};

function seient() {
    $("#seient").append(
        new Option("Selecciona el Sillin", 0, true),
        new Option("Tune SpeedNedlee", 1800),
        new Option("Tune SkyRacer", 2000),
        new Option("Selle italia SLR Carbon", 4000),
        new Option("Selle Italia SLR", 3300),
        new Option("Fizik Antares 00 Evo", 2600),
        new Option("Fizik Aliente 00 EVO", 2600),
        new Option("Fizik Arione 00 EVO", 2600),
        new Option("Fizik Antares R1", 2600),
        new Option("Fizik Aliente R1", 2600),
        new Option("Fizik Arione R1", 2600),

    );
};

function pneumatic_road() {
    $("#pneumatics").append(
        new Option("Selecciona los Pneumaticos", 0, true),
        new Option("Continental Competition Tubular", 1800),
        new Option("Continetal Sprinter Tubular", 2000),
        new Option("Verdestein Fortezza Tubular", 4000),
        new Option("Vittoria Corsa Tubular", 3300),
        new Option("Continental GP5000 cubierta", 2600),
        new Option("Continental Ultrasport cubierta", 2600),
        new Option("Verdestein Fortezza cubierta", 2600),
        new Option("Vittoria corsa cubierta", 2600),
        new Option("Continental GP5000 tubeless", 2600),
        new Option("Continental Ultrasport tubeless", 2600),
        new Option("Verdestein Fortezza tubeless", 2600),
        new Option("Vittoria corsa tubeless", 2600),
    );
};

function mostrar_cinta() {
    $("#cinta").parent().show();
    $("#cinta").append(
        new Option("Selecciona una Cinta de Manillar", 0, true),
        new Option("Most ultraGrip", 750),
        new Option("Most ultraLight", 2600),
        new Option("Bianchi Dots", 2400),
        new Option("Pro Sport Confort", 2600),
        new Option("Lizard Skin", 1800),
        new Option("Supacaz", 2000),
    );
};

function mostrar_tija() {
    $("#tija").parent().show();

    $("#tija").append(
        new Option("Selecciona un Tija", 0, true),
        new Option("Syncros 1.0", 1800),
        new Option("ONOFF Helium carbon", 3300),
        new Option("ONOFF Helium ", 2600),
        new Option("New Ultimate Aluminio", 4000),
        new Option("Enve", 4000),
        new Option("Tune", 4000),
    );
};

function preu() {

    total = 0;
    total += parseFloat($("#quadre").val());
    total += parseFloat($("#rodes").val());
    total += parseFloat($("#grup").val());
    total += parseFloat($("#manillar").val());
    total += parseFloat($("#seient").val());
    total += parseFloat($("#pneumatics").val());
    if ($("#frens").val()) {
        total += parseFloat($("#frens").val())
    }
    if ($("#tija").val()) {
        total += parseFloat($("#tija").val())
    }
    if ($("#cinta").val()) {
        total += parseFloat($("#cinta").val())
    }
    if ($("#punys").val()) {
        total += parseFloat($("#punys").val())
    }


    $("#total").text(total);
};

function esconde() {
    $("#frens").parent().hide();
    $("#tija").parent().hide();
    $("#punys").parent().hide();
    $("#cinta").parent().hide();

};