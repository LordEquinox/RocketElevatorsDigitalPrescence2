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
    // var ServiceVariable = parseFloat($("input[name='category']:checked").val());
    // var RealFeez = parseFloat($("input[name='category']:checked").val());
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

//     else if (parseInt(category) == 7565) {
//         if (type === "Commercial") {
//             CalculateResidential(category)
//         }

//     } 
//     else if (parseInt(category) == 12345) {
//         if (type === "Commercial") {
//             CalculateResidential(category)
//         }

//     } 
//     else if (parseInt(category) == 15400) {
//         if (type === "Commercial") {
//             CalculateResidential(category)
//         }
//     }

//     else if (parseInt(category) == 7565) {
//         if (type === "Corporate") {
//             CalculateResidential(category)
//         }

//     } 
//     else if (parseInt(category) == 12345) {
//         if (type === "Corporate") {
//             CalculateResidential(category)
//         }

//     } 
//     else if (parseInt(category) == 15400) {
//         if (type === "Corporate") {
//             CalculateResidential(category)
//         }
//     }

//     else if (parseInt(category) == 7565) {
//         if (type === "Hybrid") {
//             CalculateResidential(category)
//         }

//     } 
//     else if (parseInt(category) == 12345) {
//         if (type === "Hybrid") {
//             CalculateResidential(category)
//         }

//     } 
//     else if (parseInt(category) == 15400) {
//         if (type === "Hybrid") {
//             CalculateResidential(category)
//         }
//     }


    
// };

// function selectedFees() {
//     var RealFeez = ($("input[class='radioService']:checked").value);
    
//     if (parseFloat(category) == 0.1) {
//         if (type === "Residential") {
//             CalculateResidential(category)
//         }
//     } else if (parseFloat(category) == 0.3) {
//         if (type === "Residential") {
//             CalculateResidential(category)
//         }

//     } else if (parseFloat(category) == 0.16) {
//         if (type === "Residential") {
//             CalculateResidential(category)
//         }
    
//       }  if (parseFloat(category) == 0.1) {
//             if (type === "Commercial") {
//                 CalculateCommercial(category)
//             }
//         } else if (parseFloat(category) == 0.3) {
//             if (type === "Commercial") {
//                 CalculateCommercial(category)
//             }
    
//         } else if (parseFloat(category) == 0.16) {
//             if (type === "Commercial") {
//                 CalculateCommercial(category)
//             }
//         }if (parseFloat(category) == 0.1) {
//                 if (type === "Corporate") {
//                     CalculateCorporate(category)
//                 }
//             } else if (parseFloat(category) == 0.3) {
//                 if (type === "Corporate") {
//                     CalculateCorporate(category)
//                 }
        
//             } else if (parseFloat(category) == 0.16) {
//                 if (type === "Corporate") {
//                     CalculateCorporate(category)
//                 }
//             } if (parseFloat(category) == 0.1) {
//                     if (type === "Hybrid") {
//                         CalculateHybrid(category)
//                     }
//                 } else if (parseFloat(category) == 0.3) {
//                     if (type === "Hybrid") {
//                         CalculateHybrid(category)
//                     }
            
//                 } else if (parseFloat(category) == 0.16) {
//                     if (type === "Hybrid") {
//                         CalculateHybrid(category)
//                     }
//                 }

// };

// COMMERCIAL CALCULATION
function CalculateCommercial() {
    var elevatorsComm = document.getElementById("elevatorsCommercial").value;
    console.log('elevator units', elevatorsComm)
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
    console.log("PriceTotalResident", TotalComm);
    $('#totalFees').html(TotalComm);
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
    selector();

    // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)  
    var ServiceFeeCorp = Math.ceil(elevatotsTotalCorp * type);
    console.log("ServiceFeeCorp)", ServiceFeeCorp);
    $('#subTotal').html(ServiceFeeCorp);

    // INSTALLATION FEES (frais d'installation)
    var InstallFeesCorp = Math.ceil(ServiceFeeCorp * tax);
    console.log("InstallFeesCrp", InstallFeesCorp);
    $('#InstallFees').html(InstallFeesCorp);

    // TOTAL PRICE COMMERCIAL (prix total COMMERCIAL)
    TotalCorp = Math.ceil(ServiceFeeCorp + InstallFeesCorp);
    console.log("PriceTotalResident", TotalCorp);
    $('#totalFees').html(TotalCorp);

};