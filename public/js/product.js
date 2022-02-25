const productImages = document.querySelectorAll(".product-image img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageslide = 0;


productImages.forEach((item, i) => {
item.addEventListener('click', () => {

    productImages[activeImageslide].classList.remove('active');
    item.classList.add('active');
    productImageSlide.style.backgroundImage = `url('${item.src}')`;
    activeImageslide= i;


     })
})
// tooglle size button
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) =>{
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })

})




