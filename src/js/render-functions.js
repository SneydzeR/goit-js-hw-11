import { fetchInfo } from './pixabay-api';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function request() {
  const input = document.querySelector('.search');
  const inputValue = input.value.trim();
  return inputValue;
}
function renderImages(data) {
  const gallery = document.querySelector('.gallery');
  const images = data.hits.map(element => {
    return `<li class="gallery-item">
        <a class="image-link" href="${element.largeImageURL}">
          <img class="image" src="${element.webformatURL}" alt="${element.tags}" />
        </a>
        <ul class="about-image">
          <li class="likes">
            <span class="likes-title">Likes</span>
            <span class="likes-count">${element.likes}</span>
          </li>
          <li class="views">
            <span class="views-title">Views</span>
            <span class="views-count">${element.views}</span>
          </li>
          <li class="comments">
            <span class="comments-title">Comments</span>
            <span class="comments-count">${element.comments}</span>
          </li>
          <li class="downloads">
            <span class="downloads-title">Downloads</span>
            <span class="downloads-count">${element.downloads}</span>
          </li>
        </ul>
      </li>`;
  }).join('');
  gallery.insertAdjacentHTML('beforeend', images);
  new SimpleLightbox('.gallery a', { captionsData: 'alt', captionsDelay: 250 }).refresh();
}

export function markup(searchWord) {
  const loader = document.querySelector('.loader');
  // Перед виконанням запиту показуємо індикатор завантаження
  loader.style.display = 'block';
  fetchInfo(searchWord).then(data => {
    loader.style.display = 'none'; // Приховуємо індикатор завантаження
    if (data.hits.length === 0) {
      iziToast.error({
        theme: 'dark',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        position: 'topRight',
        progressBarColor: '#B51B1B',
      });
    } else {
      renderImages(data);
    }
  }).catch(error => {
    // Приховуємо індикатор завантаження у разі помилки
    loader.style.display = 'none';
    iziToast.error({
      theme: 'dark',
      message: 'Failed to fetch images. Please try again!',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight',
      progressBarColor: '#B51B1B',
    });
    console.error('Error during fetch operation: ', error);
  });
}
