let n = 5;


for(i=1; i<=5; i++){

    let string = '';

    for(j=1; j<n+1; j++){

        if(j > n-i){
            string += '*'
        } else {
            string += ' '
        }
        
    }
    console.log(string)

}
