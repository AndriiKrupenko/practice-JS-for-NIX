function spacey(arr) {
    let newArr = [];
    newArr.push(arr[0]);
    for (i = 1; i < arr.length; i++) {
        let word = newArr[i - 1] + arr[i];
        newArr.push(word);
    }
    return newArr;
}



