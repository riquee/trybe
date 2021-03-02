function add(num1, num2) {

  let convert1 = ''; convert1 += num1
  let convert2 = ''; convert2 += num2
  let string = '';
  let number = 0;

  for(index=0; index<convert1.length; index++){


      number = parseInt(convert1[index]) + parseInt(convert2[index])
      string += number

      
  }

  return console.log(number = parseInt(string))

}

add(16, 18)