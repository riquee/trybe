window.onload = () => {
    selectorElement('body').style.backgroundColor = (JSON.parse(localStorage.getItem('backgroundColor')).backgroundColor)
    selectorElement('body').style.color = (JSON.parse(localStorage.getItem('color')).color)
    selectorElement('body').style.fontSize = (JSON.parse(localStorage.getItem('fontSize')).fontSize)
    selectorElement('body').style.lineHeight = (JSON.parse(localStorage.getItem('lineHeight')).lineHeight)
}

// Create function selectores
function selectorElement(target) {
    return document.querySelector(target);
}

let elementStyle = {
    backgroundColor: '',
    color: '',
    fontSize: '',
    lineHeight: '',
}

selectorElement('#button-background').addEventListener('click', () => {
    let input = selectorElement('#input-background');
    selectorElement('body').style.backgroundColor = input.value
    elementStyle.backgroundColor = input.value
    localStorage.setItem('backgroundColor',JSON.stringify(elementStyle));
    input.value = '';
});

selectorElement('#button-color').addEventListener('click', () => {
    let input = selectorElement('#input-color');
    selectorElement('span').style.color = input.value
    elementStyle.color = input.value
    localStorage.setItem('color',JSON.stringify(elementStyle));
    input.value = '';
});

selectorElement('#button-font').addEventListener('click', () => {
    let input = selectorElement('#input-font');
    selectorElement('span').style.fontSize = `${input.value}px`
    elementStyle.fontSize = `${input.value}px`
    localStorage.setItem('fontSize',JSON.stringify(elementStyle));
    input.value = '';
});

selectorElement('#button-line').addEventListener('click', () => {
    let input = selectorElement('#input-line');
    selectorElement('span').style.lineHeight = `${input.value}px`
    elementStyle.lineHeight = `${input.value}px`
    localStorage.setItem('lineHeight',JSON.stringify(elementStyle));
    input.value = '';

});