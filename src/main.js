import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.warning({
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  const delay = new Promise(resolve => setTimeout(resolve, 1000));

  Promise.all([getImagesByQuery(searchQuery), delay])
    .then(([data]) => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#ffffff',
          theme: 'dark',
          close: true,
          progressBarColor: '#b51b1b',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.show({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
        theme: 'dark',
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
});
