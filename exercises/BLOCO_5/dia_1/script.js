let bodyColor = document.getElementById('container');
bodyColor.style.backgroundColor = 'black'

let class1 = document.querySelector('.emergency-tasks')
class1.style.backgroundColor = '#FF54BD'

let class2 = document.querySelector('.no-emergency-tasks')
class2.style.backgroundColor = '#6CF5FA'

let h3select = document.getElementsByTagName('h3');


for (index = 0; index < h3select.length; index += 1) {
    h3select[index].style.color = '#F9F752'
}