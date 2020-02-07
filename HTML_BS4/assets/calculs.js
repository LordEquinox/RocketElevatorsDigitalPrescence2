// RESIDENTIAL CALCULATION
function CalculateResidential(category) {

    var ServiceVariable;
    var RealFeez;

    var Floors = document.getElementById("floor_resident").value;
    var Apartments = document.getElementById("units").value;
    var ServiceVariable = parseFloat($("input[name='category']:checked").val());
    var RealFeez = parseFloat($("input[name='category']:checked").val());
    var category = parseFloat($("input[name='category']:checked").val());
    console.log("ServiceVariable", ServiceVariable);
    console.log("Floors", Floors);
    console.log("Apartments", Apartments);
    console.log("category", category);

       // AVERAGE AMOUNT OF APPARTMENT PER FLOOR (nb d'apprtement par etage)
       Average_Apartments = Math.ceil(Apartments / Floors); 
       console.log("Average_Apartments", Average_Apartments);

       // QTY OF ELEVATOR SHAFTS (nombre de cages d'ascenseurs)
       var nb_cage = Math.ceil(Average_Apartments / 6); 
       console.log("nb_cage", nb_cage); 
       $('#required_elevators').html(nb_cage);

       // QTY OF ELEVATOR COLUMNS / 20 (nombre de colonnes / 20 etages pour l'edifice)
       var NbColumnLifts = Math.ceil(Floors / 20); 
       console.log("nb_column_lifts", NbColumnLifts); 
       $('#required_column_lifts').html(NbColumnLifts);
       
       // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)
       ServiceFees = Math.ceil(nb_cage * ServiceVariable);
       console.log("ServiceFees", ServiceFees);
       $('#subTotal').html(ServiceFees);


       // INSTALLATION FEES (frais d'installation)
       InstallFees = Math.ceil(ServiceFees * RealFeez);
       console.log("InstallFees", InstallFees);
       $('#InstallFees').html(InstallFees);

 
       // TOTAL PRICE RESIDENTIAL (prix total residentiels)
       PriceTotalResident = Math.ceil(ServiceFees + InstallFees); 
       console.log("PriceTotalResident", PriceTotalResident); 
       $('#totalFees').html(PriceTotalResident);
   };
};

function selector() {
        //Excelium 3
    //Standard 1
    //Premium 2
var category = $("input[name=category]:checked").val();
console.log("category", category);
   
var category_price = null;
if( category == "1") {
   category_price = 7565;
category_price == "2" = 'none';
category_price == "3" = 'none';
}

var category_price = null;
if( category == "2") {
    category_price = 12345;
category_price == "1" = 'none';
category_price == "3" = 'none';
}

var category_price = null;
if( category == "3") {
    category_price = 15400;
    category_price == "1" = 'none';
    category_price == "2" = 'none';
}


};

function selectedFees() {
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
    

};




// COMMERCIAL CALCULATION
function CalculateCommercial() {
    var elevatorsComm = document.getElementById("elevatorsCommercial").value;
    var category = parseFloat($("input[name='category']:checked").val());
    console.log('elevator units', elevatorsComm)
    console.log("category", category);
    $('#required_elevators').html(elevatorsComm);

    // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)  
    var ServiceFeeComm = Math.ceil(elevatorsComm * ServiceVariable);
    console.log("priceCommercial", ServiceFeeComm);
    $('#subTotal').html(ServiceFeeComm);

    // INSTALLATION FEES (frais d'installation)
    var InstallFeesComm = Math.ceil(ServiceFeeComm * RealFeez);
    console.log("InstallFeesComm", InstallFeesComm);
    $('#InstallFees').html(InstallFeesComm);

    // TOTAL PRICE COMMERCIAL (prix total COMMERCIAL)
    TotalComm = Math.ceil(ServiceFeeComm + InstallFees);
    console.log("PriceTotalResident", TotalComm);
    $('#totalFees').html(TotalComm);
};

function CalculateCorporate() {

    var EntitiesCorp = document.getElementById("entities_corp").value;
    var FloorCorp = document.getElementById("floor_corp").value;
    var elevatorsCorp = document.getElementById("entities_corp").value;
    var category = parseFloat($("input[name='category']:checked").val());
    var floorsCorp = document.getElementById("floor_corp").value;
    var underCorp = document.getElementById("underground_corp").value;
    var occupantPFloorCorp = document.getElementById("occupants_corp").value;
    console.log("floorsCorp", floorsCorp);
    console.log("underCorp", underCorp);
    console.log("occupantPFloorCorp", occupantPFloorCorp);
    console.log("category", category);
    console.log("entities_corp", EntitiesCorp);
    console.log("floor_corp", FloorCorp);

    $('#required_elevators').html(elevatotsTotalCorp);

    
   



    //QTY OF FLOOR LEVELS CORPORATE (nombre d'etages total corporatif)
    var multiFloorsCorp = (floorsCorp + underCorp);
    console.log("multiFloorsCorp", multiFloorsCorp);

    // TOTAL OCCUPANTS CORPORATE (nombre d'occupants total)
    var occ_corp_total = Math.ceil(occupantPFloorCorp * multiFloorsCorp);
    console.log(occ_corp_total, occ_corp_total);

    // REQUIRED QTY OF COLUMNS (nombre de colonnes d'ascenseur requises)
    var NbColumnLifts_Corp = Math.ceil((multiFloorsCorp) / 20);
    console.log("NbColumnLifts_Corp", NbColumnLifts_Corp);
    $('#required_column_lifts').html(NbColumnLifts_Corp);

    // QTY REQUIRED ELEVATORS PER COLUMN (quantité requise d'ascenseur par colonne)
    var elevatorsPerColCorp = Math.ceil((occ_corp_total) / 1000);
    console.log("elevatorsPerColCorp", elevatorsPerColCorp);

    // QTY REQUIRED ELEVATOR SHAFT PER COLUMN (quantité de cages d'ascenseur nécessaires)
    var elevatorShaftCorp = Math.ceil(elevatorsPerColCorp / NbColumnLifts_Corp);
    console.log("elevatorsPerColCorp", elevatorsPerColCorp);

    //TOTAL AMOUNT OF REQUIRED ELEVATORS (nombre total d'ascenseur nécessaires
    var elevatotsTotalCorp = Math.ceil(NbColumnLifts_Corp * elevatorsPerColCorp);
    console.log("elevatotsTotalCorp", elevatotsTotalCorp);
    $('#required_elevators').html(elevatotsTotalCorp);

    // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)  
    var ServiceFeeCorp = Math.ceil(elevatotsTotalCorp * ServiceVariable);
    console.log("ServiceFeeCorp)", ServiceFeeCorp);
    $('#subTotal').html(ServiceFeeCorp);

    // INSTALLATION FEES (frais d'installation)
    var InstallFeesCorp = Math.ceil(ServiceFeeCorp * RealFeez);
    console.log("InstallFeesCrp", InstallFeesCorp);
    $('#InstallFees').html(InstallFeesCorp);

    // TOTAL PRICE COMMERCIAL (prix total COMMERCIAL)
    TotalCorp = Math.ceil(ServiceFeeCorp + InstallFeesCorp);
    console.log("PriceTotalResident", TotalCorp);
    $('#totalFees').html(TotalCorp);

};