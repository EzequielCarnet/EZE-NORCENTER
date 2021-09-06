const images = document.querySelectorAll(".img");
const containerImage = document.querySelector(".lightbox");
const imageContainer = document.querySelector(".lightbox__show");
const lightboxp = document.querySelector(".lightbox__p");

images.forEach(image =>{
    image.addEventListener("click", ()=>{
       
       addImage(image.getAttribute("src"),image.getAttribute("alt"));
    })
})

const addImage =(src, alt)=>{
    containerImage.classList.toggle("lightbox__move");
    imageContainer.classList.toggle("lightbox__scale");
    imageContainer.src = src;
    lightboxp.innerHTML = alt;
}

containerImage.addEventListener("click", ()=>{
    containerImage.classList.toggle("lightbox__move")
    imageContainer.classList.toggle("lightbox__scale");
})