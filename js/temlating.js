//.innerHTML . Создание разметки с использованием парса строк.
const titleRef = document.querySelector('.title-js')
// titleRef.innerHTML = '<a href = "">Это ссылка)</a>'
// titleRef.innerHTML = ''
// console.log(titleRef)

// .insertAdjacentHTML() - вставить после элемента.

titleRef.insertAdjacentHTML('afterend','<a href = "">Это ссылка)</a>')