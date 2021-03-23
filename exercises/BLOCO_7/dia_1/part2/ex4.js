const stringConvert = (text) => "Tryber x aqui!".replace(/x/g, text);
const skills = ["js", "html", "css", "git", "github"];
const newString = (fn) => `${fn} ${[...skills]}`;
console.log(newString(stringConvert("Bebeto")));
