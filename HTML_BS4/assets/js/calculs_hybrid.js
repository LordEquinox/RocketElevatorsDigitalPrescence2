// calculs hybride
function CalculateHybrid() {
    var category = parseFloat($("input[name='category']:checked").val())
    var floorsHybrid = document.getElementById("floor_corp").value;
    var = document.getElementById("underground_corp").value;
    var occupantPFloorHybrid = document.getElementById("occupants_corp").value;
    console.log("floorsHybrid", floorsHybrid);
    console.log("underHybrid", underHybrid);
    console.log("occupantPFloorHybrid", occupantPFloorHybrid);
    console.log("category", category);
    // console.log("service_type_standard", standardService); 
    underHybrid
    // nombre de cages d'ascenseurs requises
    var nb_cage_hybrid = Math.ceil(occupantPFloorHybrid / 1000);
    console.log("nb_cage_hybrid", nb_cage_hybrid);
    $('#required_elevators').html(nb_cage_hybrid);

    // nombre de colonnes d'ascenseur requises
    var NbColumnLifts_Hybrid = Math.ceil(multiFloorsHybrid) / 20;
    console.log("NbColumnLifts_Hybrid", NbColumnLifts_Hybrid);
    $('#required_column_lifts').html(NbColumnLifts_Hybrid);

    // nombre total d'ascenseurs requis
    var TotalQtyElevators_Hybrid = Math.ceil(multiFloorsHybrid) / 20;
    console.log("TotalQtyElevators_Hybrid", TotalQtyElevators_Hybrid);
    $('#required_elevators').html(TotalQtyElevators_Hybrid);

    // nombre d'etages total hybrid
    var multiFloorsHybrid = (floorsHybrid + underHybrid);
    console.log("multiFloorsHybrid", multiFloorsHybrid);

    // prix unitaire par ascenseur
    var averageElevatorCostHybrid = Math.ceil(nb_cage_Hybrid / NbColumnLifts_Hybrid);
    console.log("averageElevatorCostHybrid", averageElevatorCostHybrid);

    // prix sous-total corporate
    PriceHybrid = Math.ceil(averageElevatorCostHybrid * category);
    console.log("PriceCorp", PriceHybrid);
    $('#subtotal').html(PriceHybrid);

    // prix total hybride
    PriceTotalHybrid = Math.ceil(PriceHybrid + category);
    console.log("PriceHybrid", PriceHybrid);
    $('#totalFees').html(PriceHybrid);

    $("input[name='category']").change(function () {
        console.log("change");

        //type d'ìmmeublecolumn_lifts
        var building_type = $('#building_type').val();
        var elevatorsCost;

        if (building_type == "Residential") {
            elevatorsCost = CalculateResidential();
        }
        if (building_type == "Commercial") {
            elevatorsCost = CalculateCommercial();
        }
        if (building_type == "Corporate") {
            elevatorsCost = CalculateCorporate();
        }
        if (building_type == "Hybrid") {
            elevatorsCost = CalculateHybrid();
        }
        var installationCosts;
        //type de frais de service 

        if ($("#service_type_standard").prop("checked") == true) {
            installationCosts = Math.ceil(elevatorsCost * 0.1)
        } else if ($("#service_type_premium").prop("checked") == true) {
            installationCosts = Math.ceil(elevatorsCost * 0.13)
        } else {
            installationCosts = Math.ceil(elevatorsCost * 0.16)
        }
        console.log("installationCosts", installationCosts)
        $('#installation_fees').html(installationCosts);
    });

    $('#building_type').change(function () {
        console.log("Je viens de clicker!!!", $(this).val());
        var building_type = $(this).val();

        if (building_type == "Residential") {
            $("#residential_field_zone").show();
            $("#commercial_field_zone,#corporate_field_zone,#hybrid_field_zone").hide();
        } else if (building_type == "Commercial") {
            $("#commercial_field_zone").show();
            $("#residential_field_zone,#corporate_field_zone,#hybrid_field_zone").hide();
        } else if (building_type == "Corporate") {
            $("#corporate_field_zone").show();
            $("#residential_field_zone,#commercial_field_zone,#hybrid_field_zone").hide();
        } else if (building_type == "Hybrid") {
            $("#hybrid_field_zone").show();
            $("#residential_field_zone,#commercial_field_zone,#corporate_field_zone").hide();
        } else if (building_type == "0") {
            $("#residential_field_zone,#commercial_field_zone,#corporate_field_zone, #hybrid_field_zone").hide();
        }

    })


};