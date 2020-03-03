
$(document).ready(function(){
    esconde();
});

function modalitat(){
    esconde();
    if($("#modalitat").val()=="road_disc"){
        $("#road_disc").parent().show("slow");
    }
    if($("#modalitat").val()=="road_rim"){
        $("#road_rim").parent().show("slow");
    }
    if($("#modalitat").val()=="gravel"){
        $("#gravel").parent().show("slow");
    }
    if($("#modalitat").val()=="mtb"){
        $("#mtb").parent().show("slow");
    }

};
function preu(){
    let total=0;
    total=$("#road_disc").val();

    $("#total").text(total);
};

function esconde(){
    $("#road_disc").parent().hide();
    $("#road_rim").parent().hide();
    $("#gravel").parent().hide();
    $("#mtb").parent().hide();
};