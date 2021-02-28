let numero = 6;
let cont = 0;

for(i=1; i<=numero; i++){


    if(numero % i == 0){
        cont++
    }
}

if(cont == 2){

    console.log(`${numero} : É um número primo`)
} else {
    console.log(`${numero} : Não é um número primo`)
}