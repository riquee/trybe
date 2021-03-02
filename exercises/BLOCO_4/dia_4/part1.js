let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  // console.log(`Bem-vinda, ${info.personagem}`)

  info['recorrente'] = 'Sim';
 // console.log(info)

  for (key in info){

   // console.log(key)
}

for (key in info){

   // console.log(info[key])
}


for( key in info){


    let info2 = {}
    switch(key){
        case 'personagem':
            info2[`${key}`] = 'AAAAAAAAAAAAA'
            break;
        case 'origem':
            info2[`${key}`] = 'Margarida e Tio Patinhas'
                break;
        case 'nota':
            info2[`${key}`] = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'
            break;
        case 'recorrente':
            info2[`${key}`] = 'Ambos recorrentes // Atenção para essa última linha!'
            break;
    } 
    console.log(info2)

    
}