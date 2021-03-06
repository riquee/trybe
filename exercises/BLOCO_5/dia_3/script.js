function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// MEETINGS STORAGE
let meetings = []
let selected = {}
// Create Elements
function createElements(target, type) {
  let selector = document.querySelector(target);
  let element = document.createElement(type);
  selector.appendChild(element);
  return element;
}
// Create Days
dezDaysList.map((elem) => {
  let text = elem;
  elem = createElements("#days", "li");
  elem.innerText = text;
  elem.style.color = 'rgb(119,119,119)'
  elem.className = "days";
  if (text == 24 || text == 25 || text == 26) elem.className += " holiday";
  if (text == 4 || text == 11 || text == 18 || text == 25)
    elem.className += " friday";
    elem.addEventListener('click', dayColors)
});
// Create buttons
function buttonCreate(id, className, color, text) {
  let element = createElements(".buttons-container", "button");
  element.innerText = text;
  element.id = id;
  element.addEventListener("mouseup", function () {
    let seletor = document.querySelectorAll(className);
    for (holi of seletor) {
      if (holi.style.color) {
        if (holi.style.color == color) {
          holi.style.color = "#777";
        } else {
          holi.style.color = color;
        }
      } else if (!holi.style.color) {
        holi.style.color = color;
      }
    }
  });
}
buttonCreate("btn-holiday", ".holiday", "red", "Feriado!");
buttonCreate("btn-friday", ".friday", "blue", "Sextouu!!!");
// Zoom days
function addZoom(){
  let days = document.querySelectorAll('.days')
  for(day of days) {
    day.addEventListener('mouseover', zoomDayin)
    day.addEventListener('mouseout', zoomDayout)
  }  
}
function zoomDayin(elem) {
  let element = elem.target
  element.style.fontSize = "40px";
}
function zoomDayout(elem) {
  let element = elem.target
  element.style.fontSize = "20px";
}
addZoom()
// CREATE TASKS
function addTask(name){
  let element = createElements('.my-tasks','span')
  element.innerText = name;
}
addTask('Ir ao dentista')
  // CREATE SUBTITLE
  function addSubTitle(color){
    selected.backgroundColor = color;
    selected.status = 'nao';
    let element = createElements('.my-tasks', 'div')
    element.className = 'task'
    element.style.backgroundColor = selected.backgroundColor;
    element.addEventListener("click", function (){
      selectedOr(element)
    });
  }
  addSubTitle('green')
  // Days Colors
  function dayColors(elem){
    if(selected.status == 'sim') {
      elem.target.style.color = selected.backgroundColor
    } else {
      elem.target.style.color = 'rgb(119,119,119)'
    }
  }
  // Selected or
  function selectedOr(elem) {
    if(elem.className.includes('selected')) {
      elem.className = elem.className.replace(' selected','')
      selected.status = 'nao'
    } else {
      elem.className += ' selected'
      selected.status = 'sim'
    }
    console.log(elem)
    console.log(selected)
  }
  // CREATE MEETINGS
  function addMeeting(){
    let select = document.querySelector('#btn-add')
    let select2 = document.querySelector('#task-input')
    select.addEventListener('click', text)
    select2.addEventListener('keyup', text)

    // select2.addEventListener('keyup', (event) =>{
    //   let select = document.querySelector('#task-input')

    //   }
    // })

  }
  function text(event) {

    let select = document.querySelector('#task-input')
    let newtask;
      if(select.value == '') {
        if(event.keyCode === 13 || event.detail === 1) {
          alert('DIGITE ALGO')
        }
      } else {
        if(event.keyCode === 13 || event.detail === 1) {
        meetings.push(newtask = createElements('.task-list', 'li'))
        newtask.innerText = select.value
        select.value = ''
        }
      }
  }
  addMeeting()