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
       
          alt="${description}"
         
        /> 
      </a>
      </li>`)
    .join("");
 
galleryEl.insertAdjacentHTML("beforeend", markup);

// 2) Modal

let gallery = new SimpleLightbox(".gallery a");

console.log(gallery);
    


gallery.on('show.simplelightbox', function () {
  gallery.options.captionsData = "alt"
  gallery.options.captionDelay = 250
});
