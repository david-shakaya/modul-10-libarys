import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


tippy.setDefaultProps({
    delay: 50,
}); //Прописываем настройки для всех кнопок


tippy('#myButton', {
        content: 'Привет я подскаска tippy',
});
      
tippy('[data-tippy-content]'); //Обращаемся к нескольким кнопкам через дата атрибут. В html пишем что будет всплывать

