let mas = [21, 3, 4, -11, 5, 89, -34, 18, 54, -10];
let accumulator = 0;
i = 0;
while (i < mas[i].length){
    if (mas[i] > 0){
        accumulator += mas[i]
    }
    i++
}
console.log(accumulator)