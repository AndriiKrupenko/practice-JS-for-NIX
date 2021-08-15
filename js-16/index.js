function findWords(str, num) {
    let remove = /[,\s]/;
    arrWords = str.split(remove);
    let newArrWords = [];
    for (let word of arrWords) {
        if (num < word.length) {
            newArrWords.push(word);
        }
    };
    return newArrWords;
}


