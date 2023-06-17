import { galleryItems } from './gallery-items.js';
// Change code below this line


// 1) Render

const galleryEl = document.querySelector(".gallery")
galleryEl.innerHTML = ""

const markup = galleryItems.map(({ preview, original, description })=>
`<li class="gallery__item">
        <a href="${original}" class="gallery__link">    
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
         
        /> 
      </a>
      </li>`)
    .join("");
 
galleryEl.insertAdjacentHTML("beforeend", markup);

// 2) Modal


document.querySelector('.gallery').onclick = (element) => {
element.preventDefault();

if (element.target.nodeName !== "IMG") return;
const datasetSource = element.target.dataset.source;
const instance = basicLightbox.create(
  `<img src="${datasetSource}" width="1280" height="auto"/>`,
  
{
onShow: (instance) => {
 window.addEventListener('keydown', escKeyPress);
},
onClose: (instance) => {
window.removeEventListener('keydown', escKeyPress);
},
}
);
  
instance.show();

function escKeyPress(element) {
  if (element.code !== 'Escape') return;
  instance.close();
}
}
