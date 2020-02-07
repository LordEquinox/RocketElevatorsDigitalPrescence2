for (x = 0; x < mySelection.length; x++) {

    mySelection[x].onclick = function () {
        if (rbSelectSatndard) {
            if (setCheck(document.getElementById('service_type_standard')) != this) {
                setCheck = this;
            } else {
                this.checked = false;
                setCheck = null;
            }
        } else if (rbSelectPremium) {
            if (setCheck(document.getElementById('service_type_premium')) != this) {
                setCheck = this;
            } else {
                this.checked = false;
                setCheck = null;
            }
        } else(rbSelectExcelium) {
            if (setCheck(document.getElementById('service_type_excelsium')) != this) {
                setCheck = this;
            } else {
                this.checked = false;
                setCheck = null;
            }
        }



    };