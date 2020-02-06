// RESIDENTIAL CALCULATION
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
        ServiceFeesRes = Math.ceil(nb_cage * ServiceVariable);
        console.log("ServiceFees", ServiceFeesRes);
        $('#subTotal').html(ServiceFeesRes);


        // INSTALLATION FEES (frais d'installation)
        InstallFeesRes = Math.ceil(ServiceFees * RealFeez);
        console.log("InstallFees", InstallFeesRes);
        $('#InstallFees').html(InstallFeesRes);

  
        // TOTAL PRICE RESIDENTIAL (prix total residentiels)
        PriceTotalResident = Math.ceil(ServiceFeesRes + InstallFeesRes); 
        console.log("PriceTotalResident", PriceTotalResident); 
        $('#totalFees').html(PriceTotalResident);
    };