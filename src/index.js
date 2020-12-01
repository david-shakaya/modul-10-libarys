/*  Библиотека всплываюшее окно
* https://basiclightbox.electerious.com/ 
* Устанавливаем с помощью npm Но читаем документацию
*/

import * as basicLightbox from 'basiclightbox'  // Импортируем  плагин
import '../node_modules/basiclightbox/src/styles/main.scss'  //Импортируем стили установленной библиотеки
import './sass/styles.scss'

const buttonOpenRef = document.querySelector('.open');
const instance = basicLightbox.create(  
    document.querySelector('#modal')
)
buttonOpenRef.addEventListener('click',openModal)

function openModal() {
    instance.show()

    if (instance.visible()) {
        const close =document.querySelector('.close');
        close.addEventListener('click', () => {
            instance.close()                 //Просто вызываем встроееный метод и не нужно снимать слушатель
        })
    }
     console.log(instance.visible());
}
// еще НУЖНО РЕаЛИЗОВАТЬ СНЯТИЕ СЛУШАТЕЛЯ ПОСЛЕ ЗАКРЫТИЯ МОДАЛКИ



