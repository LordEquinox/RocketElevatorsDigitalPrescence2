// RESIDENTIAL CALCULATION
function CalculateResidential() {
    var Floors = document.getElementById("floor_resident").value;
    var Apartments = document.getElementById("units").value;
    var category = parseFloat($("input[name='category']:checked").val());
    console.log("Floors", Floors);
    console.log("Apartments", Apartments); console.log("category", category);

        // AVERAGE AMOUNT OF APPARTMNT PER FLOOR (nb d'apprtement par etage)
        Average_Apartments = Math.ceil(Apartments / Floors); 
        console.log("Average_Apartments", Average_Apartments);
        // $('#average_elevators').html(Average_Apartments);

        // QTY OF ELEVATOR SHAFTS (nombre de cages d'ascenseurs)
        var nb_cage = Math.ceil(Average_Apartments / 6); 
        console.log("nb_cage", nb_cage); 
        $('#required_elevators').html(nb_cage);

        // QTY OF ELEVATOR COLUMNS / 20 (nombre de colonnes / 20 etages pour l'edifice)
        var NbColumnLifts = Math.ceil(Floors / 20); 
        console.log("nb_column_lifts", NbColumnLifts); 
        $('#required_column_lifts').html(NbColumnLifts);
        
        // INSTALLATION FEES
        InstallationFees = Math.ceil(Apartments * 7565) * 0.1;
        console.log("InstallationFees", InstallationFees);
        $('#units').html(InstallationFees);


        // SUB-TOTAL PRICE RESIDENTIAL (prix sous-total residentiel)
        PriceResident = (Math.ceil(NbColumnLifts * nb_cage * category) + InstallationFees); 
        console.log("priceResident", PriceResident); 
        $('#subtotal').html(PriceResident);
     

        // TOTAL PRICE RESIDENTIAL (prix sous-total residentiels)
        PriceTotalResident = Math.ceil(PriceResident + category); 
        console.log("PriceTotalResidentt", PriceTotalResident); 
        $('#totalFees').html(PriceTotalResident);

        return PriceResident;

    };