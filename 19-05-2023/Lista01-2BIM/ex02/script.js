function validaNumero(e){
    var charCode = (e.which) ? e.which : e.keyCode;
    if((charCode >= 48 && charCode <= 57) || charCode == 8){
        return true;
    }
    else{ return false; }
}
