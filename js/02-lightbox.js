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


gallery.on('show.simplelightbox', function () {
    gallery.options.captions = false
    gallery.options.captionDelay = 30000
    gallery.options.captionType = "data"
    gallery.options.captionsData="${description}"
    console.log(gallery);
});

// // gallery.on('error.simplelightbox', function (e) {
// // 	console.log(e); // some usefull information
// });
