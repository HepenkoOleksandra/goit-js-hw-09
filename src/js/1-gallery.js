import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./images";

// Створення розмітки

const galleryList = document.querySelector('.gallery');

const markup = images.map(({ preview, original, description }) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`
}).join('\n');

galleryList.insertAdjacentHTML("beforeend", markup);

// Відкриття модального вікна

let gallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.9,
  captionsData: "alt",
  captionDelay: 500
});
