let openMenu = document.querySelector('.menu-toggler')
let navList = document.querySelector("nav")

openMenu.addEventListener("click", function() {
    navList.classList.toggle("active")
})