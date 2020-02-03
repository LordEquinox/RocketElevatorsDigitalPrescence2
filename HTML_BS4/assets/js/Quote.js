var elevatorsCost;
//BUILDING TYPES
function BuildingType() {
var building_type = $('#building_type').val();

    if (building_type == "Residential") {
        $("#residentialBuildings").show();
        $("#commercialBuildings").hide();
        $("#corporateBuildings").hide();
        $("#hybridBuildings").hide();
    } else if (building_type == "Commercial") {
        $("#commercialBuildings").show();
        $("#residentialBuildings").hide();
        $("#corporateBuildings").hide();
        $("#hybridBuildings").hide();
    } else if (building_type == "Corporate") {
        $("#commercialBuildings").show();
        $("#residentialBuildings").hide();
        $("#corporateBuildings").hide();
        $("#hybridBuildings").hide();
    } else if (building_type == "Hybrid") {
        $("#hybridBuildings").show();
        $("#residentialBuilding").hide()
        $("#commercialBuildings").hide();
        $("#corporateBuildings").hide();
    }
    
}

