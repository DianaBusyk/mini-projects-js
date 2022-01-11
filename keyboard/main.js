const textArea = document.getElementById('textarea');

let text = '';

const print = (event) => {
    const keys = document.getElementsByTagName('div');
    let key = null;

    for (let i = 0; i < keys.length ; i++) {
        if (keys[i].innerHTML.toUpperCase() === event.key.toUpperCase()) {
            key = keys[i];
        }
    }
    key.style.background = 'grey';

    let editedText = text;
    switch(event.key) {
        case 'Backspace':
            text = editedText.slice(0, -1);
            break;
        case 'Tab':
            text += '    ';
            break;
        case 'Enter':
            text += '<br>'
            break;
        case 'Shift':
        case 'CapsLock':
            break;
        default:
            text += event.key;
    }
    textArea.innerHTML = text;
}
document.addEventListener('keydown', print)

const onKeyUp= (event) => {
    const keys = document.getElementsByTagName('div');
    let key = null;

    for (let i = 0; i < keys.length ; i++) {
        if (keys[i].innerHTML.toUpperCase() === event.key.toUpperCase()) {
            key = keys[i];
        }
    }
    key.style.background = 'white';
}
document.addEventListener('keyup', onKeyUp)

const textList = document.getElementsByClassName('text-container');

