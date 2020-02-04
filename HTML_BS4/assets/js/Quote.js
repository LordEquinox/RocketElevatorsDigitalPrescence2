
//BUILDING TYPES
function BuildingType() {
var building_type = $('#building_type').val();

    if (building_type == "Residential") {
        $("#residentialBuildings").show();
        $("#commercialBuildings, #corporateBuildings, #hybridBuildings").hide();
    } else if (building_type == "Commercial") {
        $("#commercialBuildings").show();
        $("#residentialBuildings, #corporateBuildings, #hybridBuildings").hide();
    } else if (building_type == "Corporate") {
        $("#corporateBuildings").show();
        $("#residentialBuildings, #commercialBuildings, #hybridBuildings").hide();
    } else if (building_type == "Hybrid") {
        $("#hybridBuildings").show();
        $("#residentialBuildings, #commercialBuildings, #corporateBuildings").hide();
    }
    
}

