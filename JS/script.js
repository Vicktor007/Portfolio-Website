window.addEventListener("scroll", function(){
    const scroll = document.querySelector('.top');
    scroll.classList.toggle("active", window.scrollY > 500)
})

window.addEventListener("scroll", function(){
    const scroll = document.querySelector('.bottom');
    scroll.classList.toggle("active", window.scrollY < 500)
})