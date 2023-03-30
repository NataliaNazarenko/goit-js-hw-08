// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

// Change code below this line
const galleryList = document.querySelector('.gallery');

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
};

const makeGalleryMarkupEl = galleryItems.map(makeGalleryMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', makeGalleryMarkupEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
