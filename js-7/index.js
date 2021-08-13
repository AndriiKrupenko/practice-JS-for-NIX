let weight = [1, 3, 4, 5, 10];
let recommendation = '';

for (let num of weight) {
  if (num < 4) {
    recommendation = 'Пора перекусить';
    console.log(recommendation);
  } else if (num >= 4 && num <= 5.5) {
    recommendation = 'Вес в норме';
    console.log(recommendation);
  } else if (num > 5) {
    recommendation = 'Пора на тренировку';
    console.log(recommendation);
  }
}


