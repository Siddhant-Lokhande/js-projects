const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelectorAll(".slider-indicator");


const updatePagination = (tab,index) => {
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
    sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
}

console.log("Hello World");

const swiper = new Swiper(".slider-container",{
    effect: "fade",
    speed:1300,
    // autoplay:{delay:4000}
});

sliderTabs.forEach((tab,index) =>{
    tab.addEventListener("click", () =>{
        swiper.slideTo(index);
        updatePagination(tab,index);
    });
});