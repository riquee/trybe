function palindromo(nome){

    let nomeInvertido = ''
    
        for(index=1; index<=nome.length; index++){
            
            nomeInvertido += nome[nome.length - index];
        }
    
        return console.log(nome == nomeInvertido ? true : false)
    }
    
    palindromo('arara')
    
    function numeroMaior(array){
    
        let position;
        let maior = 0;
    
        for(index=0; index<array.length; index++){
    
            if(array[index] > maior){
                maior = array[index]
                position = index;
                
            }
    
    
    
    
        }
    
        return console.log(position)
    }
    
numeroMaior([2, 4, 6, 7, 10, 0, 10])

function menorNumero(array){

   let menor = 0;
   let position;
    for(index=0; index<array.length; index++){

        for(index2=0; index2<array.length; index2++){

            if(array[index] < array[index2] && array[index] >= 0){

                menor = array[index]
                position = index+1
            }
        }

    }

    return console.log(position)
}

menorNumero([2, 4, 6, 7, 10, 0, -3])

function maiorCaracter(array){

    let position;
    let maior = 0;

    for(index=0; index<array.length; index++){

        if(array[index].length > maior){

            maior = array[index].length
            position = index+1
        }
      
    }

    return console.log(position)
}

maiorCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

function numeroRepete(array){

    let maior = 0;

    for(index=0; index<array.length; index++){

        let cont = 0;
        for(index2=0; index2<array.length; index2++){

            if(array[index] == array[index2]){

                cont++
            }
        }

        if(cont > maior){

            maior = cont;
            return console.log(array[index])
        }
    }


}

numeroRepete([2, 3, 2, 5, 8, 2, 3])

function finalIgual(palavra, final){

    
    if(final.length == 2){

        let cont =0;
        for(index=1; index<= final.length; index++){

            if(palavra[palavra.length - index] == final[final.length - index]){

                cont++
            }


        }

        return console.log(cont == final.length ? true : false)
            
    }
}

finalIgual('trybe', 'be')

