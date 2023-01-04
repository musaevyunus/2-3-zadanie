let mas = ['js', 'Java', 'Python', 'Go', 'Swift', 'C++', 'C#', 'PHP', 'Kotlin', 'Arduino'];
let accumulator = [];
for (let i = 0; i < mas.length; i++){
    if (mas[i].length > 3){
        
        accumulator.push(mas[i])
    }
}
  console.log(accumulator)