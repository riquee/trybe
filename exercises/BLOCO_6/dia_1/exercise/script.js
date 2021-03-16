const inputState = document.querySelector("#state");
const inputDate = document.querySelector("#date-office");
const forms = document.querySelector("#forms");
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
    element.textContent = state;
  }
};
addState();

const checkDate = (event) => {
  const regex = /(\d{2})\/(\d{2})\/(\d{4})/;
  const data = inputDate.value.match(regex);
  if (
    !data ||
    data[1] > 31 ||
    data[1] < 1 ||
    data[2] > 12 ||
    data[2] < 1 ||
    data[3] < 0
  ) {
    event.preventDefault();
  } else {
    event.preventDefault();
    const list = document.querySelectorAll("#forms")[0];
    for (const key of list) {
      if (key.value) {
        const elem = document.createElement("li");
        info.appendChild(elem);
        elem.textContent = `${key.parentNode.textContent}: ${key.value}`
      }
    }

  }
};
forms.addEventListener("submit", checkDate);
