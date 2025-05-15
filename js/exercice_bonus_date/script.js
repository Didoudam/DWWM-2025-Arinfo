//exercice 1

let date = new Date(2012, 1, 20,3,12);
console.log(date);


//exercice 2

function getLocalDay(date){
    let dateNumber = date.getDay();
    if (dateNumber == 0) {
        dateNumber = 7;
    }
    return dateNumber
}

console.log(getLocalDay(date));


//exercice 3

function getWeekDay(date){
    let dateTab = ["su","mo","tu","we","th","fr","sa"]
    return dateTab[date.getDay()]
    // return dateTab[datenumber]
}

console.log(getWeekDay(date));


//exercice 4

