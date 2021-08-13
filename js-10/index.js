let arr = [];

function nameFilter(arr) {
    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
    let arrNew = [];
    for (let name of arr) {
        if (!unwantedNames.includes(name)) {
            arrNew.push(name);
        } 
    }
    return arrNew;
}

