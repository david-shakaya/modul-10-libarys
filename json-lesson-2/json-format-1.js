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

const formRef = document.querySelector('.form-js');
const textArRef = document.querySelector('.form-js > textarea');




formRef.addEventListener('submit', getText)
textArRef.addEventListener('input', getValue)

function getText(e) {
  e.preventDefault()

console.dir(e.target[1].value);
}

function getValue(e) {
  
  const strJson = JSON.stringify(e.target.value);
  localStorage.setItem('strJson', strJson)
  
}

// Остановился на 20 минуте

