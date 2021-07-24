let slid = document.querySelector(".swiper-container").classList;
let ul = document.querySelector(".swiper-wrapper").classList;
let list = document.querySelectorAll(".repair__row");
let buttonPokaz = document.querySelector(".button__pokaz");
let buttonSkrit = document.querySelector(".button__skrit");
let heig = document.querySelector(".repair__footer")
buttonSkrit.style.display = "none";
buttonPokaz.style.display = "none";
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
let raz = function razz(){ let raz = window.innerWidth;  return raz;}
let cheked = function vid() { 
  if (breakpoint.matches){
    buttonPokaz.style.display = "block";
    status();
  }
  else if(!breakpoint.matches){
    buttonSkrit.style.display = "none";
    buttonPokaz.style.display = "none";
  }
  if (breakpoint.matches){
    mySwiper.destroy(true, true);
    mySwiper = null
    slid.remove("swiper-container");
    ul.remove("swiper-wrapper");
    document.querySelector('.repair__list').removeAttribute('id');
    document.querySelector('.repair__list').removeAttribute('aria-live');
    document.querySelector('.repair__list').removeAttribute('style');
    for (let i = 0; i < list.length; i++){
    list[i].classList.remove("swiper-slide");
    list[i].removeAttribute("aria-label");
    list[i].removeAttribute( "role");
    list[i].removeAttribute( "style");
    } 
  }
  else if(!breakpoint.matches){
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
    ul.add("swiper-wrapper");
    heig.removeAttribute("style");
    for (let i = 0; i < list.length; i++){
      list[i].classList.add("swiper-slide");
    }
  }
}
window.addEventListener("resize", cheked); 
window.addEventListener("load", cheked); 
let status = function stat() {
  if (1120 < raz()){
    buttonSkrit.style.display = "none";
    buttonPokaz.style.display = "Block";
    heig.style.height = "250px";
    for (let i = 6; i < list.length; i++){
      list[i].classList.remove("nonactive");
    } 
    for (let i = 8; i < list.length; i++){
        list[i].classList.add("nonactive");
        list[i].classList.remove("active");
      } 
  }
  if (768 < raz() && raz() < 1120){
    buttonSkrit.style.display = "none";
    buttonPokaz.style.display = "Block";
    heig.style.height = "250px";
    for (let i = 6; i < list.length; i++){
        list[i].classList.add("nonactive");
        list[i].classList.remove("active");
      } 
  }
  
};
status();
buttonPokaz.addEventListener("click", function stat() {
  if (1120 < raz()){
    buttonSkrit.style.display = "block";
    buttonPokaz.style.display = "none";
    heig.style.height = "370px";
    for (let i = 6; i < list.length; i++){
      list[i].classList.remove("nonactive");
    } 
    for (let i = 8; i < list.length; i++){
        list[i].classList.add("active");
        list[i].classList.remove("nonactive");
      } 
  }
  if (768 < raz() && raz() < 1120){
    buttonSkrit.style.display = "block";
    buttonPokaz.style.display = "none";
    heig.style.height = "370px";
    for (let i = 6; i < list.length; i++){
        list[i].classList.add("active");
        list[i].classList.remove("nonactive");
      } 
  } 

});
  buttonSkrit.addEventListener("click", status);

