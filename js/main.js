


/*------------------------------------------ preloader screen ----------------------*/
let preloader =  setTimeout(() => {
    let preloader = document.querySelector(".loading");
    preloader.style.cssText = "opacity:0";
    setTimeout(() => {
        preloader.style.cssText = " display: none;";
    }, 510)
}, 3000);


/*------------------------------------------------navbar height-------------------- */
let navbar = document.querySelector(".header-section");
window.onscroll = function(){

    if(this.scrollY > 50){
        navbar.style.cssText = `
                padding:10px 0px; background: var(--back);
                box-shadow: 0rem .5rem 1rem rgba(0,0,0,0.2);
        ` ;
    }else{
        navbar.style.cssText = "padding:20px 0px";
    }
};
/*-----------------------------------------------------responseve navbar--------------------- */
let navBtn = document.querySelector(".toggle-nav");
let navList = document.querySelector(".nav-list");

navBtn.addEventListener("click",(eo) => {
    navList.classList.toggle("open-close");
    navBtn.classList.toggle("animation");
});

// close nav list when click on any nav link
document.addEventListener("click",(eo) => {
    if(eo.target.closest(".nav-item")){
         navList.classList.remove("open-close");
         navBtn.classList.remove("animation");
    }
})



//  <!-- Initialize Swiper -->
 var swiper = new Swiper(".mySwiper", {
   zoom: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });