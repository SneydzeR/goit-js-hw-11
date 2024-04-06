import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { request, markup } from './js/render-functions';

const form = document.querySelector('.search-form');
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
    evt.currentTarget.elements.search.value = ''; 
  }
}

form.addEventListener('submit', handleSearch);
