// Menu
const menu = document.querySelector('menu');
const menuBtn = document.getElementById('menu-btn');
menuVisible = false;

menuBtn.addEventListener('click', () => {
  if (!menuVisible) {
    menu.classList.remove('hidden');
    menu.classList.add('block');
    menuVisible = true;
  } else {
    menu.classList.remove('block');
    menu.classList.add('hidden');
    menuVisible = false;
  }
});

// Images
const header = document.querySelector('header');
const transformImage = document.getElementById('transform-image');
const standOutImage = document.getElementById('stand-out-image');
const graphicDesignImage = document.getElementById('graphic-design-image');
const photographyImage = document.getElementById('photography-image');
const milkBottlesGalleryImage = document.getElementById('milk-bottles-gallery-image');
const orangeGalleryImage = document.getElementById('orange-gallery-image');
const coneGalleryImage = document.getElementById('cone-gallery-image');
const sugarCubesGalleryImage = document.getElementById('sugar-cubes-gallery-image');

const changeImages = () => {
  if (window.innerWidth >= 640) {
    // Desktop
    header.style.backgroundImage = 'url(./images/desktop/image-header.jpg)';
    transformImage.src = './images/desktop/image-transform.jpg';
    standOutImage.src = './images/desktop/image-stand-out.jpg';
    graphicDesignImage.src = './images/desktop/image-graphic-design.jpg';
    photographyImage.src = './images/desktop/image-photography.jpg';
    milkBottlesGalleryImage.src = './images/desktop/image-gallery-milk-bottles.jpg';
    orangeGalleryImage.src = './images/desktop/image-gallery-orange.jpg';
    coneGalleryImage.src = './images/desktop/image-gallery-cone.jpg';
    sugarCubesGalleryImage.src = './images/desktop/image-gallery-sugar-cubes.jpg';

  } else {
    // Mobile
    header.style.backgroundImage = 'url(./images/mobile/image-header.jpg)';
    transformImage.src = './images/mobile/image-transform.jpg';
    standOutImage.src = './images/mobile/image-stand-out.jpg';
    graphicDesignImage.src = './images/mobile/image-graphic-design.jpg';
    photographyImage.src = './images/mobile/image-photography.jpg';
    milkBottlesGalleryImage.src = './images/mobile/image-gallery-milk-bottles.jpg';
    orangeGalleryImage.src = './images/mobile/image-gallery-orange.jpg';
    coneGalleryImage.src = './images/mobile/image-gallery-cone.jpg';
    sugarCubesGalleryImage.src = './images/mobile/image-gallery-sugar-cubes.jpg';
  }
}

window.addEventListener('resize', () => {
  changeImages();
});

changeImages();
