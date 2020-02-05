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
        
        // SERVICE FEES
        ServiceFees = Math.ceil(nb_cage * category);
        console.log("ServiceFees", ServiceFees);


        // // SUB-TOTAL PRICE RESIDENTIAL (prix sous-total residentiel)
        // PriceResident = Math.ceil((nb_cage * category) + ServiceFees); 
        // console.log("PriceResident", PriceResident); 
        // $('#subTotal').html(PriceResident);

        // INSTALLATION FEES (frais d'installation)
        InstallFees = Math.ceil(ServiceFees * 0.1);
        console.log("#InstallFees", InstallFees);
     
//PriceResident * 0.1 = x
//PriceResident + x = Total
        // TOTAL PRICE RESIDENTIAL (prix sous-total residentiels)
        PriceTotalResident = Math.ceil(ServiceFees + InstallFees); 
        console.log("PriceTotalResident", PriceTotalResident); 
        $('#totalFees').html(PriceTotalResident);
    };