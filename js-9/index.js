let arr = [];

function multArr(arr) {
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        mult = mult * arr[i];
    }
    return mult;
}