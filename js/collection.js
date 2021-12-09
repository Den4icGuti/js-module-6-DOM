// Создание коллекции элементов.


const colorsOption = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#91E63' },
  { label: 'indigo', color: '#3F51B5' },
];


const option = colorsOption[0];

const buttonEl = document.createElement('button');

buttonEl.type = 'button';

buttonEl.textContent = option.label;

buttonEl.style.backgroundColor = option.color;

console.log(buttonEl)


const buttonsRef = document.querySelector('.buttons');

buttonsRef.append(buttonEl)

function multiply(a, b) {
  let res = a * b;
  console.log(res);
  return res;
}


multiply(2,4)

