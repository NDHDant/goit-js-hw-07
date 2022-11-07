import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalletyMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalletyMarkup(galleryItems) {
	return galleryItems.map(({preview, original, description}) => {
		return `
		<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image ${description}"
    />
  </a>
</div>
		`
	}).join("");
};

galleryContainer.addEventListener('click', onPreviewImgClick);

function onPreviewImgClick(evt) {
	evt.preventDefault();
	// if (!evt.target.classList.contains('gallery__item')) {
	// 	return;
	// }
	const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280" height="auto">
`, {
		onShow: () => window.addEventListener("keydown", onEsc),
		onClose: () => window.removeEventListener("keydown", onEsc)
	});

	function onEsc(evt) {
		if (evt.code === "Escape") {
			instance.close();
		}
	}
	instance.show()
	console.log(evt.code);
};


