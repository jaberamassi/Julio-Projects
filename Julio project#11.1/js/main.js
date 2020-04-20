let close = document.querySelector(".nav-icons.close");
let open = document.querySelector(".nav-icons.open");
let myList = document.querySelector(".nav-list");

open.addEventListener("click", function() {
  myList.classList.add("active");
});

close.addEventListener("click", function() {
  myList.classList.remove("active");
});
