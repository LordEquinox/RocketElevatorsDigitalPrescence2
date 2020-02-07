var type;
var tax;

function selector() {
    var category = $("input[name='category']:checked").val();

    // var ServiceVariable = ($("input[class='radioService']:checked").value);
    // console.log(ServiceVariable);

    if (parseInt(category) == 7565) {
        type = 7565
        tax = 0.1
    } else if (parseInt(category) == 12345) {
        type = 12345
        tax = 0.13
   } else if (parseInt(category) == 15400) {
        type = 15400
        tax = 0.16
    } else if ($("input[name='category']:unchecked")) {
        alert('Check one of the radio buttons!!!');
    }
    console.log('type', type);
    console.log('tax', tax);
};

// RESIDENTIAL CALCULATION
function CalculateResidential(category) {

    var Floors = document.getElementById("floor_resident").value;
    var Apartments = document.getElementById("units").value;
    var ServiceVariable = parseFloat($("input[name='category']:checked").val());
    var RealFeez = parseFloat($("input[name='category']:checked").val());
    var category = parseFloat($("input[name='category']:checked").val());
    // console.log("ServiceVariable", ServiceVariable);
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
       selector();
       
       // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)
       ServiceFees = Math.ceil(nb_cage * type);
       console.log("ServiceFees", ServiceFees);
       $('#subTotal').html(ServiceFees);


       // INSTALLATION FEES (frais d'installation)
       InstallFees = Math.ceil(ServiceFees * tax);
       console.log("InstallFees", InstallFees);
       $('#InstallFees').html(InstallFees);


 
       // TOTAL PRICE RESIDENTIAL (prix total residentiels)
       PriceTotalResident = Math.ceil(ServiceFees + InstallFees); 
       console.log("PriceTotalResident", PriceTotalResident); 
       $('#totalFees').html(PriceTotalResident);
};

// COMMERCIAL CALCULATION
function CalculateCommercial(category) {
    var elevatorsComm = document.getElementById("elevatorsCommercial").value;
    console.log('elevator units', elevatorsComm);
    console.log("category", category);
    $('#required_elevators').html(elevatorsComm);
    selector();

    // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)  
    var ServiceFeeComm = Math.ceil(elevatorsComm * type);
    console.log("priceCommercial", ServiceFeeComm);
    $('#subTotal').html(ServiceFeeComm);

    // INSTALLATION FEES (frais d'installation)
    var InstallFeesComm = Math.ceil(ServiceFeeComm * tax);
    console.log("InstallFeesComm", InstallFeesComm);
    $('#InstallFees').html(InstallFeesComm);

    // TOTAL PRICE COMMERCIAL (prix total COMMERCIAL)
    TotalComm = Math.ceil(ServiceFeeComm + InstallFeesComm);
    console.log("TotalComm", TotalComm);
    $('#totalFees').html(TotalComm);
};

function CalculateCorporate(category) {
    var maxOccPerFloorCorp = parseInt(document.getElementById("occupants_corp").value);
    var floorsCorp = parseInt(document.getElementById("floor_corp").value);
    var underCorp = parseInt(document.getElementById("underground_corp").value);
    console.log("maxOccPerFloorCorp", maxOccPerFloorCorp);
    console.log("floorsCorp", floorsCorp);
    console.log("underCorp", underCorp);
    console.log("category", category);
    selector();

    // TOTAL AMOUNT OF FLOORS
    var FloorsCorpFinal = Math.ceil(floorsCorp + underCorp);
    console.log("FloorsCorpFinal", FloorsCorpFinal);

    // TOTAL QTY OF ENTITIES IN BUILDINGS
    var qtyOccupantsCorp = Math.ceil(maxOccPerFloorCorp * FloorsCorpFinal);
    console.log("qtyOccupantsCorp", qtyOccupantsCorp);


    //REQUIRED QTY OF ELEVATORS
    var elevatorQtyCorpReq = Math.ceil(qtyOccupantsCorp / 1000);
    console.log("elevatorQtyCorpReq", elevatorQtyCorpReq);
    $('#required_elevators').html(elevatorQtyCorpReq);
       selector();

    // REQUIRED QTY OF COLUMNS
    var columnsQtyReq = Math.ceil((FloorsCorpFinal) / 20);
    console.log("columnsQtyReq", columnsQtyReq);
    $('#required_column_lifts').html(columnsQtyReq);
       selector();
    

    // TOTAL QTY OF ELEVATORSHAFT PER COLUMN
    var elevetorShaftPerColumn = Math.ceil(elevatorQtyCorpReq / columnsQtyReq);
    console.log("elevetorShaftPerColumn", elevetorShaftPerColumn);

    // TOTAL QTY OF ELEVATORS NEEDED
    //var elevatorsTotalCorp = Math.ceil(elevatorQtyReq + columnsQtyReq);
    //console.log("elevatorsTotalCorp", elevatorsTotalCorp );

    // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)  
    var ServiceFeeCorp = Math.ceil(elevatorQtyCorpReq * type);
    console.log("ServiceFeeCorp", ServiceFeeCorp);
    $('#subTotal').html(ServiceFeeCorp);

    // INSTALLATION FEES (frais d'installation)
    var InstallFeesCorp = Math.ceil(ServiceFeeCorp * tax);
    console.log("InstallFeesCorp", InstallFeesCorp);
    $('#InstallFees').html(InstallFeesCorp);

    // TOTAL PRICE COMMERCIAL (prix total COMMERCIAL)
    TotalCorp = Math.ceil(ServiceFeeCorp + InstallFeesCorp);
    console.log("TotalCorp", TotalCorp);
    $('#totalFees').html(TotalCorp);








}
