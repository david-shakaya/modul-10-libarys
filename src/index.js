import './modal.js' //Импорт всего файла с модалкой
import Siema from 'siema';
import './PNotify.js'
import './tippy.js'



const btnNextRef = document.querySelector('.btn-siema-next');
const btnPrewRef = document.querySelector('.btn-siema-prew');

const mySiema = new Siema({
    loop:() => {} 
});

btnNextRef.addEventListener('click', () => {
    mySiema.next()
})
btnPrewRef.addEventListener('click', () => {
    mySiema.prev()
    console.log('');
})

import './sass/styles.scss' 


/* 
* - gumshoe
*/  

 var spy = new Gumshoe('#nav-menu a');



