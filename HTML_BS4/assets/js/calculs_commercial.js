// COMMERCIAL CALCULATION
var ServiceVariable;
var RealFeez;

function selector() {
    ServiceVariable = ($("input[class='radioService']:checked").value)
    if (ServiceVariable = 7565) {
        Feez = 0.1
    } else if (ServiceVariable = 12345) {
        Feez = 0.3
    } else if (ServiceVariable = 15400) {
        Feez = 0.6
    }

    RealFeez = Feez
};


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