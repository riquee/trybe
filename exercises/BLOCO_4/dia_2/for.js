let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  total = total + numbers[i];
  console.log(total);
}

let media = total / numbers.length;
console.log(media);

media > 20 ? console.log("maior que 20") : console.log("menor ou igual a 20");

let maior = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log(maior);

let impar = 0;
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 1) {
    impar++;
  }
}

if (impar == 0) console.log("nenhum valor impar encontrado");

let menor = maior;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor);


let array = []
for(i=0; i<=25; i++){

    array.push(i)
    console.log(array[i] / 2)

}