
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


function selector() {
    ServiceVariable = ($("input[class='radioService']:checked").value)
    if (parseInt(ServiceVariable) == 7565) {
    } else if (parseInt(ServiceVariable) == 12345) {
    } else if (parseInt(ServiceVariable) == 15400) {
    }
};

function selectedFees() {
    RealFeez = ($("input[class='radioService']:checked").value)
    if (parseFloat(RealFeez) == 0.1) {
    } else if (parseFloat(RealFeez) == 0.3) {
    } else if (parseFloat(RealFeez) == 0.4) {
    }

    RealFeez = Feez
}



// RESIDENTIAL CALCULATION
function CalculateResidential() {
    var Floors = document.getElementById("floor_resident").value;
    var Apartments = document.getElementById("units").value;
    var category = parseFloat($("input[name='category']:checked").val());
    
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