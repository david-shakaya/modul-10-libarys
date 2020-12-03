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