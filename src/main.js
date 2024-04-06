// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { request, markup } from './js/render-functions';

// Отримати доступ до елементів DOM
const form = document.querySelector('.search-form'); // Додано змінну для форми
const gallery = document.querySelector('.gallery');

function handleSearch(evt) {
  evt.preventDefault();
  const searchWord = request();
  if (searchWord.length === 0) {
    iziToast.error({
      theme: 'dark',
      message: 'The field must be filled',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight',
      progressBarColor: '#B51B1B',
    });
  } else {
    gallery.innerHTML = ''; 
    markup(searchWord);
    form.elements.search.value = ''; // Очищення поля форми після відправлення
  }
}

form.addEventListener('submit', handleSearch);
