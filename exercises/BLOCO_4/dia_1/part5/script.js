let nota = 85
let state;

if(nota >= 80 && nota <=100){
    state = 'aprovado'
} else if(nota < 80 && nota >= 40){
    state = 'lista'
} else if(nota < 40 && nota >=0){
    state = 'reprovado'
}

switch(state){
    case 'aprovado':
        console.log('Parabéns, você foi aprovado!')
    break;
    case 'lista':
        console.log('Você está na nossa lista de espera')
        break;
    case 'reprovado':
        console.log('Você foi reprovado')
        break;
    default:
        console.log('Não se aplica')
        break;
}