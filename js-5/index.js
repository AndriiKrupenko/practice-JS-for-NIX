let firstNumber = Number(prompt('Введите первое число:', ''));
let secondNumber = Number(prompt('Введите второе число:', ''));

if (firstNumber > secondNumber) {
    alert(firstNumber + secondNumber)
} else if (firstNumber < secondNumber) {
    alert(firstNumber * secondNumber)
} else if (firstNumber===secondNumber) {
    alert('числа одинаковые')
} else {
    alert('что-то пошло не так...')
}



