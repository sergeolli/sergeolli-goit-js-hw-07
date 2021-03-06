import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems)
galleryContainer.innerHTML = galleryMarkup;

function createGalleryMarkup(galleryItems) {
    return galleryItems
     .map(({ preview, original, description }) => {
       return `
<li class="gallery__item">
<a class="gallery__link" href='${original}'>
<img class="gallery__image"
src='${preview}'
alt='${description}'/>
</a>
</li>`;
       }).join('');
};
 galleryContainer.addEventListener('click', onreateGalleryMarkup)

function onreateGalleryMarkup(e) {
       e.preventDefault()
       galleryContainer.removeEventListener('click', onreateGalleryMarkup)
 const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
 })
};

