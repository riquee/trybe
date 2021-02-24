let custo = 10
let venda = 20

custo = custo + (custo * 20 / 100)

if(custo <0 || venda < 0){
    
    console.log('Error')
} else {
    console.log(`Lucro: ${venda-custo}`)
}


