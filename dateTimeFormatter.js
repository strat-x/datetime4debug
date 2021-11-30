function formattedNumber(nbr){
    if (nbr < 10) {
        var formattedNbr = "0" + nbr;
    }
    else {
        var formattedNbr = nbr;
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
    let milisek = formattedNumber(currentDT.getMilliseconds());
    let formattedDT = _prefix + maand + "-" + dag + " " + uur +":"+minuten+":"+sekonden+":"+milisek
    
    return formattedDT;
}


module.exports = dtLogger;

