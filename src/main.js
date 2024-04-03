// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { request, markup } from './js/render-functions';
// import { button, } from './js/render-functions';

const input = document.querySelector('.search');
const button = document.querySelector('.button');
const gallery = document.querySelector('.gallery');

function renderImages(evt) {
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

    markup();

    input.value = '';
  }
}

input.addEventListener('input', request);
button.addEventListener('click', renderImages);