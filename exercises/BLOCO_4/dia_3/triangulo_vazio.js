let n = 7;
let string = '';
let posicaoInicialAsterisco = (n + 1) / 2
let numerosMenores = posicaoInicialAsterisco;
let numerosMaiores = posicaoInicialAsterisco


for(linha = 1; linha<=n; linha++){

  if(linha % 2  == 1){

    for(indexLinha = 1; indexLinha<=n; indexLinha++){
        
        if ((indexLinha < numerosMenores || indexLinha > numerosMenores) && (indexLinha < numerosMaiores || indexLinha > numerosMaiores)){

            string += '-'
        } else {
            string += '*'
        }
  
    }
    console.log(string)
    numerosMaiores += 1
    numerosMenores -= 1
    string = '';
  }
}