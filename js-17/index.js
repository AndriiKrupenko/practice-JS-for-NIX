function divisibleByThree(strNumber) {
    let arrNumber = [];
    arrNumber = strNumber.split('');
    let sumNumber = arrNumber.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    if (sumNumber % 3 == 0) {
        return true;
    } else {
        return false;
    }
}



