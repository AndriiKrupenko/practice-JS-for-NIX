let arr = [10, 20, 30, 50, 235, 3000];

let out_num = document.getElementById('out_num');

let p = ' ';

for (let num of arr) {
  let numArr = (''+num)[0];
    if (numArr == 1 || numArr == 2 || numArr == 5) {
        p = p + num + ' ';
        out_num.innerHTML = p;
    }
}


