let slid = document.querySelector(".swiper-container").classList;
const ul = document.querySelector(".swiper-wrapper");
const list = ul.querySelectorAll(".repair__item");
let buttonPokaz = document.querySelector(".button__pokaz");
let buttonSkrit = document.querySelector(".button__skrit");
let heig = document.querySelector(".repair__content")
buttonSkrit.classList.add("nonactive");
buttonPokaz.classList.add("nonactive");
const breakpoint = window.matchMedia('(min-width:768px)');
let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 180,
  loop: true,
  destroy: false,
  pagination:{
    el: ".swiper-pagination",
    clickable: true,
  }
}) ;

let non =  function () { 
  list.forEach(function(item , i ){
    item.classList.remove("nonactive");
  })
};

let cheked = function vid() { 
  if (breakpoint.matches){
    buttonPokaz.classList.add("active");
    status();
    mySwiper.destroy(true, true);
    mySwiper = null
    slid.remove("swiper-container");
    ul.classList.remove("swiper-wrapper");
    document.querySelector('.repair__list').removeAttribute('id');
    document.querySelector('.repair__list').removeAttribute('aria-live');
    document.querySelector('.repair__list').removeAttribute('style');
    list.forEach(function(item ,i){
    item.classList.remove("swiper-slide");
    item.removeAttribute("aria-label");
    item.removeAttribute( "role");
    item.removeAttribute( "style");
    } 
    )
  }
  else if(!breakpoint.matches){
    buttonSkrit.classList.add("nonactive");
    buttonPokaz.classList.add("nonactive");
    buttonSkrit.classList.remove("active");
    buttonPokaz.classList.remove("active");
    mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 180,
      loop: true,
      destroy: false,
      pagination:{
        el: ".swiper-pagination",
        clickable: true,
      }
    }
    );
    mySwiper.init() ;
    slid.add("swiper-container");
    ul.classList.add("swiper-wrapper");
    heig.removeAttribute("style");
    list.forEach(function(item, i){
      item.classList.add("swiper-slide");
    }
    )
  }
}
window.addEventListener("resize", cheked); 
window.addEventListener("load", cheked); 
let status = function stat() {
  buttonSkrit.classList.remove("active");
  buttonSkrit.classList.add("nonactive");
  buttonPokaz.classList.add("active");
  buttonPokaz.classList.remove("nonactive");
  if (1120 < window.innerWidth){
    heig.style.height = "250px";
    non();
    for (let i = 8; i < list.length; i++){
        list[i].classList.add("nonactive");
        list[i].classList.remove("active");
      } 
  }
  if (768 < window.innerWidth && window.innerWidth < 1120){
    heig.style.height = "250px";
    for (let i = 6; i < list.length; i++){
        list[i].classList.add("nonactive");
        list[i].classList.remove("active");
      } 
  }
  
};
status();
buttonPokaz.addEventListener("click", function stat() {
  buttonSkrit.classList.add("active");
  buttonSkrit.classList.remove("nonactive");
  buttonPokaz.classList.remove("active");
  buttonPokaz.classList.add("nonactive");
  if (1120 < window.innerWidth){
    heig.style.height = "370px";
    non();
    for (let i = 8; i < list.length; i++){
        list[i].classList.add("active");
        list[i].classList.remove("nonactive");
      } 
  }
  if (768 < window.innerWidth && window.innerWidth < 1120){
    heig.style.height = "370px";
    for (let i = 6; i < list.length; i++){
        list[i].classList.add("active");
        list[i].classList.remove("nonactive");
      } 
  } 

});
  buttonSkrit.addEventListener("click", status);

