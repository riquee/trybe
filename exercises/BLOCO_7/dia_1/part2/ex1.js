const checkFactor = (n) => {
    let factor = 1;
    for(let index = 1; index <= n; index +=1) factor *= index;
    return factor;
}