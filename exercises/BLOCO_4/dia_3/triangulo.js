let n = 5;
let string = "";
let position_asterisc = n - 2;
let maioresPosition = position_asterisc;
let menorPosition = position_asterisc;

for (line = 1; line <= n; line++) {
  if (line % 2 != 0) {

    for (indexLine = 1; indexLine <= n; indexLine++) {

      if(menorPosition <= indexLine && maioresPosition >= indexLine){

        string += '*'
      } else {
        string += ' '
      }
    }
    maioresPosition += 1
    menorPosition -= 1
    console.log(string);
    string = "";
  }

}
