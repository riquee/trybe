function operacoes(n1, n2, operator){
    
    let result;
    switch(operator){

        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
    }

    return console.log(result);

}

function returnMaior2(n1, n2){

    let result;
    
    if(n1 > n2){

        return `${n1} e maior`

    } else if(n2 > n1){

        return `${n2} e maior`
    }
}

console.log(returnMaior2(5,12))

function returnMaior3(n1, n2, n3){

    let result;
    
    if(n1 > n2 && n1 > n3){

        return n1

    } else if(n2 > n1 && n2 > n3){

        return n2
    } else if(n3 > n1 && n3 > n2)

        return n3
}

console.log(returnMaior3(5,12,20))

function positiveOrNegative(n1){

    let result;
    if(n1 == 0){

        result = 'zero'

    } else if(n1 >0){

        result = 'positive'
    } else {

        result = 'negative'
    }

    return console.log(result)
}

positiveOrNegative(-5)

function triangle (n1, n2, n3){

    let calc = (n1 + n2 + n3);

    if(calc == 180 && calc > 0 ){
        
        return true; 
    } else {

        return false;
    }
}

console.log(triangle(60,69,60))

function xadrez (name){

    let moviments;
    name = name.toLowerCase()


    switch(name){

        case 'bishop':
            moviments = 'diagonals';
            break;
        default:
            moviments = 'Peca nao encontrada'
            break;
    }

    return console.log(moviments);
}

xadrez('bishop')

