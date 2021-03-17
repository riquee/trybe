const inputState = document.querySelector("#state");
const inputDate = document.querySelector("#date-office");
const forms = document.querySelector("#forms");
const list = document.querySelectorAll("#forms [name]");
const submit = document.querySelector("#submit");
const info = document.querySelector("#info");
const states = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};
const addState = () => {
  const label = document.querySelector("#state").parentNode;
  for (state in states) {
    const element = document.createElement("option");
    inputState.appendChild(element);
    element.value = state;
    element.textContent = states[state];
  }
};
addState();

const generator = (e) => {
  e.preventDefault();
  Object.keys(list).forEach((index) => {
    const li = document.createElement("li");
    if (list[index].name === "state") {
      info.appendChild(li);
      li.className = "list-group-item";
      li.textContent = `Estado: ${list[index].value}`;
    } else if (list[index].name === "home") {
      if(list[index].checked) {
        info.appendChild(li);
        li.className = "list-group-item";
        li.textContent = `Moradia: ${list[index].parentNode.textContent}`;
      }
    } else {
      info.appendChild(li);
      li.className = "list-group-item";
      li.textContent = `${list[index].parentNode.textContent}: ${list[index].value}`
    }
  });
};

forms.addEventListener("submit", generator);
