let newArray = []
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(i=0; i<numbers.length-1; i++){

  if(numbers[i + 1]){
    newArray.push(numbers[i] * numbers[i + 1])
  } else {
    newArray.push(numbers[i] * 2)
  }

}



console.log(newArray)