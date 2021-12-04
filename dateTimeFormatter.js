function formattedNumber(nbr,digits=2){ //if no nbr of digits send use default 2
    var formattedNbr = "";

    if (typeof(nbr) === "string") { //in case a string is provided iso number, return the string
        formattedNbr = nbr;
    }

    if ((typeof(nbr) === "number") && (digits === 2)) {
        if (nbr < 10) {
            formattedNbr = "0" + nbr;
        }
        else {
            formattedNbr = nbr;
        }
    }
        
    if (typeof(nbr) === "number" && (digits === 3)) {
        if (nbr < 10) {
            formattedNbr = "00" + nbr;
        }
        else {
            if (nbr < 100) {
                formattedNbr = "0" + nbr;
            }
            else {
                formattedNbr = nbr;
            }
        }
    } 
    
    if (typeof(nbr) === "number" && ((digits !== 2) || (digits !== 3))) { //in case of different number of digits, just return the number
            formattedNbr = nbr;             
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
    return _prefix + maand + "-" + dag + " " + uur +":"+minuten+":"+sekonden+":"+milisek;
}


module.exports.dtLogger = dtLogger;
module.exports.formatNumber = formattedNumber;

