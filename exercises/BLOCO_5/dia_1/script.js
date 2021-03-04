function text(element, atributo) {
  document.querySelector(element).innerHTML = atributo;
}

function quadrado(element, atributo) {
    document.querySelector(element).style.backgroundColor = atributo;
}

function tudoGrande(element) {
  element = document.querySelectorAll(element);
  for(index = 0; index < element.length; index += 1) {
    element[index].style.textTransform = "uppercase";
  }
}

function exibaTudo(element) {
  element = document.querySelectorAll(element);
  for(index = 0; index < element.length; index += 1) {
    console.log(element[index])
  }
}
exibaTudo('p')
tudoGrande('p')
quadrado('.main-content', 'rgb(76,164,109)')
quadrado('.center-content', 'white')
text('h1', 'Exercício 5.1 - JavaScript')
text('p', 'Lctus metus lorem nam cubilia aenean inceptos nibh sapien pretium bibendum blandit.')






