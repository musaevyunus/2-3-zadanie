let mas = ['Madina', 'Karina', 'Anzor', 'Imran', 'Amira', 'Dubina', 'Zaira', 'Django', 'Ramzan', 'Adam'];
let accumulator = [];
for (let i = 0; i < mas.length; i++){
  if (mas[i][0] === 'A') {
    accumulator.push(mas[i])
   
  }
}
console.log(accumulator)