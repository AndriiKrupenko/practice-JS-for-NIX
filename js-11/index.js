let arr = [];
let arr2 = [];

let result = (arr, arr2) => { let count = arr.reduce((a, b) => a * b) - arr2.reduce((a, b) => a * b); return count; };