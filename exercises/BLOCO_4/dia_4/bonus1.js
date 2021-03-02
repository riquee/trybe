let algarismosRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function retornaNumero(n){

  for(algarismo in algarismosRomanos){

      if(n == algarismo){

          return algarismosRomanos[algarismo];

      }
  }

}


function toAlgarismo(string){

  if(retornaNumero(string)){

      return console.log(retornaNumero(string))

  } else {

      let storage = 0

      for(index=0; index<string.length; index++){

          let n1 = retornaNumero(string[index])
          let n2 = retornaNumero(string[index+1])

          if(n1 < n2){
                  
                  storage = storage - n1
              
          } else  if ( n2 > n1){

              storage = storage + n2
              
          } else {

              storage = storage + n1
          }
      }
      return console.log(storage)
  }

}

toAlgarismo('XXXVIII')