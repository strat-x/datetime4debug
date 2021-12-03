function formattedNumber(nbr,digits="2"){ //if no nbr of digits send use default 2
    if (digits === "2") {
        if (nbr < 10) {
            var formattedNbr = "0" + nbr;
        }
        else {
            var formattedNbr = nbr;
        }
    } 
    else {
        if (digits === "3") {
            if (nbr < 10) {
                var formattedNbr = "00" + nbr;
            }
            else {
                if (nbr < 100) {
                    var formattedNbr = "0" + nbr;
                }
                else {
                    var formattedNbr = nbr;
                }
            }
        } else { //in case of different number of digits, just return the number
            var formattedNbr = nbr;
        }
    }
    return formattedNbr;
}

function dtLogger(_prefix){
    var currentDT = new Date;
    let dag = formattedNumber(currentDT.getDate());
    let maand = formattedNumber(currentDT.getMonth()+1); //January is month 0 ...
    let uur = formattedNumber(currentDT.getHours());
    let minuten = formattedNumber(currentDT.getMinutes()); 
    let sekonden = formattedNumber(currentDT.getSeconds());
    let milisek = formattedNumber(currentDT.getMilliseconds(),"4");
    let formattedDT = _prefix + maand + "-" + dag + " " + uur +":"+minuten+":"+sekonden+":"+milisek
    
    return formattedDT;
}


module.exports = dtLogger;

