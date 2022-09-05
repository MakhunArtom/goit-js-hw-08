// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this lin
const galleryEl = document.querySelector('.gallery');

renderGallery(galleryItems);

// Створення розмітки
function renderGallery(items) {
  const creatGallery = items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('afterbegin', creatGallery);
}

// Модалка SimpleLightbox
galleryEl.addEventListener('click', onClickGalleryImg, { once: true });

function onClickGalleryImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}
