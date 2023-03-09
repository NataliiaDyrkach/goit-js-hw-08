// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class='gallery__item' href='${original}'><img class='gallery__image' src ='${preview}' alt='${description}'/></a></li>`;
    })
    .join("");
}

const gallaryLightbox = new SimpleLightbox('.gallery__item', { 
    captionsData: 'alt',
    captionDelay: 250,
 });

console.log(galleryItems);
