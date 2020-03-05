$(document).ready(function() {
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

//estructura de les taules, [{Nom:"",preu:0}]
t_road_disc = [{
    nom: "Pinarello F12 DISC",
    preu: 5799
}, {
    nom: "Pinarello Prince FX DISC",
    preu: 4300
}, {
    nom: "Colnago C64 DISC",
    preu: 5300
}, {
    nom: "Colnago V3RS DISC",
    preu: 4000
}, {
    nom: "Bianchi XR4 DISC",
    preu: 5499
}, {
    nom: "Scott Addict RC Ultimate Disc",
    preu: 2999
}, {
    nom: "Scott Addict RC PRO Disc",
    preu: 2199
}];

t_road = [];
t_gravel = [];
t_mtb = [];
t_manillars_road = [];
t_manillars_gravel = [];
t_manillars_mtb = [];
t_rodes_disc = [];
t_rodes_road = [];
t_rodes_gravel = [];
t_rodes_mtb = [];
t_tijes = [];
t_cinta = [];
t_punys = [];
t_seient = [];
t_pneumatics_road = [];
t_pneumatics_gravel = [];
t_pneumatics_mtb = [];
t_grup_road = [];
t_grup_disc = [];
t_grup_gravel = [];
t_grup_mtb = [];
t_frens = [];


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

    //ROAD DISCK
    if ($("#modalitat").val() == "road_disc") {
        //quadres disc
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_road_disc.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#quadre").append(t_tmp);

        //rodes disc 
        t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
        t_rodes_disc.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#rodes").append(t_tmp)

        //grup disc
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_disc.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);

        //manillar
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_manillars_road.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#manillar").append(t_tmp);

        seient();
        mostrar_cinta()
        pneumatic_road()
    }

    //ROAD RIM BRAKE
    if ($("#modalitat").val() == "road_rim") {
        //quadre road
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_road.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#quadre").append(t_tmp);

        //rodes road 
        t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
        t_rodes_road.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#rodes").append(t_tmp)

        //grup disc
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_road.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);

        //manillar
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_manillars_road.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#manillar").append(t_tmp);

        seient();
        mostrar_tija();
        mostrar_cinta();
        pneumatic_road();
    }

    //gravel
    if ($("#modalitat").val() == "gravel") {
        //quadre gravel
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_gravel.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#quadre").append(t_tmp);

        //rodes gravel
        t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
        t_rodes_gravel.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#rodes").append(t_tmp)

        //grup gravel
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_gravel.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);

        //manillar gravel
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_manillars_gravel.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#manillar").append(t_tmp);

        seient();
        mostrar_tija();
        mostrar_cinta();

        //pneumatics gravel
        t_tmp = '<option value="0" selected>Selecciona los Pneumaticos</option>';
        t_pneumatics_gravel.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#pneumatics").append(t_tmp);


    }

    if ($("#modalitat").val() == "mtb") {
        //quadre gravel
        t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
        t_mtb.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#quadre").append(t_tmp);

        //rodes gravel
        t_tmp = '<option value="0" selected>Selecciona las Ruedas</option>';
        t_rodes_mtb.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#rodes").append(t_tmp)

        //grup gravel
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_mtb.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);

        //frens mtb
        t_tmp = '<option value="0" selected>Selecciona un Grupo</option>';
        t_grup_mtb.forEach(element => {
            t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
        });
        $("#grup").append(t_tmp);
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
    t_tmp = '<option value="0" selected>Selecciona el Sillin</option>';
    t_seient.forEach(element => {
        t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
    });
    $("#seient").append(t_tmp);
};

function pneumatic_road() {
    t_tmp = '<option value="0" selected>Selecciona los Pneumaticos</option>';
    t_pneumatics_road.forEach(element => {
        t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
    });
    $("#pneumatics").append(t_tmp);
};

function mostrar_cinta() {
    $("#cinta").parent().show();

    t_tmp = '<option value="0" selected>Selecciona la cinta</option>';
    t_cinta.forEach(element => {
        t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
    });
    $("#cinta").append(t_tmp);
};

function mostrar_tija() {
    $("#tija").parent().show();

    t_tmp = '<option value="0" selected>Selecciona el Cuadro</option>';
    t_tija.forEach(element => {
        t_tmp += '<option value="' + element.preu + '">' + element.nom + '</option>'
    });
    $("#tija").append(t_tmp);
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