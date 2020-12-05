const dog = {
  name: 'Mango',
  age: 3,
  isHappy: true,
};

//JSON.stringify(dog) - преобразовал обьект в строку который является JSON -форматом
const dogJSON = JSON.stringify(dog);
console.log(dogJSON);// {"name":"Mango","age":3,"isHappy":true}


//JSON.parse(dogJSON) - преобразовал строку(JSON) обратно в обьект.
const json = JSON.parse(dogJSON)
console.log(json); // {name: "Mango", age: 3, isHappy: true}



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> - Хранение информации на стороне клиента - <<<<<<<<<<<<<<<<<<<<<<<<

/* 
* Web Storage API — включает в себя локальное хранилище(localStorage), и предоставляет способ хранения пар ключ: значение.
* Данные в веб - хранилище, в отличие от куки, сохраняются даже при закрытии браузера или выключении компьютера. 
*/

localStorage.setItem('theme', 'dark') //Передаем в localStorage стоку. Ключ и значение

// У нас есть обьект который нужно(СОХРАНИТЬ) передать в localStorage
const obj = {
  theme: 'dark',
  fontSize: 14,
  fontWeigth: 700
}

// Передаем в локал.хран название обьекта и метод который преобазует в строку: JSON.stringify(obj)
localStorage.setItem('obj', JSON.stringify(obj))

//ВОзвращаем с локал.храг строку и переводит его в обьект 
const value = localStorage.getItem('obj') // >> ВОзвращает с хранилища 
const parse = JSON.parse(value)  // Переводит в обьект
console.log('распарсим:', parse);


/* 
* Делаем форму для отправки в локал. хран
*/

const formRef = document.querySelector('.form-js');
const textArRef = document.querySelector('.form-js > textarea');


formRef.addEventListener('submit', getText)
textArRef.addEventListener('input', getValue)


populateMessage()


function getText(e) {
  e.preventDefault()

  console.dir(e.target[1].value);
  formRef.reset() // При нажатии на кнопку отправить очищаем содержимое техтареа
  localStorage.removeItem('usersMessage') //При нажатии на кнопку отправить Удаляем usersMessage из локального хранилищаа
 
}

function getValue(e) {
  
  const message = e.target.value //Текст вводимый пользователем в текстАреа
  localStorage.setItem('usersMessage', message) //Отправляем в локал.хран то что печатают в техтАрее

}

function populateMessage() {
  const seveMesage = localStorage.getItem('usersMessage') // ВОзвращает из лок.хранилища свойство ключа usersMessage. То что написал пользов в техАреа
if (seveMesage) { // Если seveMesage не пустой то присвой тахтарее то что записано в локал.хран
  textArRef.value = seveMesage
  }
}




// >>>>>>>>>>>>>>>>>>>>>>>>>> Шаблонизация. Шаблонизатор хендалбар <<<<<<<<<<<<<<<<<<<<<
import itemsTemplate from '../src/templates/galery-items.hbs'

const objArr = itemsTemplate({
  tehnologi: ['HTML', 'CSS', 'JS', 'JSON', 'GitHub']
})

 
const ulRef = document.querySelector('.ul-hbs');

ulRef.insertAdjacentHTML('beforeend', objArr);

// // >>>>>>>>>>>  - Задача!
// //Добавить страны через шаблон

// import itemsTemplate from '../src/templates/galery-items.hbs'
// import countries from './country.json'

// const ulRef = document.querySelector('.ul-hbs');
// const markup = itemsTemplate(countries)

// ulRef.insertAdjacentHTML('beforeend', markup)
