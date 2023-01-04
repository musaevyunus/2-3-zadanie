let mas = [21, 3, 4, -11, 5, 89, -34, 18, 54, -10];
let accumulatorOdd = [];
for (let i = 0; i < mas.length; i++){
if (mas[i] % 2 !== 0){
    accumulatorOdd.push(mas[i])
}
  }
  console.log(accumulatorOdd)