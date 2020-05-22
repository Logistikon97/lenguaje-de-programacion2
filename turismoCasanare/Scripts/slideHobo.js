let slider = document.querySelector(".slider-contenedor1");
let sliderIndividual = document.querySelectorAll(".contenido-slider1");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 6000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform .8s";
            contador=1;
        },6000)
    }
}