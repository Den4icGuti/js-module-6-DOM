// Создание коллекции элементов.


const colorsOption = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const buttonsRef = document.querySelector('.buttons');

const createColorPeaker = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.textContent = option.label;
    buttonEl.classList.add('button')
    buttonEl.style.backgroundColor = option.color;
    return buttonEl
  });
};

const elements = createColorPeaker(colorsOption);

buttonsRef.append(...elements)

