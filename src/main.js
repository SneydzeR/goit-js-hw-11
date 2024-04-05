import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { request, markup } from './js/render-functions';

const input = document.querySelector('.search');
const button = document.querySelector('.button');
const gallery = document.querySelector('.gallery');

function handleSearch(evt) {
  evt.preventDefault();
  const searchWord = request();
  if (searchWord.length === 0) {
    iziToast.error({
      theme: 'dark',
      message: 'The field must be fullfield',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight',
      progressBarColor: '#B51B1B',
    });
  } else {
    gallery.innerHTML = '';
    markup(searchWord); 
    input.value = ''; // Очищаємо поле вводу після виконання пошуку
  }
}

button.addEventListener('click', handleSearch);
