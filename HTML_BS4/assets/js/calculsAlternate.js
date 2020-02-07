// RESIDENTIAL CALCULATION
function CalculateResidential(category) {

    var ServiceVariable;
    var RealFeez;

    var Floors = document.getElementById("floor_resident").value;
    var Apartments = document.getElementById("units").value;
    var ServiceVariable = parseFloat($("input[name='category']:checked").val());
    var RealFeez = parseFloat($("input[name='category']:checked").val());

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
    console.log("nb_cage", nb_cage)
    console.log("ServiceFees", ServiceFees);
    console.log("ServiceVariable", ServiceVariable)
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

function selector() {
    var type = $("#building_type option:selected").val();
    var category = $("input[name='category']:checked").val();
    // var ServiceVariable = ($("input[class='radioService']:checked").value);
    // console.log(ServiceVariable);

    if (parseInt(category) == 7565) {
        if (type === "Residential") {
            CalculateResidential(category)
        }

    } 
    else if (parseInt(category) == 12345) {
        if (type === "Residential") {
            CalculateResidential(category)
        }

    } 
    else if (parseInt(category) == 15400) {
        if (type === "Commercial") {
            CalculateResidential(category)
        }
    }

    else if (parseInt(category) == 7565) {
        if (type === "Commercial") {
            CalculateResidential(category)
        }

    } 
    else if (parseInt(category) == 12345) {
        if (type === "Commercial") {
            CalculateResidential(category)
        }

    } 
    else if (parseInt(category) == 15400) {
        if (type === "Commercial") {
            CalculateResidential(category)
        }
    }

    else if (parseInt(category) == 7565) {
        if (type === "Corporate") {
            CalculateResidential(category)
        }

    } 
    else if (parseInt(category) == 12345) {
        if (type === "Corporate") {
            CalculateResidential(category)
        }

    } 
    else if (parseInt(category) == 15400) {
        if (type === "Corporate") {
            CalculateResidential(category)
        }
    }

    else if (parseInt(category) == 7565) {
        if (type === "Hybrid") {
            CalculateResidential(category)
        }

    } 
    else if (parseInt(category) == 12345) {
        if (type === "Hybrid") {
            CalculateResidential(category)
        }

    } 
    else if (parseInt(category) == 15400) {
        if (type === "Hybrid") {
            CalculateResidential(category)
        }
    }


    
};

function selectedFees() {
    var RealFeez = ($("input[class='radioService']:checked").value);
    
    if (parseFloat(category) == 0.1) {
        if (type === "Residential") {
            CalculateResidential(category)
        }
    } else if (parseFloat(category) == 0.3) {
        if (type === "Residential") {
            CalculateResidential(category)
        }

    } else if (parseFloat(category) == 0.16) {
        if (type === "Residential") {
            CalculateResidential(category)
        }
    
        if (parseFloat(category) == 0.1) {
            if (type === "Commercial") {
                CalculateCommercial(category)
            }
        } else if (parseFloat(category) == 0.3) {
            if (type === "Commercial") {
                CalculateCorporate(category)
            }
    
        } else if (parseFloat(category) == 0.16) {
            if (type === "Commercial") {
                CalculateCorporate(category)
            }
            if (parseFloat(category) == 0.1) {
                if (type === "Commercial") {
                    CalculateCorporate(category)
                }
            } else if (parseFloat(category) == 0.3) {
                if (type === "Commercial") {
                    CalculateCorporate(category)
                }
        
            } else if (parseFloat(category) == 0.16) {
                if (type === "Commercial") {
                    CalculateCorporate(category)
                }
                if (parseFloat(category) == 0.1) {
                    if (type === "Commercial") {
                        CalculateHybrid(category)
                    }
                } else if (parseFloat(category) == 0.3) {
                    if (type === "Commercial") {
                        CalculateHybrid(category)
                    }
            
                } else if (parseFloat(category) == 0.16) {
                    if (type === "Commercial") {
                        CalculateHybrid(category)
                    }

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


 // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)  
    var ServiceFeeComm = Math.ceil(elevatorsComm * ServiceVariable);
    console.log("priceCommercial", ServiceFeeComm);
    $('#subTotal').html(ServiceFeeComm);

    // INSTALLATION FEES (frais d'installation)
    var InstallFeesComm = Math.ceil(ServiceFeeComm * RealFeez);
    console.log("InstallFeesComm", InstallFeesComm);
    $('#InstallFees').html(InstallFeesComm);

};