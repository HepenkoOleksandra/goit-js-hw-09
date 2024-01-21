import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./images";

const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onGalleryListClick);

const markup = images.map(({ preview, original, description }) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
}).join('\n');

galleryList.insertAdjacentHTML("beforeend", markup);


let gallery = new SimpleLightbox('.gallery a');
const instance = basicLightbox.create(
  `<img class="modal-image" src="" alt="Modal image" />`, {
  
    onShow: (instance) => {
      document.addEventListener('keydown', onEscPress)
    },
    
    onClose: (instance) => {
      document.removeEventListener('keydown', onEscPress)
    }
  }
)
  
function onGalleryListClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
 
  const modalImg = instance.element().querySelector('.modal-image');
  modalImg.src = e.target.dataset.source;
  modalImg.alt = e.target.alt;
  instance.show()
}

function onEscPress(e) {
  if (e.code === "Escape") {
    instance.close()
  }
}