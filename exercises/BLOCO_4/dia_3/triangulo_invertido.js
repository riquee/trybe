let n = 5;

/*--------------------------------------------------------------------* 
- COMO O ASTERISCO COMEÇA NA ÚILTIMA POSIÇÃO E VAI INCREMENTANDO, VAMOS CRIAR UMA VARIÁVEL, ATRIBUINDO O VALOR DE N, PARA REPRESENTAR A ÚLTIMA POSIÇÃO DA LINHA.

- OBS: CASO ELE COMEÇASSE PELA PENÚLTIMA POSIÇÃO, FARIAMOS: (n - 1) E ASSIM POR DIANTE.
----------------------------------------------------------------------*/

let position_asterisc = n;

/*--------------------------------------------------------------------* 
- VARIÁVEL RESPONSÁVEL PELO CONTEÚDO DAS LINHAS
- ATRIBUIDO UMA STRING VAZIA PARA PODER CONCATENAR CARACTERES, ESPAÇO OU ASTERICOS. DEPENDENDO DO POSICIONAMENTO DOS ASTERISCOS
----------------------------------------------------------------------*/

let string = ''

/*--------------------------------------------------------------------* 
- LAÇO DE REPETIÇÃO RESPONSÁVEL POR CRIAR CADA LINHA, SENDO O NÚMERO DE LINHAS DETERMINADO PELA VARIÁVEL n;

- A CADA REPETIÇÃO, O LAÇO RESPONSÁVEL PELOS CARACTERES DA LINHA, EXECUTARÁ
----------------------------------------------------------------------*/

for(linha=1; linha <= n; linha++){

    // LAÇO RESPONSÁVEL POR CRIAR CADA CARACTER DA LINHA 
    for(indexLinha=1; indexLinha <= n; indexLinha++){

        /*--------------------------------------------------------------------- 
        - SE A POSIÇÃO ATUAL DO INDEX FOR MENOR QUE ASTERISCO, ELE ADICIONA UM ESPAÇO;
        - EXEMPLO: indexLinha = 3; ELE CONCATENA ESPAÇO NAS POSIÇÕES 1 E 2
        ----------------------------------------------------------------------*/
        if(indexLinha < position_asterisc){
            
            string += ' '
        
        /*--------------------------------------------------------------------- - SE NÃO, ADICIONA UM ASTERISCO NO POSICIONAMENTO QUE SEJA MAIOR OU IGUAL A VARIAVEL;
        - EXEMPLO: indexLinha = 3; ELE CONCATENA ESPAÇO NAS POSIÇÕES 3,4 E 5
        ----------------------------------------------------------------------*/
        } else {
            string += '*'
        }
    }
    /*
    APÓS PERCORRER CADA INDEX DA LINHA, E FAZER A VERIFICAÇÃO, SE CONCATENA ESPAÇO OU ASTERISCO;
    
    FAZEMOS O DECREMENTO NA VARIAVEL position_asterisc;

    OBS: ESSE DECREMENTO É RESPONSÁVEL POR IR RETROCEDENDO O POSICIONAMENTO DO ASTERISCO ATÉ CHEGAR AO COMEÇO DA LINHA.
    */
    position_asterisc -= 1

    // IMPRIMIMOS NOSSA LINHA! QUE JÁ FOI TODA PERCORRIDA E VERIFICADA
    console.log(string)

    // AGORA QUE JÁ IMPRIMOS E VERIFICAMOS, IREMOS ATRIBUIR UMA STRING VAZIA PARA NOSSA VARIAVEL string, PARA QUE A PRÓXIMA LINHA POSSA CONCATENAR OS CARACTERES NAS SUAS NOVAS POSIÇÕES;
    string = ''
}