//@prepros-append main.js
// ПодКЛЮЧЕНИЕ ФАЛОВ JS============================================================================



const topBtn = document.querySelector('.controls__top');
const bottomBtn = document.querySelector('.controls__bottom');
const sideBar = document.querySelector('.sidebar');

const slides = document.querySelectorAll('.sidebar__block').length;
sideBar.style.top = `-${(slides - 1) * 100}vh`;

const photo = document.querySelector('.back');
let activeSlideIndex = 0;

const container = document.querySelector('.main__body');
topBtn.addEventListener('click', () => {
   changeSlide('top');
})

bottomBtn.addEventListener('click', () => {
   changeSlide('down');
})

document.addEventListener('keydown', event => {
   if (event.key === 'ArrowDown') {
      changeSlide('down')
   }
   else if (event.key === 'ArrowUp') {
      changeSlide('top')
   }
   console.log(event.key);
});


function changeSlide(direction) {
   if (direction === 'top') {
      activeSlideIndex++;
      if (activeSlideIndex === slides) {
         activeSlideIndex = 0;
      }
   } else if (direction === 'down') {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
         activeSlideIndex = slides - 1;
      }
   }
   const heigth = container.clientHeight;
   photo.style.transform = `translateY(-${activeSlideIndex * heigth}px)`;
   sideBar.style.transform = `translateY(${activeSlideIndex * heigth}px)`;
}













