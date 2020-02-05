function CalculateCommercial() {
    var Apartments = document.getElementById("units").value;
    var category = parseFloat($("input[name='category']:checked").val());
    console.log("Floors", Floors);
    console.log("category", category);

/*
    var FloorsComm = document.getElementById("floor_comm").value;
    var UndergroundComm = document.getElementById("underground_comm").value;
    var category = parseFloat($("input[name='category']:checked").val());
    var elevatorCommercial = document.getElementById("elevatorsCommercial").value;
    console.log("FloorsComm", FloorsComm);
    console.log("UndergroundComm", UndergroundComm);
    console.log("category", category);
    console.log('#elevatorsCommercial').html(elevatorsC);
    console.log("elevatorShaftCommercial")html(elevatorCommercial);

    /*
    // nb de colonnes requises
    var columnLiftsCommercial = document.getElementById("lift_commercial").value;
    // console.log("columnLiftsCommercial", columnLiftsCommercial);

    // nb etages total (incluant sous-sol)
    var multiFloorsCommercial = (FloorsComm + UndergroundComm);
    console.log("multiFloorsCommercial", multiFloorsCommercial);

    // nb total d'ascenseurs
    var nbTotalElevatorsComm = Math.ceil(elevatorShaftCommercial / columnLiftsCommercial);
    console.log("nbTotalElevatorsComm", nbTotalElevatorsComm);


    // prix sous-total commercial    
    var PriceCommercial = Math.ceil(elevatorShaftCommercial * category);
    console.log("priceCommercial", PriceCommercial);
    $('#subtotal').html(PriceCommercial);

    // prix total commercial
    var PriceTotalCommercial = Math.ceil(PriceCommercial + category);
    console.log("priceTotalCommercial", PriceTotalCommercial);
    $('#totalFees').html(PriceCommercial);
*/

        // AVERAGE AMOUNT OF APPARTMNT PER FLOOR (nb d'apprtement par etage)
       /* 
       Average_Apartments = Math.ceil(Apartments / Floors); 
        console.log("Average_Apartments", Average_Apartments);
        $('#average_elevators').html(Average_Apartments);
        */

        // QTY OF ELEVATOR SHAFTS (nombre de cages d'ascenseurs)
        var elevatorCommercial = document.getElementById("elevatorsCommercial").value; 
        console.log("nb_cage", nb_cage); 
        $('#required_elevators').html(elevatorCommercial);

        // QTY OF ELEVATOR COLUMNS / 20 (nombre de colonnes / 20 etages pour l'edifice)
        var NbColumnLifts = Math.ceil(Floors / 20); 
        console.log("nb_column_lifts", NbColumnLifts); 
        $('#required_column_lifts').html(NbColumnLifts);
        
        // SERVICE FEES = SUB-TOTAL (frais de service = sous-total)
        ServiceFees = Math.ceil(elevatorCommercial * category);
        console.log("ServiceFees", ServiceFees);
        $('#subTotal').html(ServiceFees);


        // INSTALLATION FEES (frais d'installation)
        InstallFees = Math.ceil(ServiceFees * 0.1);
        console.log("InstallFees", InstallFees);
        $('InstallFees').html(InstallFees);

  
        // TOTAL PRICE RESIDENTIAL (prix total residentiels)
        PriceTotalResident = Math.ceil(ServiceFees + InstallFees); 
        console.log("PriceTotalResident", PriceTotalResident); 
        $('#totalFees').html(PriceTotalResident);
    }; 