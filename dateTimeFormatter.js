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
    let dag = currentDT.getDate();
    if (dag < 10) { 
        dag = "0" + dag;
    }

    let maand = currentDT.getMonth()+1; //January is month 0 ...
    let uur = currentDT.getHours();
    let minuten = formattedNumber(currentDT.getMinutes());
    
    let sekonden = currentDT.getSeconds();
    let milisek = currentDT.getMilliseconds();
    let formattedDT = _prefix + maand + "-" + dag + " " + uur +":"+minuten+":"+sekonden+":"+milisek
    //console.log("this function will format " + currentDT + " into " +formattedDT);
    return formattedDT;
}


module.exports = dtLogger;

