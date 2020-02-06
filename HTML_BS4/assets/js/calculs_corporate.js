// COMMERICAL CALCULATION
var ServiceVariable;
var RealFeez;

function selector(){
    ServiceVariable = ($("input[class='radioService']:checked").value)
    if (ServiceVariable = 7565) {
        Feez = 0.1
    }
    else if (ServiceVariable = 12345) {
        Feez = 0.3
    }
    else if (ServiceVariable = 15400){
        Feez = 0.6
    }
    
    RealFeez = Feez
};

function CalculateCorporate() {

    var elevatorsCorp = document.getElementById("entities_corp").value;
    var category = parseFloat($("input[name='category']:checked").val());
    var floorsCorp = document.getElementById("floor_corp").value;
    var underCorp = document.getElementById("underground_corp").value;
    var occupantPFloorCorp = document.getElementById("occupants_corp").value;
    console.log("floorsCorp", floorsCorp);
    console.log("underCorp", underCorp);
    console.log("occupantPFloorCorp", occupantPFloorCorp);
    console.log("category", category);
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
    TotalCorp = Math.ceil(ServiceFeeCorp + InstallFees);
    console.log("PriceTotalResident", TotalCorp);
    $('#totalFees').html(TotalCorp);

};
